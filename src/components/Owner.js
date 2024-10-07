import PropTypes from "prop-types";

function Owner({ host }) {

    const result = host.name.replace(/ /i, "\n");

    return (
        <div className="owner">
            <p>{result}</p>
            <img src={host.picture} alt=""></img>
        </div>
    );
}

Owner.propTypes = {
    rating: PropTypes.object,
}

export default Owner;