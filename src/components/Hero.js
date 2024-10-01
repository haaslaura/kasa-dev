import homeIllustration from '../assets/home-illustration.jpg'
import { useState, useEffect } from 'react';

function Hero() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="herosection">
            <h1 className="herosection__title">
                {isSmallScreen ? 'Chez vous,\n partout et ailleurs' : 'Chez vous, partout et ailleurs'}
            </h1>
            <img className="herosection__image" src={homeIllustration} alt="" />
        </div>
    );
}

export default Hero;