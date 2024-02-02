import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
	return (
		<div
			className={`${
				alert.error ? 'bg-red-500' : 'bg-indigo-500'
			} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}
		>
			{alert.msg}
		</div>
	);
};

Alert.propTypes = {
	alert: PropTypes.object.isRequired,
};

export default Alert;
