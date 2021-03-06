import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MenuComponent from './components/MenuComponent';
import WrapperComponent from './components/WrapperComponent';
import BodyComponent from './components/BodyComponent'
import styled from 'styled-components';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProjectsComponent from './components/ProjectsComponent'
import ResumeComponent from './components/ResumeComponent'
import AboutComponent from './components/AboutComponent'

const Layout = styled.div `

display: grid;
grid-template-columns: 100%

`

export default class App extends Component {
  render() {
    return (<div className="App">

      <BrowserRouter>
        <WrapperComponent>

            <MenuComponent/>
            <Switch>
              <Route exact="exact" path='/' component={BodyComponent} />
              <Route path='/projects' render={() => {
                  return <ProjectsComponent/>
                }}/>
              <Route path='/resume' render={() => {
                  return <ResumeComponent/>
                }}/>
              <Route path='/about' render={() => {
                  return <AboutComponent/>
                }}/>
            </Switch>

        </WrapperComponent>
      </BrowserRouter>
    </div>)
  }
}
