import React from 'react';
import Placeholder from "../placeholder.jpg";


const HeaderImage = () => {

    return (
        <div className="HeaderDiv">
            <img className="HeaderImage" src={Placeholder} alt="HeaderImage"/>
        </div>
    )
};

export default HeaderImage