import PropTypes from 'prop-types';

const Button = ({ handle, children }) => {

    return (

        <button
            type="button"
            className="h-10 w-10 flex items-center justify-center font-bold text-mauve text-2xl bg-pinkLavender rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-pinkLavender"
            onClick={handle}
        >{children}</button>
        
    )
}

Button.propTypes = {
    handle: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Button