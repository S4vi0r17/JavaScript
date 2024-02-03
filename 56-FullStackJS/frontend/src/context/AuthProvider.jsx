import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});

	useEffect(() => {
		const authVeterinarian = async () => {
			const token = localStorage.getItem('token');
			if (!token) return;

			const config = {
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			};

			try {
				const { data } = await axiosClient.get(
					'/veterinarians/profile',
					config
				);
				setAuth(data.veterinarian);
			} catch (error) {
				console.log(error);
				setAuth({});
			}
		};
		authVeterinarian();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };

export default AuthContext;
