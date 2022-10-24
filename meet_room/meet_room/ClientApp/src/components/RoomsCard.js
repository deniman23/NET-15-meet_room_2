import React, { Component } from 'react';
import './NavMenu.css';

export class RoomsCard extends Component {


  render() {

    return (
        <div className="rooms_card1">
        <div className="rooms_card1_head">
            <div className="rooms_card1_head_text">
                {this.props.title}
            </div>
        </div>
        <div className="rooms_card1_bottom">
            <div className="rooms_card1_bottom_adress">
                {this.props.adress}
            </div>
            <div className="rooms_card1_bottom_price_and_worktime">
                <div className="rooms_card1_bottom_worktime">{this.props.time}</div>
                <div className="rooms_card1_bottom_price">{this.props.price}</div>
            </div>
            <form>
                <input className="rooms_card1_bottom_button" type="submit" name="submit" value="Забронировать"></input>
            </form>
        </div>
    </div>
);
  }
}
