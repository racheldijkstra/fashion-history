import React from "react";
import SVGMap from "../SVG-map";
import './Century.css'

export default function Century20(){
    return(
        <div className="MapPage-container">
            <h1 className="MapPage-title">
                Time: 20th Century
            </h1>
            <SVGMap Century={20}/>
        </div>
    );
}