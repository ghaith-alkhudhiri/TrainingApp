import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import CustomRadioButton from '../Common/CustomRadioButton'
import CustomTextInput from '../Common/CustomTextInput';
import CustomButton from '../Common/CustomButton';
import DatePickerInput from '../Common/DatePickerInput';

interface State {
    selectedOption: string;
    selectedDate: Date | null;
}

export class Goal extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            selectedOption: 'Lose weight',
            selectedDate: null
        };
    }

    handleSelectedOption = (option: string) => {
        this.setState({selectedOption: option})
    }

    handleDateChange = (date: Date | null) => {
        this.setState({selectedDate: date});
    }

  render() {
    
    return (
      <ScreenWrapper headerShown={false}>
        <View>
            <Text style={styles.h1}>Your Goal</Text>
            <Text style={styles.description}>What are your current goals for your body figure?</Text>
        </View>
        <CustomRadioButton 
            label='Gender'
            options={['Lose Weight', 'Gain Weight']} 
            selectedOption={this.state.selectedOption} 
            onOptionSelect={this.handleSelectedOption} />
        <Text style={{fontSize: 15, fontWeight: '600', lineHeight: 18.75}}>Personal Information</Text>
        <CustomTextInput label={'Target Weight (kg)'} placeholder={'Enter your Weight'} />
        <CustomTextInput label={'Target Body Fat'} placeholder={'Enter your Body Fat'} />
        <CustomTextInput label={'Target date of completion'} placeholder={'Enter your Muscle Mass'} />
        <DatePickerInput label='Target date of completion' onDateChange={this.handleDateChange}/>
        <CustomButton label='Next' onPress={()=>{}} />
      </ScreenWrapper>
    )
  }
}

export default Goal

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