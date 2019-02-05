import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { COLOR } from "../constants/color";
import { MESSAGES } from "../constants/constant";

export default class Heading extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.heading}> {this.props.headingText} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading: {
        color: COLOR.headingText,
        fontFamily: "Cochin",
        fontWeight: "bold",
        fontSize: 40
    },
    container:{
        padding: 10,
        marginHorizontal: 8,
    }
});