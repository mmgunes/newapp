// npm i react-navigation
// npm i react-native-screens --save
//  npm i react-navigation-stack --save
//   npm i react-navigation-drawer --save Yandan açılır menü
//npm i react-navigation-tabs --save  alttan
//npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export class NavigationApp extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity>
            <Text>Değiştir</Text>
          </TouchableOpacity>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'blue'}}></View>
          <View style={{height: 100, backgroundColor: 'black'}}></View>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'blue'}}></View>
          <View style={{height: 100, backgroundColor: 'black'}}></View>
          <View style={{height: 100, backgroundColor: 'yellow'}}></View>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export class DetailApp extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity>
            <Text>Değiştir</Text>
          </TouchableOpacity>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'blue'}}></View>
          <View style={{height: 100, backgroundColor: 'black'}}></View>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'blue'}}></View>
          <View style={{height: 100, backgroundColor: 'black'}}></View>
          <View style={{height: 100, backgroundColor: 'yellow'}}></View>
          <View style={{height: 100, backgroundColor: 'red'}}></View>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const AppNavigator = createStackNavigator({
  Anasayfa: {
    screen: NavigationApp,
  },
});

export default createAppContainer(AppNavigator);
