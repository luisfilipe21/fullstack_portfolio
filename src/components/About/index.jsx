import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";
import style from "./style.module.scss";
import Foto from "../../assets/foto.png"

export const AboutSection = () => {
    return (
        <section>
            <div className="container">
                <div className={style.box}>
                    <div className={style.boxDevider}>
                        <div className={style.boxInfo}>

                            <div className={style.boxLinks}>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/luis-filipe-guimar%C3%A3es-costa-784a2a81/" target="_blank">
                                            {<AiFillLinkedin size={20} />}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto: luisfilipegc@hotmail.com" target="_blank" title="luisfilipegc@hotmail.com">
                                            {<AiOutlineMail size={20} />}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://wa.me/5561982072433" target="_blank">
                                            {<BsWhatsapp size={20} />}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/luisfilipe21" target="_blank">

                                            {<BiLogoGithub size={20} />}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <h1 className={style.title}>
                            It's a pleasure to welcome you to my portfolio!
                            </h1>
                            <p className={style.paragraph}>
                            As a full-stack web developer who lives and breathes code, I'm always on the lookout for the next big adventure in the world of programming. With skills ranging from JavaScript to frameworks like React and Angular, and all those libraries and tools that keep us in the rhythm of modern development. I love keeping my code clean and organized - it's like therapy for me! And when I'm not knee-deep in coding, I'm working on improving team communication and always hunting for new technologies to learn. Let's build something amazing together!
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