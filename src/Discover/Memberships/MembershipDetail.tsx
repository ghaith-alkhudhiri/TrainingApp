import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import theme from '../../Constants/theme'
import DatePickerInput from '../../Common/DatePickerInput'
import Dropdown from '../../Common/Dropdown'
import CustomRadioButton from '../../Common/CustomRadioButton'

export class MembershipDetail extends Component {
  render() {
    return (
      <ScreenWrapper title='Membership detail' floatingBtn floatingBtnProps={{label: 'Next', onPress: ()=>{}}}>
        <View style={{gap: 20,}}>

        <View style={{gap: 19,}}>
            <View style={{gap: 4,}}>
                <Text style={{
                    textTransform: 'capitalize',
                    color: '#000',
                    fontFamily: theme.font,
                    fontSize: 18,
                    fontWeight: 600,
                    letterSpacing: -0.3,
                }}>Start Date</Text>
                <Text style={{
                    color: theme.primary,
                    fontFamily: theme.font,
                    fontSize: 12,
                    fontWeight: 400,
                    lineHeight: 18,
                    letterSpacing: 0.36,
                }}>The date must be after the existing membership ends</Text>
            </View>
            <DatePickerInput onDateChange={(date: Date | null) => {this.setState({selectedDate: date})}}/>
        </View>


        <View style={{gap: 19,}}>
            <Text style={{
                textTransform: 'capitalize',
                color: '#000',
                fontFamily: theme.font,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: -0.3,
            }}>Select Person</Text>
            <Dropdown options={['Myself', 'Family']} onValueChange={(value: string) => {this.setState({selectedValue: value})}}/>
        </View>
        <View style={{gap: 19,}}>
        <Text style={{
                textTransform: 'capitalize',
                color: '#000',
                fontFamily: theme.font,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: -0.3,
            }}>Membership Ads-on</Text>
            <View style={{gap: 13,}}>
                <CustomRadioButton containerStyle={{gap: 13,}} optionStyle={{margin: 0, paddingHorizontal: 16,}} options={['Freeze', 'InBody Test', 'Personal Training', 'Classes']} selectedOption={'Freeze'} onOptionSelect={(option: string) => {this.setState({selectedOption: option})}}/>
            </View>
        </View>
        </View>
      </ScreenWrapper>
    )
  }
}

export default MembershipDetail