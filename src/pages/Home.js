import Hero from "../components/Hero";
import Card from "../components/Card";
import logements from "../data/logements.json"

function Home() {

    return (
        <div className="home-container">
            <Hero />
            <div className="home-container__housing">
                {logements.map((logement) => (
                    <Card
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;