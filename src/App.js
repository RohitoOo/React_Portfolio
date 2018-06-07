import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/homeComponent';
import WrapperComponent from './components/WrapperComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <WrapperComponent>

            <HomeComponent/>

        </WrapperComponent>

        Test

      </div>
    );
  }
}

export default App;
