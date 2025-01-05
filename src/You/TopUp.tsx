import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import { Image } from 'react-native';

interface Props {
    navigation: any;
}

class TopUp extends Component<Props> {
    state = {
        step: 1,
        selectedOption: null,
        amount: '',
    };

    handleOptionSelect = (option) => {
        this.setState({ step: 2, selectedOption: option });
    }

    handleAmountChange = (amount) => {
        this.setState({ amount });
    };

    handleGoBack = () => {
        this.setState({ step: 1, selectedOption: null, amount: ""});
    };

    render() {
        const { navigation } = this.props;
        const {step, selectedOption, amount} = this.state
        const paymentOptions = [
            {
                image: require("./../Assets/Images/applePay.png"),
                imageDimensions: {width: 34, height: 23},
                title: 'Apple pay',
                onPress: () => {
                    console.log("Applye Pay clicked");
                    navigation.navigate('AmountInput', { selectedOption: 'applePay' })
                },
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/benefit.png"),
                imageDimensions: {width: 35, height: 33},
                title: 'BenefitPay',
                onPress: () => {
                    console.log("benefit pay clicked");
                    navigation.navigate("AmountInput", { selectedOption: 'benefitPay'});
                },
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/stcPay2.png"),
                imageDimensions: {width: 34, height: 33},
                title: 'STC pay',
                onPress: () => {
                    console.log("STC Pay clicked");
                    navigation.navigate("AmountInput", { selectedOption: 'stcPay'});
                },
            },
            {
                // icon: <UserMinus />,
                image: require("./../Assets/Images/visa.png"),
                imageDimensions: { width: 29, height: 20},
                title: 'Bank Account',
                onPress: () => {
                    console.log("bank account clicked");
                    navigation.navigate("AmountInput", { selectedOption: 'visa'});
                },
            },
        ];
        return (
            <ScreenWrapper title="Topup">
                <View style={styles.container}>
                    <Text style={styles.questionText}>How would you like to add money to your E-card?</Text>
                    <View style={styles.paymentOptionsContainer}>
                        {paymentOptions.map((option, index) => (
                            <Pressable style={styles.listItem} key={index} onPress={option.onPress}>
                                {/* {option.icon && option.icon} */}
                                {option.image && (
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={option.image}
                                            style={[styles.image, option.imageDimensions]}
                                            resizeMode="cover"
                                        />
                                    </View>
                                )}
                                <Text style={styles.listItemTitle}>{option.title}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 17.5,
    },
    listItem: {
        borderRadius: 7,
        flexDirection: 'row',
        gap: 23,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "#EBEBEB",
        backgroundColor: "#FFF",
        shadowColor: "rgba(98, 148, 253, 0.06)",
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 4,
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    image: {

    },
    paymentOptionsContainer: {
        flex: 1,
        width: '100%',
        gap: 10,
    },
    listItemTitle: {
        
    },
    imageContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TopUp;