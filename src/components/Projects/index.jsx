import { projects } from "../../data/projects";
import { Card } from "./Card"
import style from "./style.module.scss";

export const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className={style.project}>
                    <h1 className="title-2">Projects</h1>
                    <div className={style.projectCard}>
                        {projects.map(project => {
                            return (
                                <Card
                                    key={project.id}
                                    name={project.name}
                                    description={project.description}
                                    site={project.site}
                                    img={project.img}
                                    technologies={project.technologies}
                                    git={project.git}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </section>
    )
}