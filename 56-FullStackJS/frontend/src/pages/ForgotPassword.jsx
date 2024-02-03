import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const ForgotPassword = () => {
	const [email, setEmail] = useState('');
	const [alert, setAlert] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (email === '' || email.length < 6) {
			setAlert({
				msg: 'Email is required',
				error: true,
			});
			return;
		}

		try {
			const url = '/veterinarians/forgot';
			const { data } = await axiosClient.post(url, { email });

			setAlert({
				msg: data.msg,
			});
		} catch (error) {
			setAlert({
				msg: error.response.data.msg,
				error: true,
			});
		}
	};
	const { msg } = alert;

	return (
		<>
			<div>
				<h1 className='text-brown-500 font-black text-6xl text-center md:text-left'>
					Recover Your Access and Don&apos;t Lose {''}
					<span className='text-black'>Your Patients</span>
				</h1>
			</div>

			<div className='mt-20 md:mt-0 shadow-lg px-5 py-10 rounded-xl bg-white'>
				{msg && <Alert alert={alert} />}

				<form onSubmit={handleSubmit}>
					<div className='my-5'>
						<label className='uppercase text-gray-600 block text-xl font-bold'>
							Email
						</label>
						<input
							type='email'
							placeholder='Registration Email'
							className='border w-full p-3 mt-3 bg-gray-50 rounded-xl outline-brown-500'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<input
						type='submit'
						value='Send Instructions'
						className='bg-brown-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-brown-600 md:w-auto '
					/>
				</form>

				<nav className='mt-6 lg:flex lg:justify-between'>
					<Link
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
						to='/'
					>
						Already have an account? Log In
					</Link>
					<Link
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
						to='/register'
					>
						Don&apos;t have an account? Register
					</Link>
				</nav>
			</div>
		</>
	);
};

export default ForgotPassword;
