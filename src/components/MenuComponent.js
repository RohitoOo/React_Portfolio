import React, {Component} from 'react';
import '../index.css';
import styled from 'styled-components';
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from 'react-router-dom';

import * as firebase from 'firebase';

const Layout = styled.div `
  display: grid;
  grid-template-columns: repeat(5, 20%);
font-size: 20px;
grid-column-gap: 5px;

`

const Menu1 = styled.h1 `

background: ${props => props.color}
border-radius: 60px;
color: black;

`

const StyledLink = styled(NavLink)`

text-decoration : none;
&:hover {color : black};

`

class MenuComponent extends Component {
  render() {
    return (<div>
      <Layout >

        <Menu1 className="activeClassName " color="white" class="menu1">
          <StyledLink to="/">My Story</StyledLink>
        </Menu1>
        <Menu1 className="activeClassName" color="white" class="menu2">
          <StyledLink to="/projects">
            Projects</StyledLink>
        </Menu1>
        <Menu1 className="activeClassName" color="white" class="menu1">
          <StyledLink to="/resume">Resume</StyledLink>
        </Menu1>
        <Menu1 className="activeClassName" color="white" class="menu2">
          <StyledLink to="/about">Skills</StyledLink>
        </Menu1>
        <Menu1 className="activeClassName" color="white" class="menu2">
          <StyledLink to="/about">Photos</StyledLink>
        </Menu1>
      

      </Layout>
    </div>);
  }
}

export default MenuComponent;
