import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const Tags = ({color,text}) => {
return (
    <>
    <Badge bg={color}>{text}</Badge>
    </>
    );
    };

    Tags.propTypes = {
        color: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      };

    export default Tags;