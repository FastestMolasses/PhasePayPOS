import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button} from 'react-native';

export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = { total: 0 };
    }

    render() {
        return(
            <View>
                <Text style={styles.text}>Welcome</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Enter')} style={styles.button}>
                    <Text>New Transaction</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        // fontFamily: 'Impact, Charcoal, sans-serif',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 60
    },
    button: {
        backgroundColor: "#72D6F7",
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    }
});