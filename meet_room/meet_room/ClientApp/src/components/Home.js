import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {RoomsCard} from './RoomsCard';
import {RoomsCard2} from './RoomsCard2';
import {RoomsCard3} from './RoomsCard3';
import {RoomsText} from './RoomsText';
import { Footer } from './Footer';
import { PlusCard1 } from './PlusCard1';
import { PlusCard2 } from './PlusCard2';
import { PlusCard3 } from './PlusCard3';


export class Home extends Component {
  static displayName = Home.name;
  
  constructor(props) {
    super(props);
    this.state = { cards: [], loading: true };
  }

  componentDidMount() {
    var cards = this.fetchCards();

    this.setState({cards: cards,})
  }

  fetchCards(){
    var cards = fetch('/api/cards');

    return [
      {title: 'Конференц-зал на Октябрьской', address: 'ст.м. Октябрьская, ул. Независимости д.38', time: '8:00 - 22:00', price: '50$' },
      {title: 'Конференц-зал на Дзержинского', address: 'ст.м. Грушевка, пр. Дзержинского д.20', time: '8:00 - 21:00', price: '55$' },
      {title: 'Конференц-зал на Притыцкого', address: 'ст.м. Каменная горка, ул. Притыцкого д.40', time: '9:00 - 22:00', price: '45$' },
  ]
  }

  render() {
    return (
      <div>
        <Container>
          {this.props.children}
          <div className="rooms_body">
            <div className="rooms_column1">
              <RoomsText></RoomsText>
              <div className="rooms_cards">
              {this.state.cards.map((card, index) => {
            return <RoomsCard key={index} title = {card.title} adress = {card.address} time = {card.time} price = {card.price}/>;
            
          })}
              </div>
            </div>
            <div className="rooms_column2">
              Дополнительные услуги:
              <div className='extra'>
                <PlusCard1></PlusCard1>
                <PlusCard2></PlusCard2>
                <PlusCard3></PlusCard3>
              </div>
            </div>
            <Footer></Footer>
        </div>
        </Container>
      </div>
  );
  }
}
