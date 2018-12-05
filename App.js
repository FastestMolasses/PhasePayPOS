import {
    createAppContainer,
    createStackNavigator,
    StackActions,
    NavigationActions,
} from 'react-navigation';
import HomePage from './src/pages/HomePage';
import EnterTotal from './src/pages/EnterTotal';
import SendReceipt from './src/pages/SendReceipt';
import SelectCustomer from './src/pages/SelectCustomer';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage,
        },
        Enter: {
            screen: EnterTotal,
        },
        SelectCustomer: {
            screen: SelectCustomer,
        },
        Send: {
            screen: SendReceipt,
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
    },
);

export default createAppContainer(AppNavigator);
