import { useState } from "react";
import prevArrow from "../assets/prev-arrow.svg";
import nextArrow from "../assets/next-arrow.svg";

function Slideshow({ gallery }) {

    const [activeSlide, setActiveSlide] = useState(0);
    let totalSlides = gallery.length;

    function slider(action) {
        if (action === "next") {
            if (activeSlide < totalSlides - 1) {
                setActiveSlide((previousState) => previousState + 1);
            } else {
                setActiveSlide(0);
            }
        } else if (action === "prev") {
            if (activeSlide === 0) {
                setActiveSlide(totalSlides - 1);
            } else {
                setActiveSlide((previousState) => previousState - 1);
            }
        }
    }

    return (
        <div className="slider" id="slidershow">
            <div className="slider__slides">
                {gallery.map((picture, index) => (
                    <div key={`slide-${index}`} className={`slider__slide
                    ${index === activeSlide && "active"}
                    ${index === activeSlide + 1 && "next"}
                    ${index === activeSlide - 1 && "prev"}
                    ${activeSlide === 0 && index === totalSlides - 1
                            ? "prev"
                            : ""
                        }
                        ${activeSlide === totalSlides - 1 && index === 0
                            ? "next"
                            : ""
                        }
                    `}
                    >
                        <img key={`picture-${index}`} src={picture} alt="" />
                    </div>
                ))}
            </div>
            <p className="numbering">
                {activeSlide + 1}/{totalSlides}
            </p>
            <button
                className="slider__arrow"
                id="prev-arrow"
                aria-controls="slidershow"
                aria-label="Précedent"
                onClick={() => slider("prev")}>
                <img
                    src={prevArrow}
                    alt="Previous"
                />
            </button>
            <button
                className="slider__arrow"
                id="next-arrow"
                aria-controls="slidershow"
                aria-label="Suivant"
                onClick={() => slider("next")}>
                <img
                    src={nextArrow}
                    alt="Next"
                />
            </button>
        </div >
    );
}

export default Slideshow;