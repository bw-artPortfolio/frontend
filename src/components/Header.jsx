import React from 'react';
import '../App.css';
import HeaderImage from './HeaderImage';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <nav className='Nav'>
          <div className='Search'>Search</div>
          <div className='HeadingText'>
            <strong>ARTFOLIO</strong>
          </div>
          <div className='About'>
            {/*connect with react router*/}
            <a href='#' id='about'>
              About
            </a>
            <a href='#' id='artists'>
              Artists
            </a>
            <a href='#' id='cart'>
              Cart
            </a>
          </div>
        </nav>
      </div>
      <HeaderImage />
    </div>
  );
};

export default Header;
