import React, { Component, createContext } from 'react'
import {
  View,
  Text,
} from 'react-native'


export class Header extends Component {
  render() {
    const { viewStyle, header } = styles;
    const { headerText } = this.props;
    return (
      <View style={viewStyle}>
        <Text style={header}>{headerText}</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    posistion: 'ralative',
  },
  textStyle: {
    fontSize: 20,
  }
}

export default Header
