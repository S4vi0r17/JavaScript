import { useState } from 'react';
import AdminNav from '../components/AdminNav';
import Alert from '../components/Alert';
import useAuth from '../hooks/useAuth';

const ChangePassword = () => {
	const { savePassword } = useAuth();

	const [alert, setAlert] = useState({});
	const [password, setPassword] = useState({
		current_password: '',
		new_password: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (Object.values(password).some((campo) => campo === '')) {
			setAlert({
				msg: 'All fields are required',
				error: true,
			});
			return;
		}

		if (password.new_password.length < 6) {
			setAlert({
				msg: 'Password must be at least 6 characters long',
				error: true,
			});
			return;
		}

		const response = await savePassword(password);

		setAlert(response);
	};

	const { msg } = alert;

	return (
		<>
			<AdminNav />

			<h2 className='font-black text-3xl text-center mt-10'>
				Change Password
			</h2>
			<p className='text-xl mt-5 mb-10 text-center'>
				Modify your {''}
				<span className='text-brown-400 font-bold'>password here</span>
			</p>

			<div className='flex justify-center'>
				<div className='w-full md:w-1/2 bg-white shadow rounded-lg p-5'>
					{msg && <Alert alert={alert} />}
					<form onSubmit={handleSubmit}>
						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								Current Password
							</label>
							<input
								type='password'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='current_password'
								placeholder='Enter your current password'
								onChange={(e) =>
									setPassword({
										...password,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								New Password
							</label>
							<input
								type='password'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='new_password'
								placeholder='Enter your new password'
								onChange={(e) =>
									setPassword({
										...password,
										[e.target.name]: e.target.value,
									})
								}
							/>
						</div>

						<input
							type='submit'
							value='Update Password'
							className='bg-brown-500 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:bg-brown-600 transition-all duration-200 cursor-pointer'
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default ChangePassword;
