import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

export default class SelectCustomer extends React.Component
{
    goToConfirm = () =>
    {
        this.props.navigation.navigate('Send', {
            total: this.state.total,
        })
    }

    componentDidMount() {
        var total = this.props.navigation.getParam('total', '$0.00');
        this.setState({total: total});
    }

    render()
    {
        return (
            <View style={styles.container}>
                <Text style={styles.titleText}>Select Customer</Text>
                <TouchableOpacity style={styles.profileContainer} onPress={this.goToConfirm}>
                    <Image
                        source={require('../imgs/ProfilePic.png')}
                        style={styles.profileImage}
                    />
                    <Text style={styles.profileText}>Abe M.</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 22,
    },
    profileContainer: {
        padding: 15,
        alignItems: 'center',
    },
    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
    },
    profileText: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: 'bold',
    }
});
