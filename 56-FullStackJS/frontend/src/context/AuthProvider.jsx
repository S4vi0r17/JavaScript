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

	const updateProfile = async (data) => {
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
			const url = `/veterinarians/profile/${data._id}`;
			const { data: response } = await axiosClient.put(url, data, config);
			return {
				error: false,
				msg: 'Profile updated successfully',
			};
		} catch (error) {
			return {
				error: true,
				msg: 'There was an error updating the profile',
			};
		}
	};

	const savePassword = async (datos) => {
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
			const url = `/veterinarians/update-password`;
			const { data } = await axiosClient.put(url, datos, config);
			console.log(data);
			return {
				msg: data.msg,
			};
		} catch (error) {
			return {
				error: true,
				msg: error.response.data.msg,
			};
		}
	};

	return (
		<AuthContext.Provider
			value={{
				auth,
				setAuth,
				loading,
				logout,
				updateProfile,
				savePassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider };

export default AuthContext;
