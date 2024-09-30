import Hero from "../../components/Hero/homehero";
import Card from "../../components/Card";

import logements from "../../data/logements.json"

function Home() {

    return (
        <div>
            <Hero />
            <div>
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;