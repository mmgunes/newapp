import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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
