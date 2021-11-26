import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      //Ekstra bir css uygulanacaksa köşeli[] parantazlerle yapılabilir
      <View style={[style.welcome_area], {backgroundColor:'blue'}}>
        <Text style={style.welcome_text}>Merhaba Muhammed Bey </Text>
      </View>
    )
  }
}

const style= StyleSheet.create({
  welcome_area:{padding:100, backgroundColor:'green'},
  welcome_text:{color:'white', fontSize:30}
})
