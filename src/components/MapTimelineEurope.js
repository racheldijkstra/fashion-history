import React from "react";
import './MapTimeline.css'
import { Link } from 'react-router-dom'

const TimelineEurope18 = () => {
    return(
        <>
            <h1 className="title">Europe</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineMiddle"/>
            <div className="horizontalLineBottom"/>
            <Link to='/Europe-1750' className='ButtonTop'>
                1750-1775
            </Link>
            <Link to='/Europe-1775' className='ButtonMiddle'>
                1775-1795
            </Link>
            <Link to='/Europe-1795' className='ButtonBottom'>
                1795-1820
            </Link>
        </>
    );
}

const TimelineEurope19 = () => {
    return(
        <>
            <h1 className="title">Europe</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineTopMiddle"/>
            <div className="horizontalLineMiddle"/>
            <div className="horizontalLineBottomMiddle"/>
            <div className="horizontalLineBottom"/>
            <Link to='/Europe-1795' className='ButtonTop'>
                1795-1820
            </Link>
            <Link to='/Europe-1820' className='ButtonTopMiddle'>
                1820-1850
            </Link>
            <Link to='/Europe-1850' className='ButtonMiddle'>
                1850-1870
            </Link>
            <Link to='/Europe-1870' className='ButtonBottomMiddle'>
                1870-1890
            </Link>
            <Link to='/Europe-1890' className='ButtonBottom'>
                1890-1920
            </Link>
        </>
    );
}

const TimelineEurope20 = () => {
    return(
        <>
            <h1 className="title">Europe</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineBottom"/>
            <Link to='/Europe-1890' className='ButtonTop'>
                1890-1920
            </Link>
            <Link to='/Europe-1920' className='ButtonBottom'>
                1920-1930
            </Link>
        </>
    );
}

const MapTimelineEurope = ({Century}) => {
    return (
        <div className="miniTimeline">
            {Century === 18 && <TimelineEurope18/>}
            {Century === 19 && <TimelineEurope19/>}
            {Century === 20 && <TimelineEurope20/>}
        </div>
    );
}

export default MapTimelineEurope;