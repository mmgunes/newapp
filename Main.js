import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Welcome from './Welcome';



export default class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>İndex</Text>
        {/* Eğer birşey gönderilmezse varsayılanları çeker*/}
        <Welcome /> 
        <Welcome name={'Mehmet ALi'} age={25}/>
      </SafeAreaView>
    );
  }
}

