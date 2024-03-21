import style from "./style.module.scss";


export const Card = ({ name,
    description,
    site,
    img,
    technologies,
    git }) => {

    return (
        <div className={style.projects}>
            <div className={style.projectsCards}>
                <div className={style.cards}>

                <img src={img} />
                <div className={style.openCard}>
                    <a href="link para um modal">Projects Details</a>
                </div>
                </div>
            </div>
        </div>
    )
}