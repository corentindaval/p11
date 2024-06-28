import React, { useState } from 'react'

export default function Carrousel_image(props) {
    const { liste_image } = props;
    const [donnee_num, setDonnee_num] = useState(1 + "/" + liste_image.length);
    const [aff_img, setAff_img] = useState(liste_image[0])
    const [index, setIndex] = useState(0)

    var liste = [];
    liste = liste_image;
    function suivant() {
        if (index < liste_image.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setDonnee_num((index + 1) + "/" + liste_image.length);
        setAff_img(liste_image[index])
        console.log(liste_image[index]);
    }

    function precedent() {
        if (index == 0) {
            setIndex(liste_image.length - 1);
        } else {
            setIndex(index - 1);
        }
        setDonnee_num((index + 1) + "/" + liste_image.length);
        setAff_img(liste_image[index])
    }

    if (liste_image.length > 1) {
        return (
            <div className="carrousel_image">
                <button id="precedent" onClick={precedent} >{"<"}</button>
                <img id="img_actuel" src={aff_img} />
                <p id="num_img">{donnee_num}</p>
                <button id="suivant" onClick={suivant}>{">"}</button>
            </div>
        )
    } else {
        return (
            <div className="carrousel_image"> 
                <img id="img_actuel" src={aff_img} />
            </div>
        )
    }


}