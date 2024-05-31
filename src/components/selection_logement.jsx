import listlogement from '../assets/logements.json'
import fond1 from '../assets/fond1.png'
import { Link } from 'react-router-dom'



function Selection_logement() {
  
    return (
        <div>


            <div id="baniere">
                <div id="layout_img_selection"></div>
                    <img src={fond1} id="img_selection"></img>
                <p id="txt_selection">Chez vous, partout et ailleurs</p>
            </div>
            <div id="selection_location">
                {listlogement.map((logement) => [
                    <figure id={logement.id} key={logement.id} className="carte_logement" >
                        <Link to={`/logement/${logement.id}`}> 
                            <img src={logement.cover} className="img_carte_logement" />
                            <div className="fond_carte">
                            </div>
                            <p className="txt_logement">{logement.title}</p>
                        </Link>
                    </figure>

                   
                ])}
            </div>
        </div>
        )

}


export default Selection_logement