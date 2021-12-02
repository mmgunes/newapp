import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ItemList = ({text}) => {
    return (
        <View style={style.card}>
            <Text>{text}</Text>
        </View>
    )
}



export default ItemList


const style = StyleSheet.create({
    card:{padding:10, backgroundColor:'#ddd', margin:5}
})