import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/Home/Home'
import BMIResult from '../Containers/Home/BMIResult'


const stackNavigator = createSwitchNavigator({
    Home: {
        screen: Home
    },
    BMIResult: {
        screen: BMIResult
    }
},
    {
        initialRouteName: "Home",
    }
);


const AppNavigator = createAppContainer(stackNavigator);

export default AppNavigator