import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          Navbar
        </a>
        <span className="badge bg-primary">{props.productsCount}</span>
      </div>
    </nav>
  );
};

export default NavBar;
