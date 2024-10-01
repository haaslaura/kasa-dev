// import logements from "../data/logements.json"

import { useParams } from "react-router-dom";

function HousingSheet() {

    const { id } = useParams(); // récupère id de l'url

    // Simulation d'un tableau de logements venant de tes données JSON
    const housings = [
        { id: '1', title: 'Logement 1', description: 'Description du logement 1' },
        { id: '2', title: 'Logement 2', description: 'Description du logement 2' },
        // etc.
    ];

    // Recherche du logement correspondant à l'ID
    const housing = housings.find(house => house.id === id);

    if (!housing) {
        return <div>Logement non trouvé</div>; // Gérer le cas où l'ID ne correspond à rien !!!!!!!!!!!
    }

    return (
        <div>
            <img src="" alt="" />
            <div>
                <div>
                    {/* Titre, lieu, tag */}
                </div>
                <div>
                    {/* Proprio, étoile */}
                </div>
            </div>
            <div id="accordionProperties" className="accordion">
                {/* {logements.map((logement) => (
                    <Toggle
                        key={logement.id}
                        title={logement.title}
                        content={logement.content}
                    />
                ))} */}
            </div>

        </div>
    );
}


export default HousingSheet