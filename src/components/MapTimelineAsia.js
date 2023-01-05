import React from "react";
import './MapTimeline.css'
import { Link } from 'react-router-dom'

const TimelineAsia19 = () => {
    return(
        <>
            <h1 className="title">Asia</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineBottom"/>
            <Link to='/Asia-1750' className='ButtonTop'>
                1750-1865
            </Link>
            <Link to='/Asia-1865' className='ButtonBottom'>
                1865-1910
            </Link>
        </>
    );
}

const TimelineAsia20 = () => {
    return(
        <>
            <h1 className="title">Asia</h1>
            <div className="verticalLine"/>
            <div className="horizontalLineTop"/>
            <div className="horizontalLineMiddle"/>
            <div className="horizontalLineBottom"/>
            <Link to='/Asia-1865' className='ButtonTop'>
                1865-1910
            </Link>
            <Link to='/Asia-1910' className='ButtonMiddle'>
                1910-1920
            </Link>
            <Link to='/Asia-1920' className='ButtonBottom'>
                1920-1930
            </Link>
        </>
    );
}

const MapTimelineAsia = ({Century}) => {
    return (
        <div className="miniTimeline">
            {Century === 19 && <TimelineAsia19/>}
            {Century === 20 && <TimelineAsia20/>}
        </div>
    );
}

export default MapTimelineAsia;