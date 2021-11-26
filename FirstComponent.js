import React from 'react'
import { View, Text } from 'react-native'

const FirstComponent = ({adProp,textProp}) => {
    return (
        <View>
            
            <Text>Prop kullan {adProp} ve {textProp}  diğer sayfadan geldi</Text>
        </View>
    )
}

export default FirstComponent
