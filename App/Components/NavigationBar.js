import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
let menuImage = require('../assets/menu.png')

class NavigationBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.topBar}>           
                <Image style={{ width: 20, height: 20 }} source={menuImage} />
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.topBarText} >BMI CALCULATOR</Text>
                </View>               
            </View>
        )
    }


}

const styles = StyleSheet.create({
    topBar: {
        height: 64,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
        overflow: 'hidden', 
        paddingBottom: 5
    },
    topBarText: {
        fontWeight: "bold",
        color: "white",

    }
})

export default NavigationBar