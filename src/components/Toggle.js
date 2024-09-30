import { useState, useId } from "react";
import PropTypes from 'prop-types';

function Toggle({ title, content }) {

    const [openAccordion, setOpenAccordion] = useState(false);
    const ariaControls = useId();

    return (
        <div>
            <button
                onClick={() => setOpenAccordion(!openAccordion)}
                aria-expanded={openAccordion ? true : false}
                className="accordion-trigger"
                // aria-controls={`${title}-section`}
                aria-controls={ariaControls}
            >
                <span className="accordion-title">
                    {title}
                    <span className="accordion-icon"></span>{ }
                </span>
            </button>

            {openAccordion && (
                <div
                    // id={`${title}-section`}
                    id={ariaControls}
                    role="region"
                    className="accordion-panel">

                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

Toggle.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Toggle;