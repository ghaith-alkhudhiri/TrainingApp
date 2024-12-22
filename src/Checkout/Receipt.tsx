import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import QRCode from 'react-native-qrcode-svg';
import LineDividier from '../Common/LineDivider';

interface Props {
    totalAmount: number;
    navigation: any;
}

interface State {
    windowWidth: number;
}

const receiptItems = [
    {label: "Date", value: "June 6, 2023" },
    {label: "Time", value: "10:00 AM - 11:00 AM" },
    {label: "Class", value: "Vinyasa Yoga"},
    {label: "Booking for", value: "Jan Doe - Self"},
];

class Receipt extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            windowWidth: Dimensions.get('window').width,
        };
    }

    componentDidMount(): void {
        Dimensions.addEventListener('change', this.handleDimensionsChange);
    }


    handleDimensionsChange = () => {
        const { width } = Dimensions.get('window');
        this.setState({ windowWidth: width });
    }

    navigateToHome = () => {
        const {navigation} = this.props;
        navigation.navigate('Main', {screen: 'Home'});
        console.log("Go to Home clicked");

    }

    render() {
        const { windowWidth } = this.state;
        return (
            <ScreenWrapper title="E-Receipt" floatingBtn floatingBtnProps={{label: "Go To Home", onPress: this.navigateToHome}}>
                <View style={styles.container}>
                    <View style={styles.qrCodeContainer}>
                        <QRCode value="https://www.google.com" size={windowWidth * 0.5} />
                    </View>
                    <View style={styles.itemsContainer}>
                        {receiptItems.map((item, index) => (
                            <View key={index} style={styles.itemContainer}>
                                <Text style={styles.label}>{item.label}</Text>
                                <Text style={styles.value}>{item.value}</Text>
                            </View>
                        ))}
                        <LineDividier />
                        <View style={styles.itemContainer}>
                            <Text style={styles.label}>Amount</Text>
                            <Text style={styles.value}>200 SR</Text>
                        </View>
                    </View>
                </View>
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        gap: 41,
    },
    qrCodeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemsContainer: {
        gap: 12,
    },
    itemContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    label: {
        color: "#797979",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 18,
    },
    value: {
        color: "#000",
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 18,
    }
});

export default Receipt;