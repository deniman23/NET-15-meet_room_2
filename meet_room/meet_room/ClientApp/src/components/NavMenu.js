import React, { Component } from 'react';
import './NavMenu.css';
import logo from '../components/img/logo.svg'

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
        <div className="block_raw">
            <div className ="rooms_logo">
                <img src = {logo} width='60px' alt="logo"></img>
            </div>
            <div className="rooms_text1">
                Rooms
            </div>
            <div className="rooms_enter">
                UserName
            </div>
        </div>    
      </header>
    );
  }
}
