import React from 'react'
import Ticker from './Ticker'
import './App.scss'

let axios = require('axios')
let url = "https://cors-anywhere.herokuapp.com/" + "https://api.coinmarketcap.com/v1/ticker/bitcoin/"


class App extends React.Component {
  constructor(){
    super()
    this.state ={
      currentPrice: "loading",
    }
    this.getPrice = this.getPrice.bind(this)
  }

  getPrice() {
    axios({
      method: 'get',
      url: url,
      headers: {'Origin': 'https://api.coinmarketcap.com'}
    }).then(response => this.setState({currentPrice: response.data[0].price_usd}))
  }


  componentDidMount(){
    this.getPrice()
    this.interval = setInterval(this.getPrice, 30000);
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
           <Ticker name={this.state.currentPrice} />
        </header>
      </div>
    );
  }
  
}

export default App;
