"use client";
import style from "./style.module.scss";
import brasil from "../../../public/brasil.svg";
import eua from "../../../public/eua.svg";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../../providers/LengContext";

export const Header = () => {

    const { port, setPort } = useContext(ProjectContext);

    return (
        <header>
            <motion.div
                className="container"
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className={style.box}>
                    <div className={style.name}>
                        <h1 className="title-3">Luis</h1>
                    </div>

                    <div className={style.flag}>
                        <button
                            className={style.button}
                            onClick={() => setPort(!port)}
                        >
                            {
                                port ? <img className={style.animateFlag} src={brasil} /> : <img className={style.animateFlag} src={eua} />
                            }
                        </button>
                    </div>


                    <div className={style.nav}>
                        <nav>
                            {port
                                ?
                                <ul>
                                    <li><a className="specialText" href="#projects"><span># </span>Projects</a></li>
                                    <li><a className="specialText" href="#stacks"><span># </span>Stacks</a></li>
                                    <li><a className="specialText" href="#contacts"><span># </span>Contact</a></li>
                                </ul>
                                :
                                <ul>
                                    <li><a className="specialText" href="#projects"><span># </span>Projetos</a></li>
                                    <li><a className="specialText" href="#stacks"><span># </span>Tecnologias</a></li>
                                    <li><a className="specialText" href="#contacts"><span># </span>Contato</a></li>
                                </ul>
                            }
                        </nav>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}