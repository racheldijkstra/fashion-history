import React from "react";
import './AsiaTimeline.css'
import { Link } from "react-router-dom";

export default function AsiaTimeline(){
    return(
        <div className="timeline">
            <h1 className="title">
                Asia
            </h1>
            <div className="verticalLine"/>
            <div className="horizontalLine1"/>
            <div className="horizontalLine2"/>
            <div className="horizontalLine3"/>
            <div className="horizontalLine4"/>
            <Link to='/Asia-1750' className='Button1'>
                1750-1865
            </Link>
            <Link to='/Asia-1865' className='Button2'>
                1865-1910
            </Link>
            <Link to='/Asia-1910' className='Button3'>
                1910-1920
            </Link>
            <Link to='/Asia-1920' className='Button4'>
                1920-1930
            </Link>
        </div>
    );
}