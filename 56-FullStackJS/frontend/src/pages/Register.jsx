import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	const [alert, setAlert] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		if ([name, email, password, repeatPassword].includes('')) {
			return setAlert({ error: true, msg: 'Please fill all the fields' });
		}

		if (password !== repeatPassword) {
			return setAlert({ error: true, msg: 'Passwords do not match' });
		}

		if (password.length < 6) {
			return setAlert({
				error: true,
				msg: 'Password must be at least 6 characters long',
			});
		}

		setAlert({});

		// Create the user in the API
		try {
			const url = 'http://localhost:4000/api/veterinarians';
			await axios.post(url, { name, email, password });
			setAlert({
				error: false,
				msg: 'Account created successfully, check your email',
			});
		} catch (error) {
			setAlert({ error: true, msg: error.response.data.msg });
		}
	};

	const { msg } = alert;

	return (
		<>
			<div>
				<h1 className='text-brown-500 font-black text-6xl text-center md:text-left'>
					Create Your Account and Manage {''}
					<span className='text-black'>Your Patients</span>
				</h1>
			</div>

			<div className='mt-20 md:mt-0 shadow-lg px-5 py-6 rounded-xl bg-white'>
				{msg && <Alert alert={alert} />}

				<form onSubmit={handleSubmit}>
					<div className='my-5'>
						<label className='uppercase text-gray-600 block text-xl font-bold'>
							Name
						</label>
						<input
							type='text'
							placeholder='Your Name'
							className='border w-full p-3 mt-3 bg-gra-50 rounded-xl outline-brown-500'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

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
							autoComplete='off'
						/>
					</div>

					<div className='my-5'>
						<label className='uppercase text-gray-600 block text-xl font-bold'>
							Repeat Password
						</label>
						<input
							type='password'
							placeholder='Repeat Your Password'
							className='border w-full p-3 mt-3 bg-gray-50 rounded-xl outline-brown-500'
							value={repeatPassword}
							onChange={(e) => setRepeatPassword(e.target.value)}
							autoComplete='off'
						/>
					</div>

					<input
						type='submit'
						value='Create Account'
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
						to='/forgot-password'
					>
						Forgot my Password
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Register;
