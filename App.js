import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import ItemList from './ItemList';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      data: [],
    };
  }

  handleSave = () => {
    const {text, data} = this.state;
    data.push({text});
    this.setState({data: data, text: ''});
    // console.log(this.state.data)
  };

  render() {
    const {text, data} = this.state;

    return (
      <ScrollView style={{flex: 1, paddingTop: 30}}>
        <View style={style.title}>
          <Text style={style.title_text}>To-Do APPLİCATİON</Text>
        </View>
        <View
          style={{backgroundColor: '#ccc', padding: 10, flexDirection: 'row'}}>
          <TextInput
            value={text}
            onChangeText={yazi => {
              this.setState({text: yazi});
            }}
            style={style.txt_input}
          />
          <TouchableOpacity onPress={this.handleSave} style={style.button}>
            <Text style={style.title_text}>Ekle</Text>
          </TouchableOpacity>
        </View>
        <View>
          {data.map((item) => {
            return (<ItemList text={item.text}/>)
          })
          }
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  title: {backgroundColor: 'blue', padding: 10},
  title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt_input: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginLeft: 10,
  },
});
