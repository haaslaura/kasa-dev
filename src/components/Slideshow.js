import { useState, useEffect } from "react";
import prevArrow from "../assets/prev-arrow.svg";
import nextArrow from "../assets/next-arrow.svg";

function Slideshow({ gallery }) {

    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 576);
    const [activeSlide, setActiveSlide] = useState(0);
    let totalSlides = gallery.length;

    // taille de l'écran

    // executer un effet après le rendu du composant, [] = une seule fois lors du montage
    useEffect(() => {

        const handleResize = () => {

            // met à jour setIsMediumScreen 
            // pour indiquer si la largeur de la fenêtre est inférieure à 576px
            setIsMediumScreen(window.innerWidth < 576);
        };

        // fonction appelé chaque fois que la fenêtre est redimensionnée
        window.addEventListener('resize', handleResize);

        // fonction de nettoyage
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
            <p className={`${!isMediumScreen && "numbering"}`}>
                {activeSlide + 1}/{totalSlides}
            </p>

            <img
                src={prevArrow}
                id="prev-arrow"
                onClick={() => slider("prev")}
                className="slider__arrow" alt="Previous"
            />

            <img
                src={nextArrow}
                id="next-arrow"
                onClick={() => slider("next")}
                className="slider__arrow"
                alt="Next"
            />

        </div >
    );
}

export default Slideshow;