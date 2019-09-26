import React from 'react';
import "./App.css";
import HeaderImage from './HeaderImage';



const Header = () => {
return (
    <div>
    <div className="Header">
        <nav className="Nav">
            <div className="Search">Search</div>
            <div className="HeadingText"><strong>ARTFOLIO</strong></div>
            <div className="About">
                <div id="about">About</div>
                <div id="artists">Artists</div>
                <div id="cart">Cart</div>
            </div>
    </nav>
    </div>
    <HeaderImage />
    </div>
)


}

export default Header