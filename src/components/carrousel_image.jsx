import React, { useState } from 'react'

export default function Carrousel_image(props) {
    const { liste_image } = props;
    console.log("list:" + liste_image);
    console.log(props)
    const aff_img = document.getElementById("img_actuel");
    const aff_num_img = document.getElementById("num_img");
    var liste = [];
    liste = liste_image;
    var index = 0;
    var donnee_num = (index+1)+"/"+liste_image.length;
    function suivant() {
        if (index < liste_image.length-1) {
            index += 1;
        } else {
            index = 0;
        }
        donnee_num = (index + 1) + "/" + liste_image.length;
        aff_num_img.textContent = donnee_num;
        aff_img.src = liste_image[index]; 
    }

    function precedent() {
        if (index == 0) {
            index = liste_image.length-1;
        } else {
            index -= 1;
        }
        donnee_num = (index + 1) + "/" + liste_image.length;
        aff_num_img.textContent = donnee_num;
        aff_img.src = liste_image[index];
    }

   


    return (
        <div className="carrousel_image">
            <button id="precedent" onClick={precedent} >{"<"}</button>
            <img id="img_actuel" src={liste[0]} />
            <p id="num_img">{donnee_num}</p>
            <button id="suivant" onClick={suivant}>{">"}</button>
        </div>
        )
}