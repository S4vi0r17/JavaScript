import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ConfirmAccount from './pages/ConfirmAccount';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
import { AuthProvider } from './context/AuthProvider';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path='/' element={<AuthLayout />}>
							<Route index element={<Login />} />
							<Route path='register' element={<Register />} />
							<Route
								path='confirm-account/:id'
								element={<ConfirmAccount />}
							/>
							<Route
								path='forgot-password'
								element={<ForgotPassword />}
							/>
							<Route
								path='forgot-password/:token'
								element={<NewPassword />}
							/>
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
