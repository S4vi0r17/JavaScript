import { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import usePatients from '../hooks/usePatients';

const Form = () => {
	const [name, setName] = useState('');
	const [owner, setOwner] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [symptoms, setSymptoms] = useState('');
	const [id, setId] = useState(null);

	const [alert, setAlert] = useState({});
	const { savePatient, patient } = usePatients();

	useEffect(() => {
		if (patient?.name) {
			const { name, owner, email, date, symptoms } = patient;
			setName(name);
			setOwner(owner);
			setEmail(email);
			setDate(date);
			setSymptoms(symptoms);
			setId(patient._id);
		}
	}, [patient]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([name, owner, email, date, symptoms].includes('')) {
			setAlert({
				error: true,
				msg: 'All fields are required',
			});

			return;
		}

		
		savePatient({ name, owner, email, date, symptoms, id });
		setAlert({
			error: false,
			msg: id ? 'Patient updated' : 'Patient added',
		});
		setTimeout(() => {
			setAlert({});
		}, 3000);

		setName('');
		setOwner('');
		setEmail('');
		setDate('');
		setSymptoms('');
		setId(null);
	};

	const { msg } = alert;

	return (
		<>
			<h2 className='font-black text-3xl text-center'>Patient Manager</h2>

			<p className='text-xl mt-5 mb-5 text-center'>
				Add your patients and {''}
				<span className='text-brown-500 font-bold'>manage them</span>
			</p>

			{msg && <Alert alert={alert} />}

			<form
				className='bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md'
				onSubmit={handleSubmit}
			>
				<div className='mb-5'>
					<label
						htmlFor='name'
						className='text-gray-700 uppercase font-bold'
					>
						Pet&apos;s Name
					</label>
					<input
						id='name'
						type='text'
						placeholder="Pet's Name"
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-brown-500'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='owner'
						className='text-gray-700 uppercase font-bold'
					>
						Owner&apos;s Name
					</label>
					<input
						id='owner'
						type='text'
						placeholder="Owner's Name"
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-brown-500'
						value={owner}
						onChange={(e) => setOwner(e.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='email'
						className='text-gray-700 uppercase font-bold'
					>
						Owner&apos;s Email
					</label>
					<input
						id='email'
						type='email'
						placeholder="Owner's Email"
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-brown-500'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='date'
						className='text-gray-700 uppercase font-bold'
					>
						Admission Date
					</label>
					<input
						id='date'
						type='date'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-brown-500'
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='symptoms'
						className='text-gray-700 uppercase font-bold'
					>
						Symptoms
					</label>
					<textarea
						id='symptoms'
						placeholder='Describe the Symptoms'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-brown-500'
						value={symptoms}
						onChange={(e) => setSymptoms(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					className='bg-brown-500 w-full p-3 text-white uppercase font-bold hover:bg-brown-600 cursor-pointer transition-colors rounded-lg'
					value={id ? 'Save Changes' : 'Add Patient'}
				/>
			</form>
		</>
	);
};

export default Form;
