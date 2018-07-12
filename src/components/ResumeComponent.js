import React, {Component} from 'react';
import * as firebase from 'firebase';

class ResumeComponent extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('text');

    rootRef.on('value', snap => {
      this.setState({name: snap.val().name})
      console.log("snap", snap)

    });

  }

  render() {
    return (<div>Resume Component
      <br/> {this.state.name}</div>);
  }
}

export default ResumeComponent;
