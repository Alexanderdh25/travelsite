import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa";


function Nav() {
    return (
        <div className="nav">
            <span className='navIcon'> <FaGlobeAmericas/> </span>
            <p className='navTitle'>My travel journal</p>
        </div>
    )
}

export default Nav;