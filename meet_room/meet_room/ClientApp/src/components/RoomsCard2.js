import React, { Component } from 'react';
import './NavMenu.css';

export class RoomsCard2 extends Component {
  static displayName = RoomsCard2.name;


  render() {

    return (
        <div class="rooms_card2">
        <div class="rooms_card1_head">
            <div class="rooms_card1_head_text">
                Конференц-зал на Дзержинского
            </div>
        </div>
        <div class="rooms_card1_bottom">
            <div class="rooms_card1_bottom_adress">
                ст.м. Грушевка, пр. Дзержинского д.20
            </div>
            <div class="rooms_card1_bottom_price_and_worktime">
                <div class="rooms_card1_bottom_worktime">8:00 - 21:00</div>
                <div class="rooms_card1_bottom_price">55$</div>
            </div>
            <form>
                <input class="rooms_card1_bottom_button" type="submit" name="submit" value="Забронировать"></input>
            </form>
        </div>
    </div>
);
  }
}
