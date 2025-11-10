"use client";
import { Card } from "./Card"
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ProjectContext } from "../../providers/LengContext";
import { ModalDetail } from "../Modal";
import { projects } from "../../data/projects";
import { GrCaretNext, GrCaretPrevious, GrLinkNext, GrLinkPrevious } from "react-icons/gr";

export const Projects = () => {
    const { port, getProjects, project, modal, capturedId, setCapturedProjectId } = useContext(ProjectContext);

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        console.log(currentIndex)
        console.log(setCurrentIndex((prev) => (prev + 1) % projects.slice(0,5).length))
        setCurrentIndex((prev) => (prev + 1) % projects.slice(0,5).length);
    };

    const prev = () => {
        console.log(currentIndex)
        console.log(setCurrentIndex((prev) =>
            prev === 0 ? projects.slice(0,5).length - 1 : prev - 1
        ))
        setCurrentIndex((prev) =>
            prev === 0 ? projects.slice(0,5).length - 1 : prev - 1
        );
    };

    return (
        <section id="projects">
            <div className={style.container}>
                <div className={style.project}>
                    <div className={style.title}>
                        {port
                            ?
                            <motion.h2 className="title-3"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            > Projects</motion.h2>
                            :
                            <motion.h2 className="title-3"
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            > Projetos</motion.h2>
                        }
                    </div>

                    <div className={style.motionDiv}>
                        <motion.div
                            className={style.projectCards}
                        >
                            {projects.slice(0, 5).map(project => {
                                return (
                                    <Card
                                        key={project.id}
                                        name={project.name}
                                        site={project.site}
                                        img={project.img}
                                        git={project.git}
                                        description={project.description}
                                        technologies={project.technologies}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: .35 }}
                                        viewport={{ once: true, amount: .3 }}
                                    />
                                )
                            })}
                        </motion.div>
                        {modal ? <ModalDetail
                        /> : null}
                        <button className={`${style.carouselButton} ${style.prev}`} onClick={prev}>
                            <GrCaretPrevious  size={25} color={`#f6be3d`}/> 
                        </button>
                        <button className={`${style.carouselButton} ${style.next}`} onClick={next}>
                            <GrCaretNext  size={25} color={`#f6be3d`}/>
                        </button>
                    </div>
                </div>
            </div >
        </section >
    )
}