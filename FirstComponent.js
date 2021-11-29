import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
/*
const FirstComponent = ({adProp, textProp, degistirFonkProp}) => {
  return (
    <View>
      <Text>
        Prop kullan {adProp} ve {textProp} diğer sayfadan geldi
      </Text>
      <TouchableOpacity onPress={degistirFonkProp} style={{margin:15,alignItems:'center' ,borderColor:'green', borderRadius:30 ,borderWidth:1}}>
        <Text>Diğer Sayfadaki {degistirFonkProp} fonksiyonu kullanarak değiştir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstComponent;
*/

export default class FirstComponent extends Component {
  constructor() {
    super();
    this.state = {
      adres: 'İstanbul',
    };
  }

  adresDegistirFonk = ()=>{
      this.setState({adres:'Midyat'})
  }

  render() {
    //2.yol
    const {adProp, textProp, degistirFonkProp} = this.props;
    const {adres} = this.state;

    return (
      <View>
        <Text>
          Prop kullan {this.props.adProp} ve {this.props.textProp} diğer
          sayfadan geldi
        </Text>
        <Text> 2.yol yazım şekli ** {adProp} ** {textProp}** {adres} yaz this.props yazmaya gerek yok</Text>
        <TouchableOpacity
         // onPress={this.props.degistirFonkProp}
         onPress={()=>{
            // this.setState({adres:'Mardin'});
            this.adresDegistirFonk();
             degistirFonkProp();
         }}
          style={{
            margin: 15,
            alignItems: 'center',
            borderColor: 'green',
            borderRadius: 30,
            borderWidth: 1,
          }}>
          <Text>Diğer Sayfadaki fonksiyonu kullanarak değiştir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
