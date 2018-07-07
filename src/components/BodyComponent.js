import React, {Component} from 'react';
import styled from 'styled-components';
import image from '../assets/gang.JPG'

const Layout = styled.div `
  display: grid;
  grid-template-columns: 1fr 2fr;
  font-family : fantasy;
  vertical-align: center;
  vertical-align: middle;
  font-weight: bold;
background : white;
`
const Text = styled.div `

margin-top:50%;
`

const Image = styled.img `
width: 100%;
    justify-self: end;
    border-radius: 2000px;
`

export class BodyComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<Layout>
      <Text >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <div>
        <Image src={image}/>
      </div>

    </Layout>);
  }
}

export default BodyComponent;
