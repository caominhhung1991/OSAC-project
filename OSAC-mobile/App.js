import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
// http://rallycoding.herokuapp.com/api/music_albums


export default class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          headerText={'Auth'}
        />
        {/* <AlbumList 
          headerText={'album text!'}
        /> */}
        <Text>hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
