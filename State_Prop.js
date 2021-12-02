import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FirstComponent from './FirstComponent';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Muhammed Güneş',
      year: 1992,
    };
  }

  degistirState = () => {
    this.setState(
      {
        name: 'Murat Murat',
        year: 1900,
      },
      () => {
        alert('State Güncellendi');
      },
    );
  };

  render() {
    //Burada tanımla aşağıda çağır
    const {name, year} = this.state;

    return (
      <View style={{flex: 1, paddingTop: 10}}>
        <Text>
          App Page {name} yıl {year}{' '}
        </Text>
        <TouchableOpacity
          //onPress={()=>alert('Tıklandım')}

          /* onPress={()=>{
          this.setState({
            name:'Ali Veli',
            year:2020
          })
        }}*/

          //Ayrı bir fonksiyonla çağırırken () parantezsiz çağır
          onPress={this.degistirState}
          style={{backgroundColor: 'yellow', height: 30, alignItems: 'center'}}>
          <Text> Tıkla Değiştir</Text>
        </TouchableOpacity>
        {/* <FirstComponent adProp={'MUHAMMED'} textProp={'HOŞGELDİN'} /> */}
        <FirstComponent adProp={name} textProp={year} degistirFonkProp={this.degistirState}/>
      </View>
    );
  }
}
