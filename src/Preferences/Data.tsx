import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import CustomRadioButton from '../Common/CustomRadioButton'

interface State {
    selectedOption: string;
}

export class Data extends Component<{}, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            selectedOption: 'Male',
        };
    }

    handleSelectedOption = (option: string) => {
        this.setState({selectedOption: option})
    }
  render() {
    
    return (
      <ScreenWrapper headerShown={false}>
        <View>
            <Text style={styles.h1}>Your Data</Text>
            <Text style={styles.description}>To give you the best journey, we need to learn more about you</Text>
        </View>
        <Text>Gender</Text>
        <CustomRadioButton 
            options={['Male', 'Female']} 
            selectedOption={this.state.selectedOption} 
            onOptionSelect={this.handleSelectedOption} />
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