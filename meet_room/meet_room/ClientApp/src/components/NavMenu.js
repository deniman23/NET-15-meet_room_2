import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import "https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap";
import "https://fonts.googleapis.com/css2?family=Krona+One&display=swap";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {

    return (
      <header>
        <Navbar className="block_raw" container light>
          <NavbarBrand tag={Link} to="/" className="rooms_logo"><img src="../wwwroot/assets/images/logo.svg" width="60px" height="60px" alt="logo"></img></NavbarBrand>
          <NavbarBrand tag={Link} to="/" className="rooms_text1">Rooms</NavbarBrand>
          <NavbarBrand tag={Link} to="/" className="rooms_enter">UserName</NavbarBrand>
        </Navbar>
      </header>
    );
  }
}
