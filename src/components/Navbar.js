import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { RegionItems } from './dropDownLists/RegionItems'
import { TimelineItems } from './dropDownLists/TimelineItems'
import {BiListUl, BiWindowClose} from 'react-icons/bi';
import {FiChevronDown} from 'react-icons/fi'

function Navbar(){
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);
    const [dropdownRegion, setDropdownRegion] = useState(false);
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    };

    const onMouseEnterRegion = () => {
        if(window.innerWidth < 960){
            setDropdownRegion(false);
        }
        else{
            setDropdownRegion(true);
        }
    }

    const onMouseLeaveRegion = () => {
        if(window.innerWidth < 960){
            setDropdownRegion(false);
        }
        else{
            setDropdownRegion(false);
        }
    };

    return(
        <>
        <nav className='navbar'>
            <Link to='/fashion-history' className='navbar-logo'>
                FASHION HISTORY
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {click ? <BiListUl/> : <BiWindowClose/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/fashion-history' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    <p className='nav-links'>
                        Timeline <FiChevronDown className='nav-icon'/>
                    </p>
                    {dropdown && <Dropdown MenuItems={TimelineItems}/>}
                </li>
                <li className='nav-item'
                    onMouseEnter={onMouseEnterRegion}
                    onMouseLeave={onMouseLeaveRegion}>
                    <p className='nav-links'>
                        Region <FiChevronDown className='nav-icon'/>
                    </p>
                    {dropdownRegion && <Dropdown MenuItems={RegionItems}/>}
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;