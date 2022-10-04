import React, { Component } from 'react';
import './NavMenu.css';

export class RoomsText extends Component {
  static displayName = RoomsText.name;


  render() {

    return (
        <div class="rooms_text_page">
            Здесь вы можете выбрать пространства по вашему вкусу.
            Каждое пространство оборудовано со всеми удобствами.
        </div>
    );
  }
}
