import style from "./style.module.scss";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer id="contacts">
            <div className="container">
                <div className={style.divName}>
                    <h2 className="title-3">Get in touch</h2>
                </div>
                <div className={style.divLinks}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/luis-filipe-guimar%C3%A3es-costa-784a2a81/" target="_blank">
                                {<AiFillLinkedin size={40} />}
                            </a>
                        </li>
                        <li>
                            <a href="mailto: luisfilipegc@hotmail.com" target="_blank" title="luisfilipegc@hotmail.com">
                                {<AiOutlineMail size={40} />}
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5561982072433" alt="+55 (61) 98207-2433" title="+55 (61) 98207-2433">
                                {<BsWhatsapp size={40} />}
                            </a>
                        </li>
                        {/* <li>
                            <a href="https://github.com/luisfilipe21" target="_blank">
                                {<BiLogoGithub size={40} />}
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}