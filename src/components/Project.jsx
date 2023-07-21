import { projects } from '../assets/data/data.json';

function Project() {

    return (
        <>
            <section id="projects">
                <div className="container">
                    <div className="project-wrapper">
                        <h2 className="section-title dark-blue-text">Projects</h2>

                        {projects.map((project, idx) => (
                            <div className="row" key={idx}>
                                <div className="project-wrapper__text">
                                    <h3 className="project-wrapper__text-title">{project.title}</h3>
                                    <p className="project-wrapper__text-info">{project.description}</p>
                                    <div className="project-wrapper__text-btns">
                                        {project.live &&
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--projects">
                                                See Live
                                            </a>
                                        }
                                        {project.github &&
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--projects">
                                                Github
                                            </a>
                                        }
                                    </div>
                                </div>

                                <div className="project-wrapper__image">
                                        <a href={project.live || '#'} target={project.live ? '_blank' : '_self'} rel="noopener noreferrer">
                                            <div className="thumbnail rounded">
                                                <img src={project.thumbnail} className="img-fluid" alt={project.title} />
                                            </div>
                                        </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;