"use client";
import useMeasure from "react-use-measure";
import { Card } from "./Card"
import style from "./style.module.scss";
import { useMotionValue, motion, animate } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../../providers/LengContext";
import { ModalDetail } from "../Modal";


export const Projects = () => {
    const { port, getProjects, project, modal, capturedId, setCapturedProjectId } = useContext(ProjectContext);

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 25;
    const SLOW_DURATION = 5155;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);


    useEffect(() => {
        getProjects();
        capturedId({ project });

        const storedId = localStorage.getItem('capturedId');
        if (storedId) {
            setCapturedProjectId(JSON.parseInt(storedId));
        }

    }, [])

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 3200;


        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }
        const stopAnimation = () => {
            if (controls) {
                controls.stop();
            }
        };

        return stopAnimation;
    }, [rerender, xTranslation, duration, width]);

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
                    <div className={style.motionDiv}
                        ref={{ ref }}>
                        <motion.div
                            className={style.projectCards}
                            style={{ x: xTranslation }}

                            onHoverStart={() => {
                                setMustFinish(true);
                                setDuration(SLOW_DURATION);
                            }}
                            onHoverEnd={() => {
                                setMustFinish(true);
                                setDuration(FAST_DURATION);
                            }}
                        >
                            {project.map(project => {
                                return (
                                    <Card
                                        key={project.id}
                                        name={project.name}
                                        site={project.site}
                                        img={project.img}
                                        git={project.git}
                                        description={project.description}
                                        technologies={project.technologies}
                                    />
                                )
                            })}
                        </motion.div>
                        {modal ? <ModalDetail
                        /> : null}
                    </div>
                </div>
            </div >
        </section >
    )
}