import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';
import AmountInputComponent from './Components/AmountInputComponent';
import ScreenWrapper from '../Layout/ScreenWrapper';

interface Props {
    route: any;
    navigation: any;
}

class AmountInput extends Component<Props> {
    state = {
        amount: '',
    };

    handleAmountChange = (amount) => {
        this.setState({ amount });
    };

    handleSubmit = () => {
        const { amount } = this.state;
        Alert.alert("Amount Entered", `You entered: ${amount}`);
    }

    render() {
        const { route, navigation } = this.props;
        const { selectedOption } = route.params;
        const { amount } = this.state;

        return (
            <ScreenWrapper title={`Topup - ${selectedOption}`}>
                <AmountInputComponent  
                    label='Amount' 
                    value={this.state.amount} 
                    onChange={this.handleAmountChange} />
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    questionText: {
        color: "#000",
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 17.5,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginVertical: 10,
    },
    actions: {
        flexDirection: 'row',
        gap: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AmountInput;
