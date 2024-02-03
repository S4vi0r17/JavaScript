import { createContext, useState, useEffect } from 'react';
import axiosClient from '../config/axios';

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
	const [patients, setPatients] = useState([]);
	const [patient, setPatient] = useState({});

	useEffect(() => {
		const getPatients = async () => {
			try {
				const token = localStorage.getItem('token');
				if (!token) return;
				const config = {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				};
				const { data } = await axiosClient.get('/patients', config);
				setPatients(data);
			} catch (error) {
				console.log(error);
			}
		};
		getPatients();
	}, []);

	const setEdition = (patient) => {
		setPatient(patient);
	};

	const savePatient = async (patient) => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		if (patient.id) {
			try {
				const { data } = await axiosClient.put(
					`/patients/${patient.id}`,
					patient,
					config
				);
				const updatedPatients = patients.map((p) =>
					p._id === patient.id ? data : p
				);
				setPatients(updatedPatients);
			} catch (error) {
				console.log(error);
			}
			return;
		}

		try {
			const { data } = await axiosClient.post(
				'/patients',
				patient,
				config
			);
			const { createdAt, updatedAt, __v, ...newPatient } = data;
			setPatients([newPatient, ...patients]);
		} catch (error) {
			console.log(error);
		}
	};

	const deletePatient = async (id) => {
		const confirmed = window.confirm('Are you sure you want to delete this patient?');
		if (!confirmed) return;
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			await axiosClient.delete(`/patients/${id}`, config);
			const updatedPatients = patients.filter((p) => p._id !== id);
			setPatients(updatedPatients);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<PatientsContext.Provider
			value={{
				patients,
				savePatient,
				setEdition,
				patient,
				deletePatient,
			}}
		>
			{children}
		</PatientsContext.Provider>
	);
};

export default PatientsContext;
