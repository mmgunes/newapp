import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      //Ekstra bir css uygulanacaksa köşeli[] parantazlerle yapılabilir
      /* <View style={[style.welcome_area], {backgroundColor:'blue', marginTop:80}}>
        <Text style={style.welcome_text}>Merhaba Muhammed Bey </Text>
      </View>*/
      <>
      <View style={[style.welcome_area, { flex:4, flexDirection: "column"}]}>
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 4, backgroundColor: "blue" }} />
      </View>
      <View style={[style.welcome_area, {flexDirection: "row-reverse"}]}>
        <View style={{ flex: 2, backgroundColor: "purple" }} />
        <View style={{ flex: 2, backgroundColor: "yellow" }} />
        <View style={{ flex: 6, backgroundColor: "green" }} />
      </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  welcome_area: {flex:1, backgroundColor: 'green'},
  welcome_text: {color: 'white', fontSize: 30},
});
