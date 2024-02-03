import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
	const { auth, loading } = useAuth();

	console.log(auth);
	console.log(loading);

	if (loading) return 'loading...';

	return (
		<div className='min-h-screen w-screen'>
			<Header />
			{auth?._id ? (
				<main className='container mx-auto mt-10'>
					<Outlet />
				</main>
			) : (
				<Navigate to='/' />
			)}
			<Footer />
		</div>
	);
};

export default ProtectedRoute;
