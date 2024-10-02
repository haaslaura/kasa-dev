import housings from "../data/logements.json"
import { useParams } from "react-router-dom";
import Tag from "../components/Tag"
import Gallery from "../components/Gallery";
import Collapse from "../components/Collapse";
import StarsRating from "../components/StarsRating";
import Owner from "../components/Owner";

function HousingSheet() {

    const { id } = useParams(); // récupère id de l'url

    // Recherche du logement correspondant à l'ID
    const housing = housings.find(house => house.id === id);

    if (!housing) {
        return <div>Logement non trouvé</div>; // Gérer le cas où l'ID ne correspond à rien !!!!!!!!!!!
    }

    console.log(typeof housing.description);

    return (
        <div className="housing">
            <Gallery
                key={`gallery-${id}`}
                content={housing.pictures} />

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
                <div>
                    < StarsRating
                        key={`stars-rating-${id}`}
                        content={housing.rating}
                    />
                    < Owner
                        key={`owner-${id}`}
                        content={housing.host}
                    />
                </div>
            </div>
            <div id="accordionProperties" className="housing__sheet-accordion">

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


export default HousingSheet