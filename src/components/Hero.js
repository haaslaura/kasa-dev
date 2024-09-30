import homeIllustration from '../assets/home-illustration.jpg'

function Hero() {
    return (
        <div className="herosection">
            <h1>Chez vous, partout et ailleurs</h1>
            <img className="hero" src={homeIllustration} alt="" />
        </div>
    );
}

export default Hero;