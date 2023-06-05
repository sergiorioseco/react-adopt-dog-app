import PropTypes from 'prop-types';
import Tags from "./Tags.jsx";

const Card = ({url,title,text,tagColor,tagText}) => {
return (
<>
<div className="card">
    <img src={url} />
    <h5>{title}</h5>
    <p>{text}</p>
    <Tags color={tagColor} text={tagText}></Tags>
    </div>
</>
);
};
Card.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    tagColor: PropTypes.string.isRequired,
    tagText: PropTypes.string.isRequired,
  };

export default Card;