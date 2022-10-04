import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import {RoomsCard1} from './RoomsCard1';
import {RoomsCard2} from './RoomsCard2';
import {RoomsCard3} from './RoomsCard3';
import {RoomsText} from './RoomsText';




export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
          <div class="rooms_body">
            <div class="rooms_column1">
              <RoomsText></RoomsText>
              <div class="rooms_cards">
                <RoomsCard1></RoomsCard1>
              </div>
            </div>
        </div>
        </Container>
      </div>
    );
  }
}
