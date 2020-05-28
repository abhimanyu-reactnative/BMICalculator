import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Slider } from 'react-native'

class Height extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heightText}>HEIGHT</Text>
                <View style={styles.valueContainer}>
                    <Text style={styles.valueText}>
                        {this.state.value}
                </Text>
                    <Text style={styles.cmText}>
                        cm
                    </Text>
                </View>
                <Slider
                    style={{ width: "80%" }}
                    value={this.state.value}
                    onValueChange={value => this.setState({ value: Math.round(value) })}
                    maximumValue={200}
                    minimumValue={0}
                    maximumTrackTintColor="grey"
                    minimumTrackTintColor="white"
                    thumbTintColor="'rgba(227, 0, 68, 1)'"
                />
            </View>
        )

    }

}

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

export default Height