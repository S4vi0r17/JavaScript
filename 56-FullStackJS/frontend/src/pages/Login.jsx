import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import useAuth from '../hooks/useAuth';
import axiosClient from '../config/axios';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState({});

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if ([email, password].includes('')) {
			setAlert({
				msg: 'All fields are required',
				error: true,
			});
			return;
		}

		try {
			const { data } = await axiosClient.post('/veterinarians/login', {
				email,
				password,
			});
			localStorage.setItem('token', data.token);
			navigate('/admin');
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
					Log in and Manage Your {''}
					<span className='text-black'> Patients</span>
				</h1>
			</div>
			<div className='mt-20 md:mt-0 shadow-lg px-5 py-6 rounded-xl bg-white'>
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
					<div className='my-5'>
						<label className='uppercase text-gray-600 block text-xl font-bold'>
							Password
						</label>
						<input
							type='password'
							placeholder='Your Password'
							className='border w-full p-3 mt-3 bg-gray-50 rounded-xl outline-brown-500'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<input
						type='submit'
						value='Log In'
						className='bg-brown-500 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-brown-600 md:w-auto '
					/>
				</form>

				<nav className='mt-6 lg:flex lg:justify-between'>
					<Link
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
						to='/register'
					>
						Don&apos;t have an account? Register
					</Link>
					<Link
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
						to='/forgot-password'
					>
						Forgot my Password
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Login;
