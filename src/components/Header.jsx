import React from 'react';
import '../App.css';
import HeaderImage from './HeaderImage';
import {NavLink} from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logform from './LogForm';
import ShoppingCart from './ShoppingCart' ;
import Entry from './Entry';
import Signup from './SignForm';

const Header = () => {
  return (
    <Router>
    <div>
      <div className='Header'>
        <nav className='Nav'>
          <div>
            <input
              className='search-bar'
              type='text'
              placeholder='Search art'></input>
          </div>
          {/* <a href='#' className='Search'>
            Search
          </a> */}
          <div className='HeadingText'>
            <h1>ARTFOLIO</h1>
          </div>

          <div className='nav-bar'>
            {/*connect with react router*/}
            <Link id="home" to="/">Home</Link>
            <Link id="about" to="/artists">Artists</Link>
            <Link id="cart" to="/cart">Cart</Link>
            <Link id="login" to="/login">Log In</Link>
            <Link id="signup" to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>
        <Route path="/login/" component={Logform} />
        <Route path="/cart/" component={ShoppingCart} />
        <Route path="/artists/" component={Entry} />
        <Route path="/signup/" component={Signup} />

      <HeaderImage />
    </div>
    </Router>
  );
};

export default Header;
