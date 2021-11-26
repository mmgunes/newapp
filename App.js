import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FirstComponent from './FirstComponent';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 10}}>

        
        <Text>App Page  </Text>

        <FirstComponent adProp={"MUHAMMED"} textProp={"HOŞGELDİN"} />
      </View>
    );
  }
}
