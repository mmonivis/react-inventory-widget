import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});
  // }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }


  render() {
    const temperature = this.state.temperature;
    return (
      <div>
      	<TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator;