import { Link } from 'react-router-dom'


function Partie_erreur () {
    return (
        <div id="404">
          <h1 id="h1404">404</h1>
            <p id="txt404">Oups! La page que vous demandez n'existe pas.</p>
            <div id="mp_link">
                <Link className="link_nav" to="/" id="link404">Retourner sur la page d'accueil</Link>
            </div>
        </div>
        )


}

export default Partie_erreur