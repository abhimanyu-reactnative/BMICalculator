import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GenderCard from '../../Components/GenderCard'

class BMICalculator extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.elementsContainer}>
                <View style={styles.genderContainer}>
                    <GenderCard/>
                    <GenderCard/>
                </View>
                <View style={styles.heightContainer}>

                </View>
                <View style={styles.weightAndAgeContainer}>

                </View>
            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    topBarText: {
        fontWeight: "bold",
        color: "white",

    },
    elementsContainer: {
        padding: 30,
        flex: 1,
        width: "100%"
    },
    boxContainer: {
        
    },
    genderContainer: {
        flex: 0.7,
        marginBottom: 20,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    heightContainer: {
        flex: 1,
        backgroundColor: "red",
        marginBottom: 20,
    },
    weightAndAgeContainer: {
        flex: 1,
        backgroundColor: "red",
        marginBottom: 20,
        justifyContent: "space-between",
        flexDirection: "row",
    }
})

export default BMICalculator