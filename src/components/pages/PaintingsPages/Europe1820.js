import React from "react";
import PaintingNavbar from "../../PaintingNavbar";
import { Link } from "react-router-dom";
import {EuropeItems1820 as TimelineItems} from "../../dropDownLists/EuropeItems";
import {EuropeContinentItems as ContinentItems} from "../../dropDownLists/ContinentItems";
import {EuropePainting1820Female as FemaleItems} from "../../PaintingLists/EuropePaintings";
import {EuropePainting1820Male as MaleItems } from "../../PaintingLists/EuropePaintings";
import './PaintingPage.css'

const time = '1820-1850'
const region = 'Europe'
// Require context image folder
const images = require.context('../../../Paintings/Europe-paintings', true);

export default function PaintingPage(){
    return(
        <>
            <PaintingNavbar Time={time} Region={region} TimelineItems={TimelineItems} RegionItems={ContinentItems}/>
            <div className="head-div">
                <div className="gender-div">
                    <h1 className="gender-title">
                        Female
                    </h1>
                    {FemaleItems.map((item, index) => {
                        let imgsrc = images(`./${item.paintingsrc}.jpg`);
                        return(
                            <li key={index}>
                                <Link 
                                    className={item.cName} 
                                    to={item.path} 
                                >
                                    <img src={imgsrc} className="image"/>
                                </Link>
                                <p className="image-paragraph">{item.title}</p>
                            </li>
                        )
                    })}
                </div>
                <div className="verticalLine-painting"/>
                <div className="gender-div">
                    <h1 className="gender-title">
                        Male
                    </h1>
                    {MaleItems.map((item, index) => {
                        let imgsrc = images(`./${item.paintingsrc}.jpg`);
                        return(
                            <li key={index}>
                                <Link 
                                    className={item.cName} 
                                    to={item.path} 
                                >
                                    <img src={imgsrc} className="image"/>
                                </Link>
                                <p className="image-paragraph">{item.title}</p>
                            </li>
                        )
                    })}
                </div>
            </div>
        </>
    );
}