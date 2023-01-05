import React from "react";
import './MapTimeline.css'
import { Link } from 'react-router-dom'

const MapTimelineAmerica = () => {
    return (
        <div className="miniTimeline">
            <h1 className="title">America</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineMiddle"/>
            <div className="horizontalLineBottom"/>
            <Link to='/America-1750' className='ButtonTop'>
                1750-1810
            </Link>
            <Link to='/America-1810' className='ButtonMiddle'>
                1810-1820
            </Link>
            <Link to='/America-1820' className='ButtonBottom'>
                1820-1830
            </Link>
        </div>
    );
}

export default MapTimelineAmerica;