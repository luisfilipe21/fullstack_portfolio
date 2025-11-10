"use client";
import style from "./style.module.scss";
import brasil from "/brasil.svg";
import eua from "/eua.svg";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ProjectContext } from "../../providers/LengContext";

export const Header = () => {

    const { port, setPort } = useContext(ProjectContext);


    const pageLinks = [
        {
            id: 1,
            href: "#projects",
            text: "Projects",
        },
        {
            id: 2,
            href: "#stacks",
            text: "Stacks",
        },
        {
            id: 3,
            href: "#contacts",
            text: "Contact",
        }
    ]
    const linkDasPaginas = [
        {
            id: 1,
            href: "#projects",
            text: "Projetos",
        },
        {
            id: 2,
            href: "#stacks",
            text: "Tecnologias",
        },
        {
            id: 3,
            href: "#contacts",
            text: "Contato",
        }
    ]

    return (
        <header>
            <motion.div
                className="container-header"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
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
                                    {pageLinks.map((item) => {
                                        return (
                                            <li key={item.id}>
                                                <a className="specialText" href={item.href}>
                                                    <span># </span>
                                                    {item.text}
                                                </a>
                                            </li>
                                        )
                                    })}


                                </ul>
                                :
                                <ul>
                                    {linkDasPaginas.map(item => {
                                        return (
                                            <li key={item.id}>
                                                <a className="specialText" href={item.href}>
                                                    <span># </span>
                                                    {item.text}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        </nav>
                    </div>
                </div>
            </motion.div>
        </header>
    )
}