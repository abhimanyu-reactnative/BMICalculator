import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

class GenderCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
               
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 0.49,
        alignItems: "center",
        backgroundColor: "#232338",
        borderRadius: 6
    },
})

export default GenderCard