import React from "react";
import "../App.css";
import HeaderImage from "./HeaderImage";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <div className="Header">
        <nav className="Nav">
          {/* Added an "input box" for the search. Definitely needs to be styled before we uncomment!  */}
          <input
            onChange={() => console.log("onChange")}
            // onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              placeholder: "Search...",
              margin: "0 auto",
              maxWidth: 200,
              maxHeight: 20
            }}
          />

          <div className="HeadingText">
            <strong>ARTFOLIO</strong>
          </div>
          <div className="About">
            {/*NavLinks set up, but they need to be styled.*/}
            {/* Tried to pass props via <Link> got it to work before, lost the code */}
            <div className="nav-bar">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/login" id="login">
                Login
              </NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              <NavLink to="/artists" id="artists">
                Artists
              </NavLink>
              <NavLink to="/cart" id="cart">
                Cart
              </NavLink>
            </div>
            {/* <a href='#' id='about'>
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
            </a> */}
          </div>
        </nav>
      </div>
      <HeaderImage />
    </div>
  );
};

export default Header;
