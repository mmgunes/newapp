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
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import ImageKullan from './ImageKullan';

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
          <TouchableOpacity
            onPress={() => {this.props.navigation.openDrawer()}}>
            <Text>Değiştir</Text>
          </TouchableOpacity>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
          <View style={{height: 100, backgroundColor: 'yellow'}}></View>
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
export class DrawerPageApp extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('DetailApp')}>
            <Text>Değiştir</Text>
          </TouchableOpacity>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
          <View style={{height: 100, backgroundColor: 'green'}}></View>
          <View style={{height: 100, backgroundColor: 'yellow'}}></View>
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

const AnasayfaStack = createStackNavigator({
  AnasayfaStack: {
    screen: NavigationApp,
  },
});

const DetayStack = createStackNavigator({
  DetayStack: {
    screen: DetailApp,
  },
});
const DrawerPageStack = createStackNavigator({
  Drawer_Sayfasi: {
    screen: DrawerPageApp,
  },
});

//1.yöntem

//const AppNavigator = createStackNavigator({

//2.Yöntem
// const AppNavigator = createBottomTabNavigator({
//   Anasayfa: {
//     screen: NavigationApp,
//   },
//   Detay: {
//     screen: DetailApp,
//   },
//   Image: {
//     screen: ImageKullan,
//   },
// });

//3.Yöntem Stack Kullanarak

// const AppNavigator = createBottomTabNavigator({
//   Anasayfa: AnasayfaStack,
//   Detay: DetayStack,
//   Image: {
//     screen: ImageKullan,
//   },
// });

//4.Yöntem Stack Kullanarak

const AppNavigator = createDrawerNavigator({
  Anasayfa: {
    screen: AnasayfaStack
  },
  Detay: {
    screen: DetayStack
  },
  DrawerM: {
    screen: DrawerPageStack
  },
});

export default createAppContainer(AppNavigator);


/***
 

import React from "react";
import {View, Text, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";

import {LogBox} from 'react-native';
import {createBottomTabNavigator} from "react-navigation-tabs";

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

class HomeScreen extends React.Component {


    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate('DetailScreen')}>
                        onPress={() => this.props.navigation.openDrawer()}>
                        <Text>Değiştir</Text>
                    </TouchableOpacity>
                    <View
                        style={{height: 100, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View style={{height: 150, backgroundColor: 'red', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 180, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View style={{height: 50, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 250, backgroundColor: 'green', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

class DetailScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View
                        style={{height: 100, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 150, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 180, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View style={{height: 50, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 250, backgroundColor: 'green', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

class DrawerScreen extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Detail')} style={{height:30 , margin:10}}><Text>Detay Sayfası</Text></TouchableOpacity>
                    <View
                        style={{
                            height: 100,
                            backgroundColor: 'purple',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text>Home Screen</Text>
                    </View>
                    <View style={{
                        height: 150,
                        backgroundColor: 'purple',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{
                            height: 180,
                            backgroundColor: 'purple',
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                        <Text>Home Screen</Text>
                    </View>
                    <View style={{height: 50, backgroundColor: 'blue', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                    <View
                        style={{height: 250, backgroundColor: 'green', alignItems: "center", justifyContent: "center"}}>
                        <Text>Home Screen</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const DrawerStack = createStackNavigator({
    Drawer: {screen: DrawerScreen}
})
const HomeScreenStack = createStackNavigator({
    Drawer: {screen: DetailScreen}
})
const DetailStack = createStackNavigator({
    Drawer: {screen: HomeScreen}
})

const  AppBottomNavigator = createBottomTabNavigator({
    Home:HomeScreenStack,
    Detail:DetailStack,
})

const AppNavigator = createDrawerNavigator({
        Anasayfa: {
            screen: AppBottomNavigator
        },

        Detay: {
            screen: DetailScreen
        },
    }, {contentComponent: DrawerScreen}
);

export default createAppContainer(AppNavigator);
 */