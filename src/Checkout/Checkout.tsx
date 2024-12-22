import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomRadioButton from '../Common/CustomRadioButton';
import ScreenWrapper from '../Layout/ScreenWrapper';

import ApplePayIcon from '../Assets/Images/applePay.png';
import STCPayIcon from '../Assets/Images/stcPay.png';
import madaIcon from '../Assets/Images/mada.png';
import CheckoutSection from './CheckoutSection';
import CustomTextInput from '../Common/CustomTextInput';
import TicketIcon from '../Assets/Icons/TicketIcon';
import CheckoutItemsList from './CheckoutItemsList';

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

    navigateToSuccess  = () => {
        this.props.navigation.navigate('success', {
            title: "Payment Successful",
            description: "You have successfully Paid for your items",
            nextPage: "Receipt"
        });
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

        const paymentItems = [
            {
                count: 5,
                name: "PT Sessions",
                price: 200,
                currency: "SR"
            },
            {
                count: 1,
                name: "Hatha Yoga Class",
                price: 200,
                currency: "SR"
            },
            {
                count: 1,
                name: "Weight loss OTM",
                price: 200,
                currency: "SR"
            },
        ]

        return (
        <ScreenWrapper title="Checkout" style={styles.container} floatingBtn floatingBtnProps={{label: "Pay with ", onPress: this.navigateToSuccess }}>
            <View style={styles.container}>
                <CheckoutSection label='Payment Method'>
                    <CustomRadioButton
                        options={paymentOptions}
                        selectedOption={selectedPaymentMethod}
                        textStyle={styles.optionLabelText}
                        onOptionSelect={this.handleCheckoutMethodSelect}
                        layout="column" // Use 'row' for horizontal layout
                        optionStyle={{ justifyContent: 'space-between', flexDirection: "row-reverse" }}
                        selectedOptionStyle={{ borderColor: 'blue' }}
                        selectedTextStyle={{ color: '#000000' }}
                        radioColor="#0165FC"
                        selectedRadioColor="#0165FC"
                        />
                </CheckoutSection>
                <CheckoutSection label='Discount'>
                    <CustomTextInput placeholder='Enter Promo Code' icon={<TicketIcon />} placeholderTextColor='#64748B' />
                </CheckoutSection>
                <CheckoutSection label='Payment summary'>
                    <CheckoutItemsList items={paymentItems} discount={10} />
                </CheckoutSection>
            </View>
        </ScreenWrapper>
        )
    }
}

export default Checkout;

const styles = StyleSheet.create({
    container: {
        gap: 19
    },
    paymentMethodsContainer: {
        gap: 19
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
    },
    discountContainer: {
        gap: 19,
    }
});