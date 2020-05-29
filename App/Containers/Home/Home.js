import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppBackground from '../../Components/AppBackground'
import BMICalculator from './BMICalculator'
import NavigationBar from '../../Components/NavigationBar'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBackground>
                <View style={styles.container}>
                    <NavigationBar/>
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