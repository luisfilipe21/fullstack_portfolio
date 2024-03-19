import style from "./style.module.scss";
import { GiBrazilFlag } from "react-icons/gi";

export const Header = () => {

    return (
        <header>
            <div className="container">
                <div className={style.box}>
                    <div className={style.name}>
                        <h1 className="title-3">Luis Filipe</h1>
                    </div>

                    <div className={style.flag}>
                        <button className={style.button}><GiBrazilFlag color="yellow" /></button>
                    </div>


                    <div className={style.nav}>
                        <nav>
                            <ul>
                                <li><a className="paragraph" href="#projects">Projects</a></li>
                                <li><a className="paragraph" href="#stacks">Stacks</a></li>
                                <li><a className="paragraph" href="#contacts">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}