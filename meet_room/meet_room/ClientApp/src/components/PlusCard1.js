import React, { Component } from 'react';
import './NavMenu.css';


export class PlusCard1 extends Component {
  static displayName = PlusCard1.name;

  

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    
  }

  incrementCounter(e) {
      e.preventDefault();
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }
  decrementCounter(e){
      e.preventDefault();
      this.setState({
          currentCount: this.state.currentCount - 1
      });
  }


  render() {

    return (
            <div className='extra1'>
                <div className='extra_text'>Стулья: <div>{this.state.currentCount}</div></div>
                <div className='extra_button'>
                    <form>
                        <button className='extra_button_plus' onClick={this.incrementCounter}>+</button>
                        <button className='extra_button_minus' onClick={this.decrementCounter}>-</button>
                    </form>
                </div>
            </div>
);
  }
}
