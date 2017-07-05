import React, { Component } from 'react'
import Header from './Header'
class EmptyLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default EmptyLayout
