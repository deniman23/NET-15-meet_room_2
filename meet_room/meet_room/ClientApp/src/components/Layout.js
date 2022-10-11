import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {RoomsCard1} from './RoomsCard1';
import {RoomsCard2} from './RoomsCard2';
import {RoomsCard3} from './RoomsCard3';
import {RoomsText} from './RoomsText';
import { Footer } from './Footer';
import { PlusCard1 } from './PlusCard1';
import { PlusCard2 } from './PlusCard2';
import { PlusCard3 } from './PlusCard3';



export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
          <div className="rooms_body">
            <div className="rooms_column1">
              <RoomsText></RoomsText>
              <div className="rooms_cards">
                <RoomsCard1></RoomsCard1>
                <RoomsCard2></RoomsCard2>
                <RoomsCard3></RoomsCard3>
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
