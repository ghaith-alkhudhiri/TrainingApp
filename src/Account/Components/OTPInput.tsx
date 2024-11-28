import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React, { Component, RefObject, createRef } from 'react'

interface Props extends TextInputProps {
    digitCount: number;
    onOTPChange: (otp: string) => void;
    containerStyle?:StyleProp<ViewStyle>;
    inputStyle?:StyleProp<ViewStyle>;
    filledInputStyle?:StyleProp<ViewStyle>;
}

interface State {
    otp: string[];
}

export class OTPInput extends Component<Props, State> {
    private inputRefs: RefObject<TextInput>[];

    constructor(props: Props){
        super(props);
        this.state = {
            otp: Array(this.props.digitCount).fill(''),
        };
        this.inputRefs = Array(this.props.digitCount)
        .fill(0)
        .map((_, i) => createRef<TextInput>());
    }

    focusInput(index: number): void {
        if (index > 0) {
          this.inputRefs[index - 1].current?.focus();
        }
    }
    
    handleInputChange = (text: string, index: number): void => {
        const newOTP = [...this.state.otp];
        newOTP[index] = text;
        // console.log("New OTP", newOTP);
        this.setState({ otp: newOTP }, () => {
            if (text.length === 1 && index < this.props.digitCount - 1) {
                const nextIndex = index + 1;
                if (this.inputRefs[nextIndex].current) {
                    this.inputRefs[nextIndex].current?.focus();
                }
            } else if (text.length === 0 && index > 0) {
                const prevIndex = index - 1;
                if (this.inputRefs[prevIndex].current) {
                    this.inputRefs[prevIndex].current?.focus();
                }
            }
            const otpString = newOTP.join('');
            this.props.onOTPChange(otpString);
        });
    };

    render() {
        const {containerStyle, inputStyle, filledInputStyle, ...textInputProps}= this.props;
        return (
                <View style={[styles.container]}>
                {this.state.otp.map((digit, index) => (
                <TextInput
                    key={index}
                    ref={this.inputRefs[index]}
                    style={[styles.input, digit ? filledInputStyle : inputStyle]}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(text) => this.handleInputChange(text, index)}
                    value={digit}
                    // {...textInputProps}
                />
                ))}
            </View>
        )
    }
}

export default OTPInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5,
        overflow: 'hidden',
        width: '100%',
    },
    input: {
        flex: 1,
        flexGrow: 1,
        // width: 45,
        // flexShrink: 10,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'gray',
        textAlign: 'center',
    },
})