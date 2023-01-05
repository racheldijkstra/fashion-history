import React from "react";
import SVGMap from "../SVG-map";
import './Century.css'

export default function Century19(){
    return(
        <div className="MapPage-container">
            <h1 className="MapPage-title">
                Time: 19th Century
            </h1>
            <SVGMap Century={19}/>
        </div>
    );
}