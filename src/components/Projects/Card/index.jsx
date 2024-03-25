import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import style from "./style.module.scss";
import { useEffect, useState } from "react";
import { projects } from "../../../data/projects";




export const Card = ({ name,
    description,
    site,
    img,
    technologies,
    git }) => {

    const [showOverlay, setShowOverlay] = useState(false);



    return (<>
        <motion.div
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
            className={style.projects}>
            <AnimatePresence>
                {showOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={style.cardsOverlay}
                    >
                        <motion.div
                            initial={{ y: 10 }}
                            animate={{ y: 0 }}
                            exit={{ y: 10 }}
                            className={style.overlayImg}
                        >
                            <a href="" className="paragraph">Deploy</a>
                            <a href="" className="paragraph">GitHub</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className={style.cards}>
                <div
                    className={style.img}

                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
                <div className={style.openCard}>
                    <a href="link para um modal" className="link">Projects Details</a>
                </div>
            </div>
        </motion.div>
    </>
    )
}