import React, { useState } from 'react'
import fleche_bas from '../assets/fleche_bas.png'
import fleche_haut from '../assets/fleche_haut.png'


export default function Collapse(props) {
    /*
    const { description, titre, liste,nom_compo,nom_contenu } = props;
    const [num_compo, set_nom_compo] = useState(0);
    const [num_contenu, set_nom_contenu] = useState(0);
    
    function maj() {
        const txt_val = document.getElementById(nom_compo).textContent;
        const zone_contenu = document.getElementById(nom_contenu);
        if (txt_val == "+") {
            zone_contenu.style.display = 'block';
            document.getElementById(nom_compo).textContent = "-";
        } else {
            zone_contenu.style.display = 'none';
            document.getElementById(nom_compo).textContent = "+";
        }
    }


    return (
        <div className="ensemble_collapse">
            <button className="collapse" onClick={maj}>{titre}<p id={nom_compo}>-</p></button>
            <div className="contenu_collapse" id={nom_contenu }>
            {liste ? <ul>{description.map((val, key) => {
                return(
                    <li key={ key }> { val }</li>
                )
            })}</ul> : <p>{description}</p>}
            </div>
        </div>
    )
    */

    const { description, titre, liste } = props;
    const [open, setOpen] = useState(false);
   

    function maj() {

        if (open == false) {
            setOpen (true);
           
        } else {
            setOpen (false);
        
        }
        /*
        const txt_val = document.getElementById(nom_compo).textContent;
        const zone_contenu = document.getElementById(nom_contenu);
        if (txt_val == "+") {
            zone_contenu.style.display = 'block';
            document.getElementById(nom_compo).textContent = "-";
        } else {
            zone_contenu.style.display = 'none';
            document.getElementById(nom_compo).textContent = "+";
        }*/
    }


    return (
        <div className="ensemble_collapse">
            <button className="collapse" onClick={maj}>{titre}<img src={open ? fleche_haut : fleche_bas}/></button>
            {open ? <div className="contenu_collapse" >
                {liste ? <ul>{description.map((val, key) => {
                    return (
                        <li key={key}> {val}</li>
                    )
                })}</ul> : <p>{description}</p>}
            </div>:" "}
        </div>
    )


}

