import PropTypes from 'prop-types';

function Owner({ host }) {

    return (
        <div>
            <p>{host.name}</p>
            <img src={host.picture} alt=""></img>
        </div>
    );
}

Owner.propTypes = {
    rating: PropTypes.object,
}

export default Owner;