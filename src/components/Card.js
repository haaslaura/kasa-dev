import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card({ id, title, cover }) {
    return (
        <div className="homecard">
            <Link to={`/housing/${id}`}>
                <div className="homecard__title">
                    <p>{title}</p>
                </div>
                <img src={cover} alt="" />
            </Link>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}

export default Card