import emptyStar from "../assets/icon-star-empty.svg"
import fullStar from "../assets/icon-star-full.svg"
import PropTypes from 'prop-types';

function StarsRating({ rating }) {

    const range = [1, 2, 3, 4, 5]

    return (
        <div className="starsrange">
            {range.map((rangeElem) =>
                rating >= rangeElem ? (
                    <img key={rangeElem.toString()} src={fullStar} />
                ) : <img key={rangeElem.toString()} src={emptyStar} />
            )}
        </div>
    );
}

StarsRating.propTypes = {
    rating: PropTypes.number.isRequired,
}

export default StarsRating;