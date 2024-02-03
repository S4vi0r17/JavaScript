import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {

    const { logout } = useAuth();

	return (
		<header className='py-10 bg-brown-500 w-screen'>
			<div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
				<h1 className='font-bold text-3xl text-brown-200 text-center'>
					Patient Manager for {''}
					<span className='text-white font-black'>Veterinary</span>
				</h1>

				<nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
					<Link
						to='/admin'
						className='text-white text-base uppercase font-bold hover:text-brown-200'
					>
						Patients
					</Link>
					<Link
						to='/admin/profile'
						className='text-white text-base uppercase font-bold hover:text-brown-200'
					>
						Profile
					</Link>

					<button
						type='button'
						className='text-white text-base uppercase font-bold hover:text-brown-200'
                        onClick={logout}
					>
						Logout
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
