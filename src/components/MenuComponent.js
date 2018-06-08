import React, { Component } from 'react';
import '../index.css';
import styled from 'styled-components';



const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
font-size: 30px;

`




class MenuComponent extends Component {
  render() {
    return (<div>
<Layout >

            <div class="menu1">Home</div>
            <div class="menu2">Contact</div>
            <div class="menu1">Resume</div>
            <div class="menu2">About</div>


</Layout>
            </div>
    );
  }
}


export default MenuComponent;
