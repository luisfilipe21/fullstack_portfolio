import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.scss";
import { useContext, useState } from "react";
import { ProjectContext } from "../../../providers/LengContext";

export const Card = ({
    site,
    technologies,
    description,
    name,
    img,
    git }) => {

    const [showOverlay, setShowOverlay] = useState(false);
    const { modal, setModal, capturedId } = useContext(ProjectContext);



    return (<>
        <motion.div
            onHoverStart={() => setShowOverlay(true)}
            onHoverEnd={() => setShowOverlay(false)}
            key={img}
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
                            {!site ? null : <a href={site} target="_blank" className="paragraph">Deploy</a>}

                            <a href={git} target="_blank" className="paragraph">GitHub</a>
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
                    <button
                        type="button"
                        onClick={() => setModal(!modal) | capturedId({ name, description, technologies })}
                        className="link"
                    >Projects Details</button>
                </div>
            </div>
        </motion.div>
    </>
    )
}