import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Slider } from 'react-native'
import { connect } from 'react-redux'
import { updateHeight } from '../Actions/ActionEvent'

class Height extends Component {
    constructor(props) {
        super(props)
    }

    updateHeight = (value) => {
        this.props.updateHeight(value)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heightText}>HEIGHT</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>
                        {this.props.calculatorData.height}
                </Text>
                    <Text style={styles.cmText}>
                        cm
                    </Text>
                </View>
                <Slider
                    style={{ width: "80%" }}
                    value={this.props.calculatorData.height}
                    onValueChange={value => this.updateHeight(value)}
                    maximumValue={220}
                    minimumValue={0}
                    maximumTrackTintColor="grey"
                    minimumTrackTintColor="white"
                    thumbTintColor="'rgba(227, 0, 68, 1)'"
                />
            </View>
        )

    }
}

const mapStateToProps = state => ({
    calculatorData: state.calculatorData
})

const mapDispatchToProps = dispatch => ({
    updateHeight: (value) => dispatch(updateHeight(value)),
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#151630",
        borderRadius: 6
    },
    valueContainer: {
        flexDirection: "row",
        alignItems: "baseline"
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
    cmText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        opacity: 0.5,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Height)