import "./Header.css"
import logo from "/src/assets/images/logo.jpg"

export default function Header(){
    return(
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt="Portrait of Camilo Cuartas" />
                    <h2 className="header__logo-text">CAMILO CUARTAS</h2>
                </div>
                <div className="header__nav">
                    <nav>
                        <ul className="header__nav-list">
                            <li className="header__nav-item"><a className="header__nav-link" href="#projects">PROJECTS</a></li>
                            <li className="header__nav-item"><a className="header__nav-link" href="#projects">ABOUT</a></li>
                            <li className="header__nav-item"><a className="header__nav-link" href="#projects">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}