import React, { useState } from 'react'
import fleche_bas from '../assets/fleche_bas.png'
import fleche_haut from '../assets/fleche_haut.png'


export default function Collapse(props) {
  

    const { description, titre, liste } = props;
    const [open, setOpen] = useState(false);
   

    function maj() {
        if (open == false) {
            setOpen (true);
           
        } else {
            setOpen (false);
        
        }
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

