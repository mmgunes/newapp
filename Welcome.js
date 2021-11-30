import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types'

export default class Welcome extends Component {
  render() {
    return (
      <View>
        <Text>ad {this.props.name} </Text>
        <Text>YAŞ {this.props.age} </Text>
   
      </View>
    );
  }
}

Welcome.propTypes = {
  name:PropTypes.string.isRequired,
  age:PropTypes.number
  };
//Eğer birşey gönderilmezse varsayılanları çeker
Welcome.defaultProps={
  name:'Ali Veli',
  age:33
}