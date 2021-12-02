
import React, { Component } from 'react';
import { Text,AppRegistry, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 150,
    height: 158,
    borderRadius:100
  },
});

class DisplayAnImage extends Component {
  render() {
    return (
      <View style={styles.container}>
 
        <Image
          style={styles.tinyLogo}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Image
          style={styles.logo}
          source={{uri: 'https://www.mertbuldur.com/public/1.jpg'}}
        />
        <Text style={{fontSize:22, textAlign:'center', color:'purple'}}>Servet Bilicier</Text>
      </View>
    );
  }
}

export default DisplayAnImage;