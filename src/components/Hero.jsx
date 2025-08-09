import "./Hero.css";
import SocialLinks from "./SocialLinks";

export default function Hero() {
    return (
        <section 
            className="hero__container" 
            role="region" 
            aria-labelledby="hero-title"
        >
            <SocialLinks />
            <div className="hero__container-text">
                <h1 id="hero-title" className="hero__title">
                    HELLO, I'M CAMILO CUARTAS
                </h1>
                <p className="hero__description">
                    Frontend Web Developer specializing in crafting modern, responsive, and high-performance websites.
                    My goal is to bring clean design and seamless user experience to life.
                </p>
                
                <a href="#projects" className="hero__button" aria-label="View my projects">
                    PROJECTS
                </a>
            </div>
        </section>
    );
}
