import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions,
} from 'react-navigation';
import HomePage from './src/pages/HomePage';
import EnterTotal from './src/pages/EnterTotal';
import SendReceipt from './src/pages/SendReceipt';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        Enter: {
            screen: EnterTotal,
        },
        Send: {
            screen: SendReceipt,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'float',
    },
);

export default createAppContainer(AppNavigator);
