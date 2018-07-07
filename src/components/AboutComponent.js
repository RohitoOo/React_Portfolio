import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import {ProgressBar} from 'react-bootstrap';
import {} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const now = 37;

const progressInstance = <ProgressBar now={now} label={`${now}%`}/>;

const Text = styled.p `

background: #8888;
color : black;
font-family: fantasy;
font-size: 20px;
border-radius: 20px;
padding: 20px;

`

class AboutComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div>
      {progressInstance}
      <Text >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate fugiat modi, repudiandae fugit magni, aut recusandae quia sit corrupti, obcaecati itaque cupiditate neque facere tempore eligendi odit non numquam delectus.
      </Text>
    </div>);
  }
}

export default AboutComponent;
