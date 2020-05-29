import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { updateGender } from '../Actions/ActionEvent'
let maleImage = require('../assets/male.png')
let femaleImage = require('../assets/female.png')

class GenderCard extends Component {
    constructor(props) {
        super(props)
    }

    updateGender = (isGenderMale) => {
        //alert(isGenderMale)
        this.props.updateGender(isGenderMale)
    }

    render() {
        const { gender, selectedGender } = this.props;
        let imageSource = maleImage
        if (gender !== "Male") {
            imageSource = femaleImage
        }
        const containerStyle = [
            styles.container,
            selectedGender == gender
                ? styles.containerEnabled
                : styles.containerDisabled
        ];

        return (
            <TouchableOpacity onPress={() => this.updateGender(gender)} style={styles.container}>
                <View style={containerStyle}>
                    <Image source={imageSource} style={styles.imageContainer} />
                    <Text style={styles.genderText}>{gender}</Text>
                </View>
            </TouchableOpacity>
        )

    }

}


const mapDispatchToProps = dispatch => ({
    updateGender: (value) => dispatch(updateGender(value)),
})

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
        paddingTop: 5,
        fontWeight: "bold"
    },
    containerEnabled: {
        opacity: 1
    },
    containerDisabled: {
        opacity: 0.5
    }
})

export default connect(null, mapDispatchToProps)(GenderCard)