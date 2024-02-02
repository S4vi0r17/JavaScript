import { Link } from 'react-router-dom';

const ForgotPassword = () => {
	return (
		<>
			<div>
				<h1 className='text-brown-500 font-black text-6xl text-center md:text-left'>
					Recover Your Access and Don&apos;t Lose {''}
					<span className='text-black'>Your Patients</span>
				</h1>
			</div>

			<div className='mt-20 md:mt-0 shadow-lg px-5 py-10 rounded-xl bg-white'>
				<form>
					<div className='my-5'>
						<label className='uppercase text-gray-600 block text-xl font-bold'>
							Email
						</label>
						<input
							type='email'
							placeholder='Registration Email'
							className='border w-full p-3 mt-3 bg-gray-50 rounded-xl outline-brown-500'
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
