import { useParams } from 'react-router-dom'
import listlogement from '../assets/logements.json'
import etoilepleine from '../assets/etoile_pleine.png'
import etoilevide from '../assets/etoile_vide.png'
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
            logement.tags.map((tag) => {
                return(
                    <span className="tags"><p>{tag}</p></span>
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

    function etoiles(nbetoiles) {
        if (nbetoiles == 0) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                </span>
            )
        } else if (nbetoiles == 1) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                </span>
            )
        } else if (nbetoiles == 2) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                    <img className="etoile" src={etoilevide} />
                </span>
            )
        } else if (nbetoiles == 3) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilevide}/>
                    <img className="etoile" src={etoilevide} />
                </span>
            )
        } else if (nbetoiles == 4) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilevide} />
                </span>
            )
        } else if (nbetoiles == 5) {
            return (
                <span id="etoiles">
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                    <img className="etoile" src={etoilepleine} />
                </span>
            )
        }
    }
    
    if (verif_id() == true) {
        console.log(logement_select);
        return (
            <div>
                {
                    logement_select.map((logement) => {
                        console.log(logement);
                        return (
                            <div id="logement">
                                <Carrousel_image liste_image={logement.pictures} />
                                <div id="sous_partie">
                                    <div id="part1">
                                        <div id="partie_presentation">
                                            <h1 id="titre_logement">{logement.title}</h1>
                                            <p id="emplacement_logement">{logement.location}</p>
                                            <div id="categorie_du_logement">
                                                {categories(logement)}
                                            </div>
                                        </div>
                                        <div id="partie_note_et_proprietaire">
                                            <div id="identiter">
                                                <p id="identiter_proprio">{logement.host.name}</p>
                                                <img id="img_proprio" src={logement.host.picture} />
                                            </div>
                                            {etoiles(logement.rating)}
                                        </div>
                                    </div>
                                    <div id="partie_description_equipement">

                                        <div id="description">
                                            <Collapse description={logement.description} titre="description" liste={false} nom_compo="txt_description" nom_contenu="contenu_description" />
                                            {//<p>{logement.description}</p>
                                            }
                                        </div>
                                        <div id="equipements">
                                            <Collapse description={logement.equipments} titre="equipement" liste={true} nom_compo="txt_equipement" nom_contenu="contenu_equipement" />
                                            {/*     <button id="interaction_equipement" onClick={maj_equipement}>equipements</button>
                                {equipements(logement)}*/}
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