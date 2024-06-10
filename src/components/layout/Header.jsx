import Logo from '../../assets/img/LogoSemFUndo.png'
import style from '../../css/Header.module.css'

const Header = () => {

    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <header>
            <nav className={style.navContainer}>
                <div>
                    <img className={style.logo} src={Logo} alt="" />
                </div>
                <div>
                    <ol className={style.linksContainer}>
                        <li><a href="#">INICIO</a></li>
                        <li><a href="#cardapio" onClick={() => handleScroll('cardapio')}>CARDÁPIO</a></li>
                        <li><a href="#" onClick={() => handleScroll('bebidas')}>BEBIDAS</a></li>
                        <li><a href="#">CONTATO</a></li>
                    </ol>
                </div>
            </nav>
        </header>
    )
}

export default Header