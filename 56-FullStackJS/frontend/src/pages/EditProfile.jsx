import { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import useAuth from '../hooks/useAuth';
import Alert from '../components/Alert';

const EditProfile = () => {

    const { auth, updateProfile } = useAuth();
    const [profile, setProfile] = useState({});
    const [alert, setAlert] = useState({});

    useEffect(() => {
        setProfile(auth);
    }, [auth]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { name, email } = profile;
    
        if (!name || !email) {
            setAlert({
                msg: 'Name and email are required',
                error: true
            });
            return;
        }

        updateProfile(profile);

        

        const result = await updateProfile(profile);

        setAlert(result);

        setTimeout(() => {
            setAlert({});
        }, 3000);
    };

    const { msg} = alert;

	return (
		<>
			<AdminNav />

			<h2 className='font-black text-3xl text-center mt-10'>
				Edit Profile
			</h2>
			<p className='text-xl mt-5 mb-10 text-center'>
				Modify your {''}
				<span className='text-brown-400 font-bold'>
					information here
				</span>
			</p>

			<div className='flex justify-center'>
				<div className='w-full md:w-1/2 bg-white shadow rounded-lg p-5'>
                    {msg && <Alert alert={alert} />}
					<form onSubmit={handleSubmit}>
						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								Name
							</label>
							<input
								type='text'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='name'
                                value={profile.name || ''}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                })}
							/>
						</div>

						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								Website
							</label>
							<input
								type='text'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='web'
                                value={profile.web || ''}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                })}
							/>
						</div>

						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								Phone
							</label>
							<input
								type='text'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='phone'
                                value={profile.phone || ''}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                })}
							/>
						</div>

						<div className='my-3'>
							<label className='uppercase font-bold text-gray-600'>
								Email
							</label>
							<input
								type='text'
								className='border bg-gray-50 w-full p-2 mt-5 rounded-lg outline-brown-500'
								name='email'
                                value={profile.email || ''}
                                onChange={(e) => setProfile({
                                    ...profile,
                                    [e.target.name]: e.target.value
                                })}
							/>
						</div>

						<input
							type='submit'
							value='Save Changes'
							className='bg-brown-500 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:bg-brown-600 transition-all duration-200 cursor-pointer'
						/>
					</form>
				</div>
			</div>
		</>
	);
};

export default EditProfile;
