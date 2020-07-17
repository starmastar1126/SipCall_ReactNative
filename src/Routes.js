import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SplashScreen from '../src/views/SplashScreen';
import ResultScreen from '../src/views/ResultScreen';
import HomeScreen from '../src/views/HomeScreen';
import CallingScreen from '../src/views/CallingScreen';
import PadScreen from '../src/views/PadScreen';

const AppNavigator = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    SplashScreen: {screen: SplashScreen},
    ResultScreen: {screen: ResultScreen},
    CallingScreen: {screen: CallingScreen},
    PadScreen: {screen: PadScreen},
},{
    initialRouteName: 'HomeScreen'
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;