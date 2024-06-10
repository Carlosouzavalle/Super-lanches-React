import { FaInstagram, FaGithub  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import style from '../../css/Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.container}>
            <div className={style.owner}>
                <ol>
                    <li><a href="https://github.com/Carlosouzavalle" target='_blank'> <FaGithub /> </a></li>
                    <li><a href="https://www.instagram.com/cad_uh/" target='_blank'> <FaInstagram /></a></li>
                    <li><a href="mailto:carlosouzavalle@gmail.com" > <CgMail />  </a></li>
                </ol>
            </div>
        </footer>
    )
}


export default Footer