import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Heading from "./Heading"
import Input from "./Input";
import { MESSAGES } from "../constants/constant";
import { COLOR } from "../constants/color";

export default class Signup extends Component {
    render() {
        return (
            <View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: "column",
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
        width: null,
        height: null,
    },
    headingContainer: {
        width: "100%",
        flex:1,
    },
    heading: {
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: "column",
        flex:1,
    },
    input: {
        justifyContent: "center",
        paddingHorizontal: 8,
        marginVertical: 10,
    }
})