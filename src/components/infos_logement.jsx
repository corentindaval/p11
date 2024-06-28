import { useParams } from 'react-router-dom'
import listlogement from '../assets/logements.json'
import Etoile from "../components/etoile.jsx"
import Collapse from './collapse'
import Carrousel_image from './carrousel_image'
import Partie_erreur from '../components/erreur.jsx'


function Info_logement() {
    const { id } = useParams();
    const logement_select = listlogement.filter(logement =>
        logement.id === id);

    function verif_id() {
        if (logement_select != "") {
            return true;
        } else {
            return false;
        }
    }



    function categories(logement) {
        return (
            logement.tags.map((tag) => {
                <span className="tags"><p>{tag}</p></span>
            })
        )
    }

    function categories(logement) {
        return (
            logement.tags.map((tag,index) => {
                return(
                    <span className="tags" key={index}><p>{tag}</p></span>
                    )
            })
        )
    }

    function equipements(logement) {
        return (
            <ul>{
                logement.equipments.map((equipement) => {
                  return(
                        <li>{equipement}</li>
                      )
                })
            }</ul>
           
          
        )
    }

    function imgs(logement) {
        return (
            logement.pictures.map((img) => {
                <img src={img} />
            })
        )
    }

    
    if (verif_id() == true) {
        console.log(logement_select);
        return (
            <div>
                {
                    logement_select.map((logement,index) => {
                        console.log(logement);
                        return (
                            <div id="logement" key={index}>
                                <Carrousel_image liste_image={logement.pictures} />
                                <div id="sous_partie">
                                    <div id="part1">
                                        <div id="partie_presentation">
                                            <h1 id="titre_logement">{logement.title}</h1>
                                            <p id="emplacement_logement">{logement.location}</p>
                                            <div id="categorie_du_logement" >
                                                {categories(logement)}
                                            </div>
                                        </div>
                                        <div id="partie_note_et_proprietaire">
                                            <div id="identiter">
                                                <p id="identiter_proprio">{logement.host.name}</p>
                                                <img id="img_proprio" src={logement.host.picture} />
                                            </div>
                                            <Etoile nbetoiles={logement.rating} />
                                        </div>
                                    </div>
                                    <div id="partie_description_equipement">

                                        <div id="description">
                                            <Collapse description={logement.description} titre="description" liste={false} nom_compo="txt_description" nom_contenu="contenu_description" />
                                           
                                        </div>
                                        <div id="equipements">
                                            <Collapse description={logement.equipments} titre="equipement" liste={true} nom_compo="txt_equipement" nom_contenu="contenu_equipement" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    } else {
        return (
            <div>
                <Partie_erreur />
            </div>
           )
    }

    }
    







export default Info_logement