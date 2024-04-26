import style from "./style.module.scss";
import { motion } from "framer-motion";

import jest from "../../assets/jest.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/js.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import tailwind from "../../assets/tailwind.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import node from "../../assets/nodejs.svg";
import postgresql from "../../assets/postgresql.svg";
import prisma from "../../assets/prisma.svg";
import express from "../../assets/express.svg";
import typescript from "../../assets/typescript.svg";
import communication from "../../assets/communication.svg";
import teamPlayer from "../../assets/teamplayer.svg";
import organized from "../../assets/organized.svg";
import learn from "../../assets/learn.svg";
import doc from "../../assets/doc.svg";
import angular from "../../assets/angular.svg";
import { useContext } from "react";
import { ProjectContext } from "../../providers/LengContext";

export const Techs = () => {

    const { port } = useContext(ProjectContext);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section id="stacks">
            <div className="container">
                <div className={style.box}>
                    <div className={style.columns}>
                        <div className={style.card}>
                            <div className={style.title}>
                                {port
                                    ?
                                    <motion.h2 className="title-3"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >Stacks</motion.h2>
                                    :
                                    <motion.h2 className="title-3"
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >Tecnologias</motion.h2>
                                }
                            </div>
                            <div className={style.skills}>
                                <div className={style.hard}>
                                    <motion.ul
                                        variants={container}
                                        initial="hidden"
                                        whileInView="visible"
                                    >
                                        <motion.li variants={container}>
                                            <img src={html} title="HTML" />
                                            <p className="paragraph">HTML</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={css} title="CSS" />
                                            <p className="paragraph">CSS</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={js} title="Javascript" />
                                            <p className="paragraph">Javascript</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={typescript} title="Typescript" />
                                            <p className="paragraph">Typescript</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={react} title="ReactJs" />
                                            <p className="paragraph">ReactJs</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={angular} title="Angular" />
                                            <p className="paragraph">Angular</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={sass} title="SASS" />
                                            <p className="paragraph">SASS</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={tailwind} title="Tailwind" />
                                            <p className="paragraph">Tailwind</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={git} title="Git" />
                                            <p className="paragraph">Git</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={github} title="GitHub" />
                                            <p className="paragraph">GitHub</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={node} title="Node" />
                                            <p className="paragraph">Node</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={postgresql} title="PostgreSQL" />
                                            <p className="paragraph">PostgreSQL</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={jest} title="Jest" />
                                            <p className="paragraph">Jest</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={prisma} title="Prisma" />
                                            <p className="paragraph">Prisma</p>
                                        </motion.li>
                                        <motion.li variants={container}>
                                            <img src={express} title="Express" />
                                            <p className="paragraph">Express</p>
                                        </motion.li>
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.title}>
                                {port
                                    ?
                                    <motion.h2 className="title-3"
                                        initial={{ y: -100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >Soft Skills</motion.h2>
                                    :
                                    <motion.h2 className="title-3"
                                        initial={{ y: -100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >Interpessoais</motion.h2>
                                }
                            </div>
                            <div className={style.skills}>
                                <div className={style.soft}>
                                    {
                                        port ?
                                            <motion.ul
                                                variants={container}
                                                initial="hidden"
                                                whileInView="visible">
                                                <motion.li variants={container} >
                                                    <img src={communication} title="Clear Communication" />
                                                    <p className="paragraph">Clear Communication</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={teamPlayer} title="Team Player" />
                                                    <p className="paragraph">Team Player</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={organized} title="Well Organized Code" />
                                                    <p className="paragraph">Well Organized Code</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={learn} title="Continuous Learner" />
                                                    <p className="paragraph">Continuous Learner</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={doc} title="Responsible" />
                                                    <p className="paragraph">Responsible </p>
                                                </motion.li>
                                            </motion.ul>
                                            :
                                            <motion.ul
                                                variants={container}
                                                initial="hidden"
                                                whileInView="visible">

                                                <motion.li variants={container}>
                                                    <img src={communication} title="Comunicação clara e objetiva" />
                                                    <p className="paragraph">Comunicação clara e objetiva</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={teamPlayer} title="Trabalho em equipe" />
                                                    <p className="paragraph">Trabalho em equipe</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={organized} title="Código limpo e organizado" />
                                                    <p className="paragraph">Código limpo e organizado</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={learn} title="Aprendizado Contínuo" />
                                                    <p className="paragraph">Aprendizado Contínuo</p>
                                                </motion.li>
                                                <motion.li variants={container}>
                                                    <img src={doc} title="Resonsável" />
                                                    <p className="paragraph">Resonsável</p>
                                                </motion.li>
                                            </motion.ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}