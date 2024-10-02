import { useState, useId, useRef } from "react";
import PropTypes from "prop-types";
import openIcon from "../assets/collapse-icon-open.svg"
import closeIcon from "../assets/collapse-icon-close.svg"

function Collapse({ title, content }) {

    const [openCollapse, setopenCollapse] = useState(false);
    const ariaControls = useId();

    const contentRef = useRef(null);
    // if (contentRef.current) console.log(contentRef.current.scrollHeight);
    // utiliser useRef pour mesurer dynamiquement la hauteur du contenu

    return (
        <div className="collapse">
            <button
                onClick={() => setopenCollapse(!openCollapse)}
                aria-expanded={openCollapse ? true : false}
                className="collapse__button"
                aria-controls={ariaControls}
            >
                {title}<img src={openCollapse ? openIcon : closeIcon} alt="" />
            </button>

            {openCollapse && (
                <div
                    id={ariaControls}
                    role="region"
                    className="collapse__content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Collapse;