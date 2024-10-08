import { useState, useId, useRef } from "react";
import PropTypes from "prop-types";
import openIcon from "../assets/collapse-icon-open.svg"
import closeIcon from "../assets/collapse-icon-close.svg"

function Collapse({ title, content }) {

    const [openCollapse, setOpenCollapse] = useState(false);
    const ariaControls = useId();
    const contentRef = useRef(null);

    const toggleCollapse = () => {
        setOpenCollapse(!openCollapse);
    };

    // If "content" is an array, add a line feed between all elements
    let typeOfContent = false;
    let list = "";
    if (typeof content === "object") {
        typeOfContent = true;
        list = content.toString().replaceAll(",", "\n")
    }

    return (
        <div className="collapse">
            <button
                onClick={toggleCollapse}
                aria-expanded={openCollapse ? true : false}
                className="collapse__button"
                aria-controls={ariaControls}
            >
                {title}
                <img src={openCollapse ? openIcon : closeIcon} alt="" />
            </button>

            <div
                id={ariaControls}
                role="region"
                ref={contentRef}
                className={`collapse__parent ${openCollapse ? 'open-parent' : ''}`}
                style={{
                    height: openCollapse ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
            >
                <div className={`collapse__content ${openCollapse ? 'open-content' : ''}`}>
                    <p>{typeOfContent ? list : content}</p>
                </div>
            </div>
        </div>
    );
}

Collapse.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]),
    title: PropTypes.string,
}

export default Collapse;