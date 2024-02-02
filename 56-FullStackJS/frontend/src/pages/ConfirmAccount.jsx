import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from '../components/Alert';

const ConfirmAccount = () => {
	const [confirmedAccount, setConfirmedAccount] = useState(false);
	const [loading, setLoading] = useState(true);
	const [alert, setAlert] = useState({});

	const params = useParams();
	const { id } = params;

	useEffect(() => {
		const confirmAccount = async () => {
			try {
				const url = `http://localhost:4000/api/veterinarians/confirm/${id}`;
				const { data } = await axios.get(url);

				setConfirmedAccount(true);
				setAlert({
					msg: data.msg,
				});
			} catch (error) {
				setAlert({
					msg: error.response.data.msg,
					error: true,
				});
			}
		};
		setLoading(false);
		confirmAccount();
	}, []);

	return (
		<>
			<div>
				<h1 className='text-brown-500 font-black text-6xl text-center md:text-left'>
					Confirm your Account and Start Managing {''}
					<span className='text-black'>your Patients</span>
				</h1>
			</div>

			<div className='mt-20 md:mt-0 shadow-lg px-5 py-10 rounded-xl bg-white'>
				{!loading && <Alert alert={alert} />}
				{confirmedAccount && (
					<Link
						to='/'
						className='block text-center my-5 text-gray-500 hover:text-brown-500'
					>
						Log in
					</Link>
				)}
			</div>
		</>
	);
};

export default ConfirmAccount;
