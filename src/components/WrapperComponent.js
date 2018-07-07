import React, {Component} from 'react';
import styled from 'styled-components'

const Layout = styled.div `

// display: grid;
// grid-gap: 3px;
// grid-template-columns: repeat(12,1fr);
// grid-template-rows: 100px auto 100px ;
`
function WrapperComponent({children}) {
  return (<Layout>

    {children}

  </Layout>);

}

export default WrapperComponent;
