import { Link } from 'react-router-dom'
import logo_header from'../assets/logo_header.png'

function Header() {
    return (<header>
        <img src={logo_header } alt="logo kasa" id="img_header"></img>
        <nav>
            <Link className="link_nav" to="/" id="accueil">Accueil</Link>
            <Link className="link_nav" to="/a_propos">A Propos</Link>
        </nav>
    </header>
    )
}

export default Header