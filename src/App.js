import React from 'react';
import Button from './Button'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="numbersContainer">
          <div class="row">
            <Button name="1" />
            <Button name="2" />
            <Button name="3" />
          </div>
          <div class="row">
            <Button name="4" />
            <Button name="5" />
            <Button name="6" /> 
          </div>
          <div class="row">
            <Button name="7" />
            <Button name="8" />
            <Button name="9" />
          </div>
          <Button name="0" />
        </div>
       
      </header>
    </div>
  );
}

export default App;
