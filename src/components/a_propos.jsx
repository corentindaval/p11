import img_fond2 from '../assets/fond2.png'
import Collapse from './collapse'

function A_propos() {
    return (
        <div id="composant_a_propos">
            <img id="img_fond2" src={img_fond2}></img>
            <div id="partie_a_propos">
             <div id="Fiabilité">
                <Collapse description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." titre="fiabilité" liste={false} nom_compo="txt_fiabilite" nom_contenu="contenu_fiabilite" />
             </div>
             <div id="Respect">
                <Collapse description="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." titre="respect" liste={false} nom_compo="txt_respect" nom_contenu="contenu_respect" />
             </div>
             <div id="Service">
                <Collapse description="La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme." titre="service" liste={false} nom_compo="txt_service" nom_contenu="contenu_service" />
             </div>
             <div id="Sécurité">
                <Collapse description="La sécurité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes." titre="sécurité" liste={false} nom_compo="txt_securite" nom_contenu="contenu_securite" />
             </div>
            </div>
        </div>
        )

}


export default A_propos