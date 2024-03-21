import style from "./style.module.scss";

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

export const Techs = () => {
    return (
        <section id="techs">
            <div className="container">
                <div className={style.box}>
                    <div className={style.title}>
                        <h2 className="title-2">Stacks</h2>
                    </div>
                    <div className={style.skills}>
                        <div className={style.hard}>
                            <ul>
                                <li >
                                    <img src={html} title="HTML" />
                                    <p className="paragraph">HTML</p>
                                </li>
                                <li >
                                    <img src={css} title="CSS" />
                                    <p className="paragraph">CSS</p>
                                </li>
                                <li >
                                    <img src={js} title="Javascript" />
                                    <p className="paragraph">Javascript</p>
                                </li>
                                <li >
                                    <img src={typescript} title="GitHub" />
                                    <p className="paragraph">Typescript</p>
                                </li>
                                <li >
                                    <img src={react} title="ReactJs" />
                                    <p className="paragraph">ReactJs</p>
                                </li>
                                <li >
                                    <img src={sass} title="SASS" />
                                    <p className="paragraph">SASS</p>
                                </li>
                                <li >
                                    <img src={tailwind} title="Tailwind" />
                                    <p className="paragraph">Tailwind</p>
                                </li>
                                <li >
                                    <img src={git} title="Git" />
                                    <p className="paragraph">Git</p>
                                </li>
                                <li >
                                    <img src={github} title="GitHub" />
                                    <p className="paragraph">GitHub</p>
                                </li>
                                <li >
                                    <img src={node} title="GitHub" />
                                    <p className="paragraph">Node</p>
                                </li>
                                <li >
                                    <img src={postgresql} title="GitHub" />
                                    <p className="paragraph">Postgresql</p>
                                </li>
                                <li >
                                    <img src={jest} title="GitHub" />
                                    <p className="paragraph">Jest</p>
                                </li>
                                <li >
                                    <img src={prisma} title="GitHub" />
                                    <p className="paragraph">Prisma</p>
                                </li>
                                <li >
                                    <img src={express} title="GitHub" />
                                    <p className="paragraph">Express</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={style.title}>
                        <h2 className="title-2"> Soft Skills</h2>
                    </div>
                    <div className={style.skills}>
                        <div className={style.soft}>
                            <ul>
                                <li >
                                    <img src={communication} title="GitHub" />
                                    <p className="paragraph">Clear Communication</p>
                                </li>
                                <li >
                                    <img src={teamPlayer} title="GitHub" />
                                    <p className="paragraph">Team Player</p>
                                </li>
                                <li >
                                    <img src={organized} title="GitHub" />
                                    <p className="paragraph">Well Organized Code</p>
                                </li>
                                <li >
                                    <img src={learn} title="GitHub" />
                                    <p className="paragraph">Continuous Learner</p>
                                </li>
                                <li >
                                    <img src={doc} title="GitHub" />
                                    <p className="paragraph">Responsable </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}