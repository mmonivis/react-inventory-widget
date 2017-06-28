import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import FilterableProductTable from 'FilterableProductTable';

// import Toggle from 'Toggle';

import MyForm from './MyForm';
import Calculator from './Calculator';
import BoilingVerdict from './BoilingVerdict';

class App extends Component {
    constructor(props){
        super(props)
        this.props = props;
}
  render() {
    return(
        <Calculator />
    )

    return(
      <MyForm />
    )
  }
}

export default App;
