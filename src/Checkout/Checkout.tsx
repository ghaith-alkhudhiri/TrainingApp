import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomRadioButton from '../Common/CustomRadioButton';
import ScreenWrapper from '../Layout/ScreenWrapper';

import ApplePayIcon from '../Assets/Images/applePay.png';
import STCPayIcon from '../Assets/Images/stcPay.png';
import madaIcon from '../Assets/Images/mada.png';

interface CheckoutState {
    selectedPaymentMethod: string;
}

export class Checkout extends Component<any, CheckoutState> {
    constructor(props: any){
        super(props);
        this.state = {
            selectedPaymentMethod: 'Option 1',
        };
    }

    handleCheckoutMethodSelect = (option: string) => {
        this.setState({ selectedPaymentMethod: option });
        Alert.alert('Selected Option', option);
        console.log('Selected Option', option);
    }

    render() {
        const { selectedPaymentMethod } = this.state;

        const paymentOptions = [
            {
                label: "Stc Pay",
                value: 'stc',
                icon: STCPayIcon
            },
            {
                label: "Apple Pay",
                value: 'apple',
                icon: ApplePayIcon,
            },
            {
                label: "Mada",
                value: "mada",
                icon: madaIcon
            }
        ];

        return (
        <ScreenWrapper title="Checkout" style={styles.container} floatingBtn floatingBtnProps={{label: "Pay with "}}>
            <View style={styles.container}>
                <Text style={styles.paymentMethodText}>Payment Method</Text>
                <CustomRadioButton
                    // label="Choose an option"
                    options={paymentOptions}
                    selectedOption={selectedPaymentMethod}
                    textStyle={styles.optionLabelText}
                    onOptionSelect={this.handleCheckoutMethodSelect}
                    layout="column" // Use 'row' for horizontal layout
                    optionStyle={{ justifyContent: 'space-between', flexDirection: "row-reverse" }}
                    selectedOptionStyle={{ borderColor: 'blue' }}
                    selectedTextStyle={{ color: '#0165FC' }}
                    radioColor="#0165FC"
                    selectedRadioColor="#0165FC"
                    />
            </View>
        </ScreenWrapper>
        )
    }
}

export default Checkout;

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    paymentMethodsContainer: {

    },
    optionLabelText: {
        color: '#000',
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: 14,
    },
    paymentMethodText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
    }
});