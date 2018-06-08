import React, { Component } from 'react';
import '../index.css';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';





const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
font-size: 30px;

`

const Menu1 = styled.h1 `

background: ${props => props.color}
`



class MenuComponent extends Component {
  render() {
    return (<div>
<Layout >

            <Menu1  color="deepskyblue" class="menu1" ><Link to="/">Home</Link></Menu1>
            <Menu1 color="red"  class="menu2"><Link to="/projects"> Projects</Link></Menu1>
            <Menu1 color="maroon" class="menu1"><Link to="/resume">Resume</Link></Menu1>
            <Menu1 color="dodgerblue"class="menu2"><Link to="/about">About</Link></Menu1>


</Layout>
            </div>
    );
  }
}


export default MenuComponent;
