import React, {Component} from 'react'

export default class WrapperComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
