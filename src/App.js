import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import WrapperComponent from './components/WrapperComponent';
import BodyComponent from './components/BodyComponent'
import styled from 'styled-components';


const Layout = styled.div`

display: grid;
grid-template-columns: 100%

`


class App extends Component {
  render() {
    return (
      <div className="App">


        <WrapperComponent>
          <Layout>
              <MenuComponent/>

              <BodyComponent/>
          </Layout>
        </WrapperComponent>


      </div>
    );
  }
}

export default App;
