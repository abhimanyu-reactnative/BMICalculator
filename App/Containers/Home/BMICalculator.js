import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GenderCard from '../../Components/GenderCard'
import Height from '../../Components/Height'
import Weight from '../../Components/Weight'

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
                    <GenderCard isGenderMale={true}/>
                    <GenderCard/>
                </View>
                <View style={styles.heightContainer}>
                    <Height/>
                </View>
                <View style={styles.weightAndAgeContainer}>
                    <Weight isWeightComponent={true}/>
                    <Weight/>
                </View>
                <View style={styles.bottomButton}>
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
        flex: 0.8,
        marginBottom: 20,
    },
    weightAndAgeContainer: {
        flex: 0.8,
        marginBottom: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom: 40
    },
    bottomButton: {
        height: 60,
        backgroundColor: 'rgba(227, 0, 68, 1)',
        bottom: 0,
        left: 0,
        right: 0,
        position: "absolute"
    }
})

export default BMICalculator