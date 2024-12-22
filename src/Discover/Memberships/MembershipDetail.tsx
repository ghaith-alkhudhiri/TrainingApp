import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import ScreenWrapper from '../../Layout/ScreenWrapper';
import theme from '../../Constants/theme';
import DatePickerInput from '../../Common/DatePickerInput';
import Dropdown from '../../Common/Dropdown';
import CustomRadioButton from '../../Common/CustomRadioButton';
import CustomTextInput from '../../Common/CustomTextInput';
import CustomCheckBox from '../../Common/CustomCheckBox';
import { NavProps } from '../../types';

interface State {
  currentStep: number;
  selectedDate: Date | null;
  selectedValue: string;
  selectedOption: string;
  selectedOption2: string;
  selectedOption3: string;
  selectedOption4: string[];
}

export class MembershipDetail extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      currentStep: 1,
      selectedDate: null,
      selectedValue: 'Myself',
      selectedOption: 'Freeze',
      selectedOption2: 'Yes',
      selectedOption3: 'Personalized training',
      selectedOption4: ['I Agree on terms and conditions'],
    };
  }

  handleToggle = (selectedOptions: string[]) => {
    this.setState({ selectedOption4: selectedOptions });
  };


  handleNextPress = () => {
    const { currentStep } = this.state;

    if (currentStep < 2) {
      this.setState({ currentStep: currentStep + 1 });
    } else {
      // Handle form submission here
      console.log('Form submitted:', this.state);
      // this.props.navigation.navigate('Review');      
    }
  };

  renderStep = () => {
    const { currentStep, selectedDate, selectedValue, selectedOption, selectedOption2, selectedOption3, selectedOption4 } = this.state;

    if (currentStep === 1) {
      return (
        <View style={{ gap: 20 }}>
            <View style={{ gap: 19 }}>
                <View style={{ gap: 4 }}>
                    <Text style={styles.label}>Start Date</Text>
                    <Text style={styles.helperText}>The date must be after the existing membership ends</Text>
                </View>
                <DatePickerInput onDateChange={(date) => this.setState({ selectedDate: date })} />
            </View>

            <View style={{ gap: 19 }}>
                <Text style={styles.label}>Select Person</Text>
                <Dropdown
                    options={['Myself', 'Family']}
                    onValueChange={(value) => this.setState({ selectedValue: value })}
                    selectedValue={selectedValue}
                />
            </View>
            <View style={{gap: 19,}}>
                <Text style={styles.label}>Membership Ads-on</Text>
                    <CustomRadioButton
                        subInfo={[['100 RS', '3 Freeze'], ['50 RS', '2 times'], ['100', '2 sessions'], ['100', '2 classes']]}
                        containerStyle={{ gap: 13 }}
                        optionStyle={{ margin: 0, paddingHorizontal: 16 }}
                        options={['Freeze', 'InBody Test', 'Personal Training', 'Classes']}
                        selectedOption={selectedOption}
                        onOptionSelect={(option) => this.setState({ selectedOption: option })}
                    />
            </View>
        </View>
      );
    } else if (currentStep === 2) {
      return (
        <View style={{ gap: 9 }}>
            <View style={{ gap: 19 }}>
                <Text style={styles.label}>Personal Information</Text>
                <View style={{gap: 10}}>
                    <Text style={styles.label2}>Do you have any medical issues</Text>
                    <CustomRadioButton
                        containerStyle={{ gap: 9 }}
                        optionStyle={{ padding: 0, margin: 0, borderWidth: 0 }}
                        radioCircleStyle={{marginLeft: 0, marginRight: 8}}
                        options={['Yes', 'No']}
                        selectedOption={selectedOption2}
                        onOptionSelect={(option) => this.setState({ selectedOption: option })}
                    />
                </View>
                <View style={{gap: 10}}>
                    <Text style={styles.label2}>If yes, write your medical issues</Text>
                    <CustomTextInput placeholder={'Write your medical issues'}/>
                </View>
                <View style={{gap: 10}}>
                    <Text style={styles.label2}>Do you have any request</Text>
                    <CustomTextInput placeholder={'Write your request'}/>
                </View>
                <View style={{gap: 10}}>
                    <Text style={styles.label2}>Reason for the sessions</Text>
                    <CustomRadioButton
                        containerStyle={{ gap: 13 }}
                        optionStyle={{ margin: 0, paddingHorizontal: 16 }}
                        options={['Motivation and Improvement', 'Personalized training', 'Setting goals', 'Others']}
                        selectedOption={selectedOption3}
                        onOptionSelect={(option) => this.setState({ selectedOption: option })}
                    />
                </View>
            </View>
            <View style={{}}>
              <CustomCheckBox 
              options={['I Agree on terms and conditions']} 
              selectedOptions={selectedOption4} 
              onOptionToggle={this.handleToggle} 
              optionStyle={{borderWidth:0, margin: 0, paddingLeft: 0}}
              checkboxSquareStyle={{marginLeft: 0, marginRight: 12, borderRadius: 0}}
              textStyle={{
                color: '#1E1E1E',
                fontFamily: 'Inter',
                fontSize: 13,
                fontWeight: 400,
                lineHeight: 16.25,
                textDecorationLine: 'underline',
              }}
              />
            </View>
        </View>
      );
    }
  };

  render() {
    const { currentStep } = this.state;
    const isLastStep = currentStep === 2;

    return (
      <ScreenWrapper
        title="Membership detail"
        floatingBtn
        floatingBtnProps={{
          label: isLastStep ? 'Next' : 'Next', //can change label on last step
          onPress: this.handleNextPress,
        }}
        scrollContainerStyle={{paddingHorizontal: 25}}
      >
        {this.renderStep()}
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    textTransform: 'capitalize',
    color: '#000',
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  helperText: {
    color: theme.primary,
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.36,
  },
  label2: {
    color: '#000',
    fontFamily: theme.font,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17.5,
  },
});

export default MembershipDetail;