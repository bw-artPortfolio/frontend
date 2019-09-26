import React from 'react';
import '../App.css';
import HeaderImage from './HeaderImage';

const Header = () => {
  return (
    <div>
      <div className='Header'>
        <nav className='Nav'>
          <div>
            <input
              className='search-bar'
              type='text'
              placeholder='Search...'></input>
          </div>
          {/* <a href='#' className='Search'>
            Search
          </a> */}
          <div className='HeadingText'>
            <h1>ARTFOLIO</h1>
          </div>

          <div className='nav-bar'>
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
            <a href='#' id='login'>
              Log in
            </a>
          </div>
        </nav>
      </div>
      <HeaderImage />
    </div>
  );
};

export default Header;
