import React, { Component } from 'react';
import './NavMenu.css';

export class RoomsCard3 extends Component {
  static displayName = RoomsCard3.name;


  render() {

    return (
<div className="rooms_card3">
<div className="rooms_card1_head">
    <div className="rooms_card1_head_text">
        Конференц-зал на Притыцкого
    </div>
</div>
<div className="rooms_card1_bottom">
    <div className="rooms_card1_bottom_adress">
        ст.м. Каменная горка, ул. Притыцкого д.40
    </div>
    <div className="rooms_card1_bottom_price_and_worktime">
        <div className="rooms_card1_bottom_worktime">9:00 - 22:00</div>
        <div className="rooms_card1_bottom_price">45$</div>
    </div>
    <form>
        <input className="rooms_card1_bottom_button" type="submit" name="submit" value="Забронировать"></input>
    </form>
</div>
</div>
);
  }
}
