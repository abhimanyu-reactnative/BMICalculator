import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppBackground from '../../Components/AppBackground'
import BMICalculator from './BMICalculator'
let menuImage = require('../../assets/menu.png')

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <AppBackground>
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Image style={{ width: 20, height: 20 }} source={menuImage} />
                        <View style={{flex:1, justifyContent:"center", alignItems: "center"}}>
                            <Text style={styles.topBarText} >BMI CALCULATOR</Text>
                        </View>
                    </View>
                    <BMICalculator />
                </View>
            </AppBackground>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    topBar: {
        height: 64,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20
    },
    topBarText: {
        fontWeight: "bold",
        color: "white",

    },
    elementsContainer: {
        padding: 20,
        flex: 1,
        width: "100%"
    },
    boxContainer: {
        flex: 1,
        backgroundColor: "red",
        marginBottom: 20
    }
})

export default Home