import React from "react";
import './EuropeTimeline.css'
import { Link } from "react-router-dom";

export default function EuropeTimeline(){
    return(
        <div className="timeline">
            <h1 className="title">
                Europe
            </h1>
            <div className="verticalLine"/>
            <div className="horizontalLineE1"/>
            <div className="horizontalLineE2"/>
            <div className="horizontalLineE3"/>
            <div className="horizontalLineE4"/>
            <div className="horizontalLineE5"/>
            <div className="horizontalLineE6"/>
            <div className="horizontalLineE7"/>
            <div className="horizontalLineE8"/>
            <Link to='/Europe-1750' className='ButtonE1'>
                1750-1775
            </Link>
            <Link to='/Europe-1775' className='ButtonE2'>
                1775-1795
            </Link>
            <Link to='/Europe-1795' className='ButtonE3'>
                1795-1820
            </Link>
            <Link to='/Europe-1820' className='ButtonE4'>
                1820-1850
            </Link>
            <Link to='/Europe-1850' className='ButtonE5'>
                1850-1870
            </Link>
            <Link to='/Europe-1870' className='ButtonE6'>
                1870-1890
            </Link>
            <Link to='/Europe-1890' className='ButtonE7'>
                1890-1920
            </Link>
            <Link to='/Europe-1920' className='ButtonE8'>
                1920-1930
            </Link>
        </div>
    );
}