import React, {Component} from 'react';
import {FlatList,
        StyleSheet,
        Text,
        View,
        Image,
        TouchableOpacity,
        Button,
        NativeAppEventEmitter,
        NativeEventEmitter,
        PermissionsAndroid,
        NativeModules,
        AppState,
        Platform
        } from 'react-native';
// import BleManager from 'react-native-ble-manager';

// const BleManagerModule = NativeModules.BleManager;
// const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class FindCustomer extends Component {

    constructor(props){
        super(props)
        // this.state = { customerSelected: false,
        //                customer: null,
        //                scanning: false,
        //                appState: '',
        //                peripherals: new Map() };
    }

    componentDidMount(){
        // this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);

        // AppState.addEventListener('change', this.handleAppStateChange);

        // BleManager.start({showAlert: false}).then(() => {console.log('Module initialized');});

        // this.handlerDiscover = bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', this.handleDiscoverPeripheral );
        // // this.handlerStop = bleManagerEmitter.addListener('BleManagerStopScan', this.handleStopScan );
        // // this.handlerDisconnect = bleManagerEmitter.addListener('BleManagerDisconnectPeripheral', this.handleDisconnectedPeripheral );
        // // this.handlerUpdate = bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', this.handleUpdateValueForCharacteristic );

        // if (Platform.OS === 'android' && Platform.Version >= 23) {
        //     PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        //         if (result) {
        //           console.log("Permission is OK");
        //         } else {
        //           PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        //             if (result) {
        //               console.log("User accept");
        //             } else {
        //               console.log("User refuse");
        //             }
        //           });
        //         }
        //   });
        // }

        // if (!this.state.scanning) {
        //     this.setState({peripherals: new Map()});
        //     BleManager.scan([], 5, true).then((results) => {
        //       console.log('Scanning...');
        //       console.log(results)
        //       this.setState({scanning: true});
        //     //   this.setState({peripherals: results});
        //     });
        // }
    }

    // handleDiscoverPeripheral(peripheral) {
    //     console.log(peripheral);
    //     var peripherals = this.state.peripherals;
    //     if (!peripherals.has(peripheral.id)){
    //       console.log('Got ble peripheral', peripheral);
    //       peripherals.set(peripheral.id, peripheral);
    //     }
    //   }

    //   handleAppStateChange(nextAppState) {
    //     // if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    //     //   console.log('App has come to the foreground!')
    //     //   BleManager.getConnectedPeripherals([]).then((peripheralsArray) => {
    //     //     console.log('Connected peripherals: ' + peripheralsArray.length);
    //     //   });
    //     // }
    //     this.setState({appState: nextAppState});
    //   }

    render() {
        return(
            <View>
                <Text style={styles.text}>Send Receipt</Text>

                {/* <FlatList
                    data={this.state.peripherals}
                    renderItem={({item}) =>
                        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate('Home')}>
                            <Image source={require('../imgs/macaroons.jpg')} style={styles.itemImages} />
                            <Text>{item.key}</Text>
                        </TouchableOpacity>}
                /> */}
            </View>
        );
    }
}

// class Person extends Componet {
//     render() {
//         return(

//         );
//     }
// }

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        // fontFamily: 'Impact, Charcoal, sans-serif',
        textAlign: 'center',
        // marginBottom: 10,
        marginTop: 10
    },
    item: {
        padding: 5,
        margin: 5,
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100
    },
    itemImages: {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    },
});