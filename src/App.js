import React from 'react'
import Ticker from './Ticker'
import './App.scss'

let axios = require('axios')


class App extends React.Component {
  constructor(){
    super()
    this.state ={
      currentPrice: 0,
    }
    this.getPrice = this.getPrice.bind(this)
  }

  getPrice() {
    let url = "https://cors-anywhere.herokuapp.com/" + "https://api.nomics.com/v1/currencies/ticker?key=1cbb1eb31f0666dda3add45368c82618&ids=BTC&interval=1d,30d&convert=USD"
    axios({
      method: 'get',
      url: url,
      headers: {'Origin': 'https://api.nomics.com'}
    }).then(response => this.setState({currentPrice: response.data[0].price}))
  }


  componentDidMount(){
    this.interval = setInterval(this.getPrice, 100);
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
