import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'
import PhoneInput from 'react-native-phone-input'

interface MobileNumberInputState {
    phoneCountryCode: any;
    phoneNumber: string;
    showPhoneCountryPicker: boolean;
}

interface MobileNumberInputProps {
    onPhoneNumberChange: (phoneNumber: string) => void;
}
export class MobileNumberInput extends Component<MobileNumberInputProps, MobileNumberInputState> {
    phoneInputRef: React.RefObject<PhoneInput>;
    constructor(props: any){
        super(props);
        this.state = {
            phoneCountryCode: 'US',
            showPhoneCountryPicker: false,
            phoneNumber: '',
        };
        this.phoneInputRef = React.createRef();

    }

    handleCountrySelect = (country: any) => {
        const newPhoneNumber = `+${country.callingCode[0]}`;
        this.setState({
            phoneCountryCode: country.cca2,
            phoneNumber: newPhoneNumber,
            showPhoneCountryPicker: false,
        });
        if(this.phoneInputRef.current){
            this.phoneInputRef.current.selectCountry(country.cca2.toLowerCase());
            this.phoneInputRef.current.setValue(newPhoneNumber);
        }
        this.props.onPhoneNumberChange(newPhoneNumber);
    }


  render() {

    const {phoneCountryCode, showPhoneCountryPicker, phoneNumber} = this.state;
    return (
      <View style={styles.container}>
        <PhoneInput
            ref={this.phoneInputRef}
            style={styles.input}
            initialValue={phoneNumber}
            textStyle={styles.inputText}
            initialCountry={phoneCountryCode.toLowerCase()}
            onPressFlag={() => this.setState({showPhoneCountryPicker: true})}
            onChangePhoneNumber={(text) => {
                this.setState({phoneNumber: text});
                this.props.onPhoneNumberChange(text);
            }}
        />
        <CountryPicker
            countryCode={phoneCountryCode}
            visible={showPhoneCountryPicker}
            onSelect={this.handleCountrySelect}
            onClose={() => this.setState({ showPhoneCountryPicker: false })}
            withFlagButton={false}
            withFilter
        />
      </View>
    )
  }
}

export default MobileNumberInput;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        borderRadius: 10,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        width: '100%',
        // backgroundColor: 'blue',
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        borderColor: '#94A3B8',
        borderWidth: 1,
        marginRight: 10,
    },
    inputText: {
        fontSize: 16
    }
})