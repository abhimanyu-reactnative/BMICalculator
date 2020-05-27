import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppBackground from '../../Components/AppBackground'
import BMICalculator from './BMICalculator'

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
                        <Text style={styles.topBarText} >BMI CALCULATOR</Text>
                    </View>
                    <BMICalculator/>
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
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "#292b34"
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