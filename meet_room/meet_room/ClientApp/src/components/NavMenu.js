import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

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
          <NavbarBrand tag={Link} to="/" className="rooms_logo"></NavbarBrand>
          <NavbarBrand tag={Link} to="/" className="rooms_text1">Rooms</NavbarBrand>
          <NavbarBrand tag={Link} to="/" className="rooms_enter">UserName</NavbarBrand>
        </Navbar>
      </header>
    );
  }
}
