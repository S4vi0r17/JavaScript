import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const authVeterinarian = async () => {
			const token = localStorage.getItem('token');
			if (!token) {
				setLoading(false);
				return;
			}

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
			setLoading(false);
		};
		authVeterinarian();
	}, []);

	const logout = () => {
		localStorage.removeItem('token');
		setAuth({});
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
				loading,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };

export default AuthContext;
