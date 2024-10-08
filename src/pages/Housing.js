import housings from "../data/logements.json"
import { useParams } from "react-router-dom";
import Tag from "../components/Tag"
import Collapse from "../components/Collapse";
import StarsRating from "../components/StarsRating";
import Owner from "../components/Owner";
import Error from "./Error404";
import Slideshow from "../components/Slideshow";

function Housing() {

    const { id } = useParams();
    const housing = housings.find(house => house.id === id);

    // Handling property id errors
    if (!housing) {
        return <Error
            housingNotFound={housing} />
    };

    const numbStars = Number(housing.rating);
    let totalSlides = housing.pictures.length;

    return (
        <div className="housing">
            {// Slideshow : if there is only one image in the array, display a still image
            }
            {(totalSlides < 2) ? (
                <>
                    <div className="slider">
                        <div className="slider__slides">
                            <img src={housing.pictures} alt="" />
                        </div>
                    </div>
                </>
            ) : (
                <Slideshow
                    key={`gallery-${id}`}
                    gallery={housing.pictures} />
            )}
            <div className="housing__sheet">
                <div className="housing__sheet-header">
                    <h1>{housing.title}</h1>
                    <h2>{housing.location}</h2>
                    <div className="housing__sheet-taglist">
                        {housing.tags.map((tag) => (
                            <Tag
                                key={`${id}-${tag}`}
                                content={tag} />
                        ))}
                    </div>
                </div>
                <div className="housing__sheet-host">
                    < StarsRating rating={numbStars} />
                    < Owner host={housing.host} />
                </div>
            </div>
            <div id="accordionProperties" className="housing__accordion">
                <Collapse
                    key={`description-${id}`}
                    title="Description"
                    content={housing.description}
                />
                <Collapse
                    key={`equipments-${id}`}
                    title="Équipements"
                    content={housing.equipments}
                />
            </div>
        </div>
    );
}

export default Housing