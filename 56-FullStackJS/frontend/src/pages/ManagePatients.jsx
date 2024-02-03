const ManagePatients = () => {
	return (
		<div className='flex flex-col md:flex-row'>
            <h1 className="text-4xl">desde mange patients</h1>
			{/* <button
				type='button'
				className='bg-indigo-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden'
				onClick={() => setShowForm(!showForm)}
			>
				{showForm ? 'Hide Form' : 'Show Form'}
			</button> */}

			{/* <div
				className={`${
					showForm ? 'block' : 'hidden'
				} md:block md:w-1/2 lg:w-2/5 `}
			>
				<Form />
			</div> */}

			{/* <div className='md:w-1/2 lg:w-3/5'>
				<PatientList />
			</div> */}
		</div>
	);
};

export default ManagePatients;
