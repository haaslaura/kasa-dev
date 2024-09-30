import PropTypes from 'prop-types';

function Card({ title, cover }) {
    return (
        <div>
            <p>{title}</p>
            <img src={cover} alt="" />
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

// Card.defaultProps = {
//     title: '',
//     picture: DefaultPicture,
// }

export default Card