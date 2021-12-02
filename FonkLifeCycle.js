import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native'
export default class FonkLifeCycle extends Component {
  constructor() {
    super();
    //1.sırada çalıştı
    console.log('Constructor Çalıştı');
  }

  componentDidMount() {
    console.log('Didmount Çalıştı');
  }

  componentDidUpdate() {
    console.log('Update Çalıştı');
  }

  shouldComponentDidUpdate() {
    console.log('Should  Çalıştı');
    return true;
  }

  componentWillUnmount() {
    console.log('Unmount Çalıştı');
  }

  render() {
     // 2.sırada çalıştı
    console.log('Render Çalıştı');
    return <TouchableOpacity><Text>Değiştir</Text></TouchableOpacity>;
  }
}
