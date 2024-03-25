"use client";
import useMeasure from "react-use-measure";
import { projects } from "../../data/projects";
import { Card } from "./Card"
import style from "./style.module.scss";
import { useMotionValue, motion, animate } from "framer-motion";
import { useEffect, useState } from "react";



export const Projects = () => {

    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    const FAST_DURATION = 5;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

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
            <div className="container">
                <div className={style.project}>
                    <h1 className="title-3">Projects</h1>
                    <motion.div
                        className={style.projectCards}
                        style={{ x: xTranslation }}
                        ref={{ ref }}
                        onHoverStart={() => {
                            setMustFinish(true);
                            setDuration(SLOW_DURATION);
                        }}
                        onHoverEnd={() => {
                            setMustFinish(true);
                            setDuration(FAST_DURATION);
                        }}
                    >
                        {[...projects, ...projects].map(project => {
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
                    </motion.div>

                </div>
            </div>
        </section>
    )
}