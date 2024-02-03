import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const NewPassword = () => {
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState({});
	const [tokenValid, setTokenValid] = useState(false);
	const [passwordModified, setPasswordModified] = useState(false);

	const params = useParams();
	const { token } = params;

	useEffect(() => {
		const checkToken = async () => {
			try {
				const url = `/veterinarians/forgot/${token}`;
				await axiosClient.get(url);
				setAlert({
					msg: 'Please enter your new password',
					error: false,
				});
				setTokenValid(true);
			} catch (error) {
				setAlert({
					msg: 'Invalid token or expired link. Please try again',
					error: true,
				});
			}
		};
		checkToken();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password.length < 6) {
			return setAlert({
				error: true,
				msg: 'Password must be at least 6 characters long',
			});
		}
		// setAlert({});

		try {
			const url = `/veterinarians/forgot/${token}`;
			const { data } = await axiosClient.post(url, { password });

			setAlert({
				error: false,
				msg: data.msg,
			});
			setPasswordModified(true);
		} catch (error) {
			setAlert({
				error: true,
				msg: error.response.data.msg,
			});
		}
	};

	const { msg } = alert;

	return (
		<>
			<div>
				<h1 className='text-brown-500 font-black text-6xl text-center md:text-left'>
					Reset Your Password and Don&apos;t Lose Access to{' '}
					<span className='text-black'>Your Patients</span>
				</h1>
			</div>

			<div className='mt-20 md:mt-0 shadow-lg px-5 py-6 rounded-xl bg-white'>
				{msg && <Alert alert={alert} />}

				{tokenValid && (
					<>
						<form onSubmit={handleSubmit}>
							<div className='my-5'>
								<label className='uppercase text-gray-600 block text-xl font-bold'>
									New Password
								</label>
								<input
									type='password'
									placeholder='Your New Password'
									className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<input
								type='submit'
								value='Save New Password'
								className='bg-brown-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-brown-600 md:w-auto '
							/>
						</form>
					</>
				)}

				{passwordModified && (
					<Link
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
						to='/'
					>
						Log In
					</Link>
				)}
			</div>
		</>
	);
};

export default NewPassword;
