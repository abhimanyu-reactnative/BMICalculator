import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import GenderCard from '../../Components/GenderCard'
import Height from '../../Components/Height'
import Weight from '../../Components/Weight'
import { connect } from 'react-redux'
import { calculateBMI } from '../../Actions/ActionEvent'
import { withNavigation } from 'react-navigation';

class BMICalculator extends Component {
    constructor(props) {
        super(props)
    }

    calculateBMI = (navigation) => {
        this.props.calculateBMI()
        setTimeout(function(){ navigation.navigate("BMIResult")}, 200);
        
    }

    render() {
        const { calculatorData } = this.props
        console.log(calculatorData.gender)
        return (
            <View style={styles.elementsContainer}>
                <View style={styles.genderContainer}>
                    <GenderCard gender="Male" selectedGender={calculatorData.gender} />
                    <GenderCard gender="Female" selectedGender={calculatorData.gender} />
                </View>
                <View style={styles.heightContainer}>
                    <Height />
                </View>
                <View style={styles.weightAndAgeContainer}>
                    <Weight isWeightComponent={true} />
                    <Weight />
                </View>
                <TouchableOpacity style={styles.bottomButton} onPress = {() => this.calculateBMI(this.props.navigation)}>
                    <View style={styles.bottomButton}>
                    <Text style={styles.recalculateText}>CALCULATE YOUR BMI</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    calculatorData: state.calculatorData
})

const mapDispatchToProps = dispatch => ({
    calculateBMI: () => dispatch(calculateBMI()),
})

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
        position: "absolute",
        alignItems: "center",
        justifyContent: "center"
    },
    recalculateText: {
        fontSize: 16,
        color: "white"
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BMICalculator))