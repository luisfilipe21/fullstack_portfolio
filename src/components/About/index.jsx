"use client";
import style from "./style.module.scss";
import Foto from "../../assets/eu.jpg";
import { motion } from "framer-motion";

export const AboutSection = () => {

    return (
        <section>
            <div className="container">
                <div className={style.box}>
                    <div className={style.boxDevider} >
                        <div className={style.boxInfo}
                        >
                            <motion.h1 className="title-1"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                Welcome to <span> my portfolio!</span>
                            </motion.h1>

                            <motion.p className="paragraph"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                As a full-stack web developer who lives and breathes code, I'm always on the lookout for the <span> next big adventure</span> in the world of programming. With skills ranging from JavaScript to frameworks <span> React</span> and <span> Angular</span>, and all those libraries and tools that keep us in the rhythm of modern development. I love keeping my code clean and organized - it's like therapy for me! And when I'm not knee-deep in coding, I'm working on improving team communication and always hunting for new technologies to learn. Let's build something amazing together!
                            </motion.p>

                        </div>
                        <motion.div className={style.img}
                            initial={{ opacity: 0, y: 200, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}

                            transition={{ duration: 0.7 }}>
                            <img src={Foto} alt="Img"></img>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}