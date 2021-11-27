import React from 'react';
//css
import './navbar.css';
//constants
import { TITLE } from 'constants/mainConstants'

const Navbar = () => {
return (
        <div className='navbar-container'>
            <nav class="navbar navbar-main navbar-light">
                <div class="container-fluid">
                    <img class="navbar-brand" src={TITLE}/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
