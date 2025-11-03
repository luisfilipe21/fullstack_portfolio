import style from "./style.module.scss";
import { motion } from "framer-motion";


import { useContext } from "react";
import { ProjectContext } from "../../providers/LengContext";
import { techList } from "./data/techList";
import { TechList } from "./TechList";

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
                                    <motion.h2 className="title-3-2"
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
                                        {techList.map((tech, id) => {
                                            return (
                                                <TechList key={id} tech={tech} />
                                            )
                                        })}
                                    </motion.ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}