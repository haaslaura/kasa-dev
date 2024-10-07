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
        <div className="slider">
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
            <img src={prevArrow} id="prev-arrow"
                onClick={() => slider("prev")}
                className="slider__arrow" alt="Previous picture" />
            <img src={nextArrow} id="next-arrow"
                onClick={() => slider("next")}
                className="slider__arrow" alt="Next picture" />
        </div >
    );
}

export default Slideshow;