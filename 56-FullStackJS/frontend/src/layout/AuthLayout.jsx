import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
	return (
		<>
			<h1>Layout AuthLayout</h1>
			<Outlet />
			<h1>Layout AuthLayout</h1>
		</>
	);
};

export default AuthLayout;
