import style from "./style.module.scss";

export const Card = ({ name,
    description,
    site,
    img,
    technologies,
    git }) => {

    return (
        <div className={style.projects}>
            <div className={style.cards}>
                <div className={style.img}
                style={{
                    backgroundImage: `url(${img})`,
                    width: "100%",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                </div>
                <div className={style.openCard}>
                    <a href="link para um modal" className="link">Projects Details</a>
                </div>
            </div>

        </div>
    )
}