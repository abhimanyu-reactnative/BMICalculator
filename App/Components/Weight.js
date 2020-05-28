import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { incrementWeight, decrementWeight, incrementAge, decrementAge } from '../Actions/ActionEvent'

class Weight extends Component {
    constructor(props) {
        super(props)
    }

    incrementWeight = () => {
        this.props.incrementWeight()
    }
    decrementWeight = () => {
        this.props.decrementWeight()
    }
    incrementAge = () => {
        this.props.incrementAge()
    }
    decrementAge = () => {
        this.props.decrementAge()
    }
    render() {
        let isWeightComponent = this.props.isWeightComponent
        let textValue = "AGE"
        if (isWeightComponent) {
            textValue = "WEIGHT"
        }
       // alert(JSON.stringify(this.props.calculatorData))
        return (
            <View style={styles.container}>
                <Text style={styles.heightText}>{textValue}</Text>

                <Text style={styles.valueText}>
                    {isWeightComponent ? this.props.calculatorData.weight : this.props.calculatorData.age}
                </Text>
                <View style={styles.controllerContainer}>
                    <TouchableOpacity onPress={isWeightComponent ? () => this.decrementWeight() : () => this.decrementAge()}>
                        <View style={styles.operator}>
                            <Text style={styles.operatorText}>-</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={isWeightComponent ? () => this.incrementWeight() : () => this.incrementAge()}>
                        <View style={styles.operator}>
                            <Text style={styles.operatorText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const mapStateToProps = state => ({
    calculatorData: state.calculatorData
})

const mapDispatchToProps = dispatch => ({
    incrementWeight: () => dispatch(incrementWeight()),
    decrementWeight: () => dispatch(decrementWeight()),
    incrementAge: () => dispatch(incrementAge()),
    decrementAge: () => dispatch(decrementAge()),
})

const styles = StyleSheet.create({
    container: {
        flex: 0.49,
        alignItems: "center",
        backgroundColor: "#151630",
        borderRadius: 6,
        justifyContent: "center"
    },
    valueText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 50
    },
    heightText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        opacity: 0.5,
        paddingTop: 30,
        paddingBottom: 6
    },
    controllerContainer: {
        flex: 1,
        flexDirection: "row"
    },
    operator: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        backgroundColor: "#222338"

    },
    operatorText: {
        color: "white",
        fontSize: 30,
        alignSelf: "center",
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Weight)