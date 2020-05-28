import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
let maleImage = require('../assets/male.png')
let femaleImage = require('../assets/female.png')

class GenderCard extends Component {
    constructor(props) {
        super(props)
    }

    updateGender = () => {
        alert("button clicked")
    }

    render() {
        let isGenderMale = this.props.isGenderMale
        let imageSource = maleImage
        let gender = "Male"
        if (!isGenderMale) {
            imageSource = femaleImage
            gender = "Female"
        }
        return (
            <TouchableOpacity onPress={() => this.updateGender()} style={styles.container}>
                <View style={styles.container}>
                    <Image source={imageSource} style={styles.imageContainer} />
                    <Text style={styles.genderText}>{gender}</Text>
                </View>
            </TouchableOpacity>
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
    imageContainer: {
        height: 100,
        width: 100
    },
    genderText: {
        fontSize: 20,
        color: "white",
        paddingTop: 20,
        fontWeight: "bold"
    }
})

export default GenderCard