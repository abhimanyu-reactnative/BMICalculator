import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import AppBackground from '../../Components/AppBackground'

class BMIResult extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { calculatorData } = this.props
        let colorValue = "green"
        if(calculatorData.status === "NORMAL"){
            colorValue = "green"
        }
        else if(calculatorData.status === "OBESE"){
            colorValue = "red"
        }
        else if(calculatorData.status === "OVERWEIGHT"){
            colorValue = "orange"
        }else{
            colorValue = "blue"
        }
        const statusStyle = [[styles.statusText, {color: colorValue}]]
        return (
            <AppBackground>
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Text style={styles.topBarText} >BMI CALCULATOR</Text>
                    </View>
                    <View style={styles.resultContainer}>
                        <View style={styles.yourResultTextContainer}>
                            <Text style={styles.yourResultText}>Your Result</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={statusStyle}>{calculatorData.status}</Text>
                            <Text style={styles.valueText}>{(calculatorData.calculatedValue).toFixed(1)}</Text>
                            <View style={styles.bmiRangeContainer}>
                                <Text style={styles.bmiRangeText}>Normal BMI range:</Text>
                                <Text style={styles.bmiRangeValueText}>18.5 - 25 kg/m2</Text>
                            </View>
                            <View style={{ justifyContent: "center", paddingBottom: 30 }}>
                                <Text style={styles.messageText}>{calculatorData.message}</Text>
                            </View>
                            <TouchableOpacity style={styles.saveButton} onPress={()=>{alert("Result saved")}}>
                                <View style={styles.saveButton}>
                                    <Text style={styles.recalculateText}>SAVE RESULT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.bottomButton} onPress={() => this.props.navigation.navigate("Home")}>
                        <View style={styles.bottomButton}>
                            <Text style={styles.recalculateText}>RE-CALCULATE YOUR BMI</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </AppBackground>
        )
    }
}

const mapStateToProps = state => ({
    calculatorData: state.calculatorData
})


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
    yourResultTextContainer: {
        flex: 0.13,
        justifyContent: "flex-start",
        width: "100%"
    },
    yourResultText: {
        fontWeight: "bold",
        fontSize: 40,
        color: "white",
    },
    resultContainer: {
        flex: .9,
        width: "100%",
        padding: 30,

    },
    cardContainer: {
        backgroundColor: "#232338",
        flex: 1,
        borderRadius: 4,
        alignItems: "center",
        width: "100%"
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
    statusText: {
        fontSize: 16,
        color: "green",
        fontWeight: "bold",
        paddingTop: 30
    },
    valueText: {
        fontSize: 80,
        color: "#FFFFFF",
        fontWeight: "bold",
        padding: 10
    },
    messageText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        padding: 30,
        alignItems: "center",
        textAlign: "center"
    },
    bmiRangeText: {
        fontSize: 16,
        color: "'rgba(114, 114, 126, 1)",
        fontWeight: "bold",
        padding: 6

    },
    bmiRangeValueText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
    },
    bmiRangeContainer: {
        padding: 20,
        alignItems: "center"
    },
    recalculateText: {
        fontSize: 16,
        color: "white"
    },
    saveButton: {
        width: "60%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#101126",
    }
})

export default connect(mapStateToProps)(BMIResult)