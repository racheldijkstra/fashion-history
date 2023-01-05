import React from "react";
import './AmericaTimeline.css'
import { Link } from "react-router-dom";

export default function AmericaTimeline(){
    return(
        <div className="timeline">
            <h1 className="title">
                America
            </h1>
            <div className="verticalLineShort"/>
            <div className="horizontalLineA1"/>
            <div className="horizontalLineA2"/>
            <div className="horizontalLineA3"/>
            <Link to='/America-1750' className='ButtonA1'>
                1750-1810
            </Link>
            <Link to='/America-1810' className='ButtonA2'>
                1810-1820
            </Link>
            <Link to='/America-1820' className='ButtonA3'>
                1820-1830
            </Link>
        </div>
    );
}