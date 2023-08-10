import React from "react";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNav className="navbar">
      <Link to="/" className="logoLink">
        <img
          src={("/leapicon.png")}
          className="navbar-logo"
          alt="logo"
      
          
        />
      </Link>
      <div className="nav-right">
        <ul className="nav-items">
          <Link to="/" className="link">
            <li className="nav-links">Home</li>
          </Link>

          <Link to="/houses" className="link">
            <li className="nav-links">Property</li>
          </Link>
          <Link to="/" className="link">
            <li className="nav-links">About us</li>
          </Link>
          <Link to="/agents" className="link">
            <li className="nav-links">Agents</li>
          </Link>
          <Link to="/" className="link">
            <li className="nav-links">Contact us</li>
          </Link>
          <li>
            <GoSearch className="link search" />
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 12;
  /* background-color: #060129; */
  background-color: #50C878;

  padding: 8px 10px;


  .nav-right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    list-style: none;
  }
  .nav-links {
    position: relative;
    font-size: 18px;
  }
  .link {
    text-decoration: none;
    font-size: 12.5px;
    font-weight: 500;
    line-height: 0.9;
    font-family: "inter", "sans-serif";
    margin-right: 25px;
   color: white;
  }
  .nav-links::after {
    content: "";
    position: absolute;
    top: 18px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: orangered;
    transition: 0.5s;
    display: none;
    cursor: pointer;
  }

  .nav-links:hover::after {
    display: block;
  }

  .navbar-logo {
    height: 140px;
    width: 350px;
    border-radius: 50%;
    display: block;
    border: 1px solid red;
  }

  .search {
    font-size: 1.5rem;
  }
  .search:hover {
    transform: scale(1.2);
  }
`;
