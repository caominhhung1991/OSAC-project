import React, { Component } from 'react';
import Aux from './_Aux';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <main>
        {/* <main> */}
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;