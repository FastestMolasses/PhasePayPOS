import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class EnterTotal extends Component {
    constructor(props) {
        super(props);
        this.state = { total: 0 };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.enterData}>
                    <Text style={styles.text}>Enter Total:</Text>
                    <TextInput
                        placeholder="$0.00"
                        style={styles.text}
                        onChangeText={total => this.setState({ total })}
                    />
                </View>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('SelectCustomer', {
                            total: '$' + this.state.total,
                        })
                    }
                    style={styles.button}
                >
                    <Text>Enter</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
    enterData: {
        margin: 50,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#72D6F7',
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
});
