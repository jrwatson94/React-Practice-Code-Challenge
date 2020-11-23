import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state ={
    sushis: [],
    money: 100,
    platesArray: [],
  }
  buySushi = (price,id) => {
    if (this.state.money >= price){
      this.setState({
        money: this.state.money - price,
        platesArray: this.state.platesArray.concat(id)
      })
    }
  }
  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      this.setState({sushis: sushis})
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} buySushi ={this.buySushi} money={this.state.money}/>
        <Table platesArray={this.state.platesArray} money={this.state.money}/>
      </div>
    );
  }
}

export default App;