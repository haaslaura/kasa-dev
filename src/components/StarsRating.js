import emptyStar from "../assets/icon-star-empty.svg"
import fullStar from "../assets/icon-star-full.svg"

function StarsRating({ rating }) {

    const range = [1, 2, 3, 4, 5]
    console.log(rating);


    return (
        <div>
            {/* {range.map((rangeElem) =>
                rating >= rangeElem ? (
                    <span key={rangeElem.toString()}>{fullStar}</span>
                ) : { emptyStar }
            )} */}
        </div>
    );
}

export default StarsRating;