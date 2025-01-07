import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import CustomRadioButton from '../Common/CustomRadioButton'
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';

interface Props {
    navigation: any;
    route: any;
}

interface State {
    selectedOption: string;
}

export class Data extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            selectedOption: 'Male',
        };
    }

    handleSelectedOption = (option: string) => {
        this.setState({selectedOption: option})
    }

    navigateToSuccessPage = () => {
        this.props.navigation.navigate("success", {
            title: "Thank you",
            description: "You will be directed to the homepage shortly",
            nextPage: "Main",
            nextPageParameters: {
                screen: "Home"
            }
        });
    }
  render() {
    const genderOptions = [
        {
            label: "Male",
            value: 'male',
            icon: null,
        },
        {
            label: "Female",
            value: 'female',
            icon: null,
        }
    ]
    return (
      <ScreenWrapper headerShown={false} floatingBtn={true} floatingBtnProps={[{label: "Next", onPress: this.navigateToSuccessPage }]}>
        <View>
            <Text style={styles.h1}>Your Data</Text>
            <Text style={styles.description}>To give you the best journey, we need to learn more about you</Text>
        </View>
        <CustomRadioButton 
            label='Gender'
            options={genderOptions} 
            selectedOption={this.state.selectedOption} 
            onOptionSelect={this.handleSelectedOption} />
        <Text style={{fontSize: 15, fontWeight: '600', lineHeight: 18.75}}>Personal Information</Text>
        <CustomTextInput label={'Height (cm)'} placeholder={'Enter Your Height'} />
        <CustomTextInput label={'Weight (kg)'} placeholder={'Enter your Weight'} />
        <CustomTextInput label={'Body Fat'} placeholder={'Enter your Body Fat'} />
        <CustomTextInput label={'Muscle Mass'} placeholder={'Enter your Muscle Mass'} />
      </ScreenWrapper>
    )
  }
}

export default Data

const styles = StyleSheet.create({
    h1: {
        fontSize: 27,
        fontWeight: '500',
        color: '#1E232C',
    },
    description: {
        fontSize: 14,
        fontWeight: '400',
        color: '#797979',
        lineHeight: 17,
    },
})