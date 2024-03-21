import style from "./style.module.scss";
import Foto from "../../assets/eu.jpg"

export const AboutSection = () => {
    
    return (
        <section>
            <div className="container">
                <div className={style.box}>
                    <div className={style.boxDevider}>
                        <div className={style.boxInfo}>

                            <h1 className="title-1">
                            Welcome to <span> my portfolio!</span>
                            </h1>
                            <p className="paragraph">
                            As a full-stack web developer who lives and breathes code, I'm always on the lookout for the <span> next big adventure</span> in the world of programming. With skills ranging from JavaScript to frameworks like <span className={style.blue}> React </span> and <span className={style.red}> Angular</span>, and all those libraries and tools that keep us in the rhythm of modern development. I love keeping my code clean and organized - it's like therapy for me! And when I'm not knee-deep in coding, I'm working on improving team communication and always hunting for new technologies to learn. Let's build something amazing together!
                            </p>
                            
                        </div>

                        <div>
                            <div className={style.img}>
                                <img src={Foto} alt="Img"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}