"use client";
import { Card } from "./Card"
import style from "./style.module.scss";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ProjectContext } from "../../providers/LengContext";
import { ModalDetail } from "../Modal";
import { projects } from "../../data/projects";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Projects = () => {
    const { port, modal } = useContext(ProjectContext);

    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleProjects = projects.slice(0, 5);


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

                    <div className={style.motionDiv}>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            navigation={{
                                nextEl: `.${style.next}`,
                                prevEl: `.${style.prev}`
                            }}
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination]}
                            className={style.swiperDiv}>
                            {visibleProjects.map(project => {
                                return (
                                    <SwiperSlide key={project.id}>
                                        <Card
                                            name={project.name}
                                            site={project.site}
                                            img={project.img}
                                            git={project.git}
                                            description={project.description}
                                            technologies={project.technologies}
                                        />
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper>
                        {/* {visibleProjects.map(project => {
                                return (
                                    <Card
                                        key={project.id}
                                        name={project.name}
                                        site={project.site}
                                        img={project.img}
                                        git={project.git}
                                        description={project.description}
                                        technologies={project.technologies}
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: .35 }}
                                        viewport={{ once: true, amount: .3 }}
                                    />
                                )
                            })} */}
                        {modal ? <ModalDetail
                        /> : null}
                        <button className={`${style.carouselButton} ${style.prev}`} >
                            <GrCaretPrevious size={25} color={`#f6be3d`} />
                        </button>
                        <button className={`${style.carouselButton} ${style.next}`} >
                            <GrCaretNext size={25} color={`#f6be3d`} />
                        </button>
                    </div>
                </div>
            </div >
        </section >
    )
}