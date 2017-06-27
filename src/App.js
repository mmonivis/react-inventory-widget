import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from 'FilterableProductTable';

class App extends Component {
    constructor(props){
        super(props)
        this.props = props;
}
  render() {
    return (
      <div className="App col-sm-6">

          <FilterableProductTable />

      </div>
    );
  }
}

export default App;
