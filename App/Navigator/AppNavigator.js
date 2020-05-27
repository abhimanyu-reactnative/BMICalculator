import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../Containers/Home/Home'



const stackNavigator = createStackNavigator({
    Home: {
        screen: Home
    }
},
    {
        initialRouteName: "Home",
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);


const AppNavigator = createAppContainer(stackNavigator);

export default AppNavigator