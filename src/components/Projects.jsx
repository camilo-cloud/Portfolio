import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectData";
import "./Projects.css";

export default function Projects() {
    return (
        <section id="projects" className="projects__section">
            <h2 className="projects__title">Projects</h2>
            <p className="projects__subtitle">
                A selection of my recent work, showcasing my skills in web development and design.
            </p>
            <div className="projects__cards-container">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </section>
    );
}
