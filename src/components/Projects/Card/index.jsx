import style from "./style.module.scss";
import { useContext } from "react";
import { ProjectContext } from "../../../providers/LengContext";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Card = ({
    site,
    technologies,
    description,
    name,
    img,
    git }) => {

    const { modal, setModal, capturedId } = useContext(ProjectContext);


    return (<>
        <div
            key={img}
            className={style.projects}>

            <div className={style.cards}

            >
                <a href={site} target="_blank">
                    <div
                        className={style.img}

                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >

                    </div>
                </a>

                <h2
                    >
                    {name}
                </h2>
                <p>
                    {description}
                </p>

                <div className={style.techList}>
                    {technologies.map((item, i) => <img
                     
                     width={30}
                     key={i}
                     src={item}/>)}
                </div>

            </div>
        </div>
    </>
    )
}
// <button
//     type="button"
//     onClick={() => setModal(!modal) | capturedId({ name, description, technologies })}
//     className="link"
// >Projects Details</button>