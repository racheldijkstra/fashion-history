import React from "react";
import SVGMap from "../SVG-map";
import './Century.css'

export default function Century18(){
    return(
        <div className="MapPage-container">
            <h1 className="MapPage-title">
                Time: 18th Century
            </h1>
            <SVGMap Century={18}/>
        </div>
    );
}