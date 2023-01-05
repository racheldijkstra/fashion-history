import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'

function DropdownTimeline({MenuItems, kind}){
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    let menuKind = 'dropdown-menu'
    {kind === 2? menuKind = 'dropdown-menu-painting': menuKind = 'dropdown-menu'}

    return (
        <>
            <ul onClick={handleClick}
            className={menuKind}
            >
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link 
                                className={item.cName} 
                                to={item.path} 
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                            {index < Object.keys(MenuItems).length - 1? <div style={{ borderTop: "2px solid rgba(255, 255, 255, 0.5)", marginLeft: 18, marginRight: 18 }}></div> : null}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default DropdownTimeline;