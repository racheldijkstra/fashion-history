import React, {useState} from 'react'
import './PaintingNavbar.css'
import Dropdown from './Dropdown'
import {FiChevronDown} from 'react-icons/fi'

function PaintingNavbar({Time, Region, TimelineItems, RegionItems}){
    const [dropdown, setDropdown] = useState(false);
    const [dropdownRegion, setDropdownRegion] = useState(false);

    const onMouseEnter = () => {
        setDropdown(true);
    };
    const onMouseLeave = () => {
        setDropdown(false);
    };

    const onMouseEnterRegion = () => {
        setDropdownRegion(true);
    };
    const onMouseLeaveRegion = () => {
        setDropdownRegion(false);
    };

    return(
        <>
        <nav className='paintingNavbar'>
            <ul className='paintingNav-menu'>
                <li className='paintingNav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >    
                    <p className='paintingNav-links'>
                        {Time} <FiChevronDown className='nav-icon'/>
                    </p>
                    {dropdown && <Dropdown MenuItems={TimelineItems} kind={2}/>}
                </li>
                <li className='paintingNav-item'
                    onMouseEnter={onMouseEnterRegion}
                    onMouseLeave={onMouseLeaveRegion}
                >
                    <p className='paintingNav-links'>
                        {Region} <FiChevronDown className='nav-icon'/>
                    </p>
                    {dropdownRegion && <Dropdown MenuItems={RegionItems} kind={2}/>}
                </li>
            </ul>
        </nav>
        </>
    )
}

export default PaintingNavbar;