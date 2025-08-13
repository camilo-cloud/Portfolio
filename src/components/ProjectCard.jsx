import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const { id, title, description, image, liveUrl, repoUrl, tech } = project;

    return (
        <div className="card__container">
            <div className="card__info">
                <h3 className="card__title">{title}</h3>
                <p className="card__description">{description}</p>
            </div>
            <div className="card__image-container">
                <a href={liveUrl} target="_blank" rel="noreferrer">
                    <img className="card__image" src={image} alt={title} />
                </a>
            </div>
            <div className="card__links">
                <a className="card__live" href={liveUrl} target="_blank" rel="noreferrer">Live</a>
                <a className="card__repo" href={repoUrl} target="_blank" rel="noreferrer">Repo</a>
                <div className="card__techs">
                    {tech.map((t, index) => (
                        <span key={index}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
