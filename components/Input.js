import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { COLOR } from "../constants/color";

export default class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
        style = {styles.input}
        placeholder = {this.props.placeholder}
        onChangeText = {this.props.onChangeText}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
        height: 24,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLOR.borderColor      
    }
})