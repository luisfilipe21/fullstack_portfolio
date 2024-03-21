import style from "./style.module.scss";
import brasil from "../../assets/brasil.svg";
import eua from "../../assets/eua.svg";
import { useState } from "react";

export const Header = () => {

    const [port, setPort] = useState(true);


    return (
        <header>
            <div className="container">
                <div className={style.box}>
                    <div className={style.name}>
                        <h1 className="title-3">Luis</h1>
                    </div>

                    <div className={style.flag}>
                        <button
                            className={style.button}
                            onClick={() => setPort(!port)}
                        >
                            {
                                port ? <img className={style.animateFlag} src={brasil} /> : <img className={style.animateFlag} src={eua} />
                            }
                        </button>
                    </div>


                    <div className={style.nav}>
                        <nav>
                            <ul>
                                <li><a className="specialText" href="#projects">Projects</a></li>
                                <li><a className="specialText" href="#stacks">Stacks</a></li>
                                <li><a className="specialText" href="#contacts">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}