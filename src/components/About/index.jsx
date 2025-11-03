"use client";
import style from "./style.module.scss";
import Foto from "../../assets/eu.jpg";
import { motion } from "framer-motion";
import { ProjectContext } from "../../providers/LengContext";
import { useContext } from "react";

export const AboutSection = () => {


    const { port } = useContext(ProjectContext);

    const presentationText = `I’m Luis Filipe, a front-end developer focused on React, Next.js and TypeScript. Before tech, I worked in administrative and communication roles — which is why I bring process, clarity and ownership into software. I don’t just ship code. I ship clarity + structure with code.

    I’ve contributed to 40+ projects, freelance, personal and professional, always delivering clean architecture, accessible UI, and solutions that actually make sense to the end user. I love turning complexity into simple experiences — and I’m obsessed with continuous improvement.

    If your team values product-thinking, quality engineering and people who push the bar forward — we’re aligned.`

    const textoDeApresentacao = `Sou o Luis Filipe, desenvolvedor front-end especializado em React, Next.js e TypeScript. Antes de migrar para o desenvolvimento, atuei em áreas administrativas e comunicação. Essa base me tornou extremamente organizado, orientado a processos e claro na comunicação. Hoje, trago tudo isso para o código, criando interfaces acessíveis, responsivas e com arquitetura cuidadosa.

    Já participei de mais de 40 projetos entre freelas, pessoais e profissionais, sempre priorizando código limpo, boas práticas e entregando valor real ao usuário final. Minha motivação é construir produtos que façam sentido e evoluam continuamente. Se a sua empresa busca alguém que pense produto e não apenas linha de código, que eleve o nível do time e entregue com propósito, então nós combinamos.`


    return (
        <section className="container">
            <div className={style.box}>
                <div className={style.boxDivider}>

                    <div className={style.boxTitle}>
                        {port ?
                            <motion.h1 className="title-1"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Welcome to <span> my portfolio!</span>
                            </motion.h1>
                            :
                            <motion.h1 className="title-4"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Bem-Vindo ao <span> meu portfólio!</span>
                            </motion.h1>
                        }
                    </div>

                    <div className={style.boxInfo}>
                        {port ?
                            <motion.p className="paragraph"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {presentationText}
                            </motion.p>
                            :
                            <motion.p className="paragraph"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                {textoDeApresentacao}
                            </motion.p>
                        }



                        <motion.figure className={style.img}
                            initial={{ opacity: 0, y: 200, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}

                            transition={{ duration: 0.7 }}>
                            <img src={Foto} alt="Img" />
                        </motion.figure>

                    </div>
                </div>
            </div>

        </section>
    )
}