import { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import { ProjectContext } from "../../providers/LengContext";
import close from "/close.svg"

export const ModalDetail = () => {
    const { port, setModal, capturedProjectId } = useContext(ProjectContext);
    const [techs, setTechs] = useState([]);


    const closeModal = () => {
        setModal(false);
    }

    useEffect(() => {
        setTechs(capturedProjectId.technologies)
    }, []);

    return (
        <div className={style.boxModal}>
            <div className={style.modal}>
                <img src={close} onClick={closeModal} />

                <div className={style.boxInfo}>
                    <div className={style.title}>
                        <p className="title-2">
                            {capturedProjectId.name}
                        </p>
                    </div>
                    <div className={style.description}>
                        <p className="paragraph">
                            {capturedProjectId.description}
                        </p>
                    </div>

                    <div className={style.techs} >
                        {techs.map((techs, i) => {
                            return (
                                <div
                                    key={i}
                                    className={style.individualTech}>
                                    {techs}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}