import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react';
import AuthenticationManager from '../Managers/AuthenticationManager';
import OTPInput from './Components/OTPInput';

interface Props {
    navigate:  any;
    guideText: string;
    navigation: any;
}

interface State {
    verificationCode: string;
    isVerifying: boolean;
}

export class OTPVerification extends Component<Props, State> {
    constructor(props: any){
        super(props);
        this.state = {
            verificationCode: '',
            isVerifying: false,
        }
    }

    handleVerifyCode = async () => {
        if(this.state.isVerifying){
            return;
        }

        this.setState({isVerifying: true});
        try {
            const user = await AuthenticationManager.verifyCode(this.state.verificationCode);
            console.log("User signed in: ", user);
            this.props.navigation.navigate('success', {
                title: "Thank you!",
                description: "Thank you for joining our team! you will be directed to finishing creating account process",
                nextPage: "MainApp"
            });
        } catch (error) {
            console.error("Error verifying code: ", error);
        } finally {
            this.setState({isVerifying: false});
        }
    }

    handleVerificationCodeChange = (verificationCode: string) => {
        this.setState({ verificationCode });
    };

    handleOTPChange = (otp: string) => {
        this.setState({verificationCode: otp});
    }


  render() {
    console.log("Otp verification code", this.state.verificationCode);
    const {guideText} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>OTP Verification</Text>
        <Text>{guideText}</Text>
        <OTPInput digitCount={6} onOTPChange={this.handleOTPChange} filledInputStyle={styles.filledInput} />
        <Button title='Verify' onPress={this.handleVerifyCode} disabled={this.state.isVerifying} />
        {/* <CustomButton label='Verify' onPress={this.handleVerifyCode} /> */}
      </View>
    )
  }
}

export default OTPVerification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 10,
    },
    title: {
        color: '#1E232C',
        fontSize: 27,
        fontWeight: '600'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
    },
    filledInput: {
        borderColor: '#246BFD',
        borderWidth: 1,
    }
})