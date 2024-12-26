"use client";
import style from "./style.module.scss";
import Foto from "../../assets/eu.jpg";
import { motion } from "framer-motion";
import { ProjectContext } from "../../providers/LengContext";
import { useContext } from "react";

export const AboutSection = () => {


    const { port } = useContext(ProjectContext);

    return (
        <section>
            <div className="container">
                <div className={style.box}>
                    <div className={style.boxDevider} >
                        <div className={style.boxInfo}
                        >
                            {port ?
                                <motion.h1 className="title-1"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    Welcome to <span> my portfolio!</span>
                                </motion.h1>
                                :
                                <motion.h1 className="title-1"
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    Bem Vindo ao <span> meu portfólio!</span>

                                </motion.h1>
                            }

                            {port ?
                            <motion.p className="paragraph"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            As a full-stack web developer who lives and breathes code, I'm always on the lookout for the <span> next big adventure</span> in the world of programming. With skills ranging from JavaScript to frameworks <span> React</span> and <span> Angular</span>, and all those libraries and tools that keep us in the rhythm of modern development. I love keeping my code clean and organized - it's like therapy for me! And when I'm not knee-deep in coding, I'm working on improving team communication and always hunting for new technologies to learn. Let's build something amazing together!
                        </motion.p>
                        :
                        <motion.p className="paragraph"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                Como um desenvolvedor web full-stack que vive e respira código, estou constantemente em busca da <span>próxima grande aventura</span> no mundo da programação. Com habilidades que abrangem desde JavaScript e Typescript até os frameworks <span>React</span> e <span>Angular</span>, além de todas aquelas bibliotecas e ferramentas que mantêm nosso ritmo no desenvolvimento moderno. Eu tenho um amor especial por manter meu código limpo e organizado - é como uma terapia para mim! Quando não estou imerso no código, estou dedicado a melhorar a comunicação da equipe e sempre buscando aprender novas tecnologias. Vamos construir algo incrível juntos!
                            </motion.p>
                        }
                            

                        </div>
                        <motion.div className={style.img}
                            initial={{ opacity: 0, y: 200, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}

                            transition={{ duration: 0.7 }}>
                            <img src={Foto} alt="Img"/>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}