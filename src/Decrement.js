import React from 'react';

class Decrement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number
    }

    // Set the initial context (this) for each function.
    this.incrementNumber = this.incrementNumber.bind(this);
    this.decrementNumber = this.decrementNumber.bind(this);
  }

  incrementNumber() {
    this.setState( (state) => ({number: parseInt(state.number,10)+150}));
  }

  decrementNumber() {
    this.setState( (state) => {
      if( state.number <= 0) {
        return;
      }
      return {number: parseInt( state.number, 10) -150 };
    }); 
  }

  render() {
    return (
      <div className="decrement-container">
        <label className="num-label">{this.state.number}</label>
        <button onClick={this.incrementNumber}>Increment!</button>  
        <button onClick={this.decrementNumber}>Decrement!</button>
      </div>
    );
  }

  
}

export default Decrement;