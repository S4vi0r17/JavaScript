import usePatients from '../hooks/usePatients';
import Patient from './Patient';

const PatientList = () => {
	const { patients } = usePatients();
	// console.log(patients);

	return (
		<>
			{patients.length ? (
				<>
					<h2 className='font-black text-3xl text-center'>
						Patient List
					</h2>

					<p className='text-xl mt-5 mb-5 text-center'>
						Manage your {''}
						<span className='text-brown-500 font-bold'>
							Patients and Appointments
						</span>
					</p>

					{patients.map((patient) => (
						<Patient key={patient._id} patient={patient} />
					))}
					{/* {[...patients].reverse().map((patient) => (
						<Patient key={patient._id} patient={patient} />
					))} */}
				</>
			) : (
				<>
					<h2 className='font-black text-3xl text-center'>
						No Patients Found
					</h2>

					<p className='text-xl mt-5 mb-10 text-center'>
						Start by adding patients {''}
						<span className='text-brown-500 font-bold'>
							and they will appear here
						</span>
					</p>
				</>
			)}
		</>
	);
};

export default PatientList;
