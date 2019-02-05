import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Heading from "./Heading"
import Input from "./Input";
import { MESSAGES } from "../constants"

export default class componentName extends Component {
    render() {
        return (
            <View>
                <Heading headingText={MESSAGES.signup} />
            </View>
        )
    }
}