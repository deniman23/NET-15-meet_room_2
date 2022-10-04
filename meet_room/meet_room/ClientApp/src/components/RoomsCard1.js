import React, { Component } from 'react';
import './NavMenu.css';

export class RoomsCard1 extends Component {
  static displayName = RoomsCard1.name;


  render() {

    return (
        <div class="rooms_card1">
        <div class="rooms_card1_head">
            <div class="rooms_card1_head_text">
                Конференц-зал на Октябрьской
            </div>
        </div>
        <div class="rooms_card1_bottom">
            <div class="rooms_card1_bottom_adress">
                ст.м. Октябрьская, ул. Независимости д.38
            </div>
            <div class="rooms_card1_bottom_price_and_worktime">
                <div class="rooms_card1_bottom_worktime">8:00 - 22:00</div>
                <div class="rooms_card1_bottom_price">50$</div>
            </div>
            <form>
                <input class="rooms_card1_bottom_button" type="submit" name="submit" value="Забронировать"></input>
            </form>
        </div>
    </div>
);
  }
}
