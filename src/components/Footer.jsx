import PropTypes from 'prop-types';

const Footer = ({text}) => {
    return (
        <>
        <p>{text}</p>
        </>
        );
        };
    
        Footer.propTypes = {
            text: PropTypes.string.isRequired,
            };

    export default Footer;