import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { HomePage } from '../../components/HomePage/HomePage';
import Layout from '../../hoc/Layout';



export class OSAC extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    )
  }
}

export default OSAC
