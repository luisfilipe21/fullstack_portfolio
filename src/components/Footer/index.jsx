import { useContext } from "react";
import style from "./style.module.scss";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { ProjectContext } from "../../providers/LengContext";
import { motion } from "framer-motion";

export const Footer = () => {
    const { port } = useContext(ProjectContext);

    return (
        <footer id="contacts">
            <div className="container">
                <div className={style.divName}>
                    {port
                        ?
                        <motion.h2 className="title-3"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >Get in touch</motion.h2>
                        :
                        <motion.h2 className="title-3"
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >Entre em contato</motion.h2>
                    }
                </div>
                <div className={style.divLinks}>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/luis-filipe-guimar%C3%A3es-costa-784a2a81/" target="_blank">
                                {<AiFillLinkedin size={60} />}
                            </a>
                        </li>
                        <li>
                            <a href="mailto: luisfilipegc@hotmail.com" target="_blank" title="luisfilipegc@hotmail.com">
                                {<AiOutlineMail size={60} />}
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5561982072433" alt="+55 (61) 98207-2433" title="+55 (61) 98207-2433">
                                {<BsWhatsapp size={60} />}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}