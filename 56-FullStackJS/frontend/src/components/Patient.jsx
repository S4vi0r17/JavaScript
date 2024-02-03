import usePatients from '../hooks/usePatients';

const Patient = ({ patient }) => {
	const { setEdition, deletePatient } = usePatients();

	const { _id, name, owner, email, date, symptoms } = patient;

	const formatDate = (date) => {
		const newDate = new Date(date);
		return new Intl.DateTimeFormat('es-US', { dateStyle: 'long' }).format(
			newDate
		);
	};

	return (
		<div className='mx-5 my-4 bg-white shadow-md px-5 py-6 rounded-xl'>
			<p className='font-bold uppercase text-brown-400 my-2'>
				Name: {''}
				<span className='font-normal normal-case text-black'>
					{name}
				</span>
			</p>
			<p className='font-bold uppercase text-brown-400 my-2'>
				Owner: {''}
				<span className='font-normal normal-case text-black'>
					{owner}
				</span>
			</p>
			<p className='font-bold uppercase text-brown-400 my-2'>
				Contact Email: {''}
				<span className='font-normal normal-case text-black'>
					{email}
				</span>
			</p>
			<p className='font-bold uppercase text-brown-400 my-2'>
				Admission Date: {''}
				<span className='font-normal normal-case text-black'>
					{formatDate(date)}
				</span>
			</p>
			<p className='font-bold uppercase text-brown-400 my-2'>
				Symptoms: {''}
				<span className='font-normal normal-case text-black'>
					{symptoms}
				</span>
			</p>

			<div className='flex justify-between my-5'>
				<button
					type='button'
					className='py-2 px-10 bg-brown-300 hover:bg-brown-400 text-white uppercase font-bold  rounded-lg'
					onClick={() => setEdition(patient)}
				>
					Edit
				</button>

				<button
					type='button'
					className='py-2 px-10 bg-[#e2958f] hover:bg-[#c77e79] text-white uppercase font-bold  rounded-lg'
					onClick={() => deletePatient(_id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Patient;
