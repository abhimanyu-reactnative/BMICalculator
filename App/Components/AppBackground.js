import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

class AppBackground extends Component {
    render() {
      return(
            <SafeAreaView style={{flex:1, backgroundColor: "#101126"}}>
                {this.props.children}
            </SafeAreaView>
      )
    }
}
export default AppBackground;