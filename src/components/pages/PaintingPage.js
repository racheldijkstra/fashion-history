import React from "react";
import { useLocation, Link } from "react-router-dom";
import './IndividualPage.css'

export default function PaintingPage(){
    const location = useLocation();
    const state = location.state;
    let images = null;
    console.log(state)

    if(state.Continent === 'Europe'){
        images = require.context('../../Paintings/Europe-paintings', true);
    }
    else if(state.Continent === 'Asia'){
        images = require.context('../../Paintings/Asia-paintings', true);
    }
    else if(state.Continent === 'America'){
        images = require.context('../../Paintings/America-paintings', true);
    }

    let imgsrc = images(`./${state.paintingsrc}.jpg`);

    return(
        <>
            {state && (
            <div className="head-container">
                <img className="pictureStyling" src={imgsrc}/>
                <div className="textContainer">
                    <h1 className="titleblok">{state.title}</h1>
                    <p className="textBlok">{state.text}</p>
                </div>
            </div>)}
        </>
    );
}