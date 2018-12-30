import React from 'react'
import {
  Text,
  TouchableOpacity
} from 'react-native'

const BLUE_COLOR = '#007aff';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { text } = props;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: BLUE_COLOR,
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: BLUE_COLOR,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
}

export default Button
