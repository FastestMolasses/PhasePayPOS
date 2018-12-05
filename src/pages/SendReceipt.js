import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default class SendReceipt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                storeName: '',
                spent: '',
                source: '',
            },
        };
    }

    ask = (endpoint, data, cb) => {
        const myRequest = new Request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        fetch(myRequest)
            .then(function(response) {
                return response.blob();
            })
            .then(function(err, response) {
                cb(null, response);
            })
            .catch(function(err) {
                cb(err);
            });
    };

    submit = () => {
        this.ask('http://127.0.0.1:5000/send_order', this.state.data, function(
            err,
            result,
        ) {
            if (err) return console.log(err);
            console.log(result);
        });
        // Return to the first screen
        this.props.navigation.popToTop();
    };

    componentDidMount() {
        var total = this.props.navigation.getParam('total', '0.00');
        this.setState({
            data: {
                storeName: "McDonald's",
                spent: total,
            },
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Verify Order</Text>
                <Text style={styles.text1}>
                    Total: ${this.props.navigation.getParam('total', '0.00')}
                </Text>
                <TouchableOpacity
                    onPress={() => this.submit()}
                    style={styles.button}
                >
                    <Text>Submit</Text>
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
        marginTop: 50,
    },
    text1: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#72D6F7',
        marginLeft: 100,
        marginRight: 100,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
});
