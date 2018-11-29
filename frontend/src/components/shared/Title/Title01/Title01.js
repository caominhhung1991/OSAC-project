import React, { Component } from 'react'
import './Title01.scss'
import PropTypes from 'prop-types'

const propStyles = {
  title: PropTypes.string,
  dataAOS: PropTypes.bool,
}

export class Title01 extends Component {
  render() {

    let content = <div></div>;

    content = !!this.props.dataAOS ? (
      <div className="Title" data-aos={this.props.dataAOS}>
        <span className="Title__Line"></span>
        <span className="Title__Text">{this.props.title}</span>
      </div>
    ) :
      (<div className="Title" >
        <span className="Title__Line"></span>
        <span className="Title__Text">{this.props.title}</span>
      </div>)

    return (
      content
    )
  }
}

Title01.propStyles = propStyles

export default Title01
