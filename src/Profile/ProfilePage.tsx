import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
// import AvatarPicker from '../components/common/AvatarPicker';
import {FilePicker, PickFilesResult, PickFilesOptions} from '@capawesome/capacitor-file-picker'
// import FileUploadInput from '../components/common/FileUploadInput';
// import DatePickerInput from '../components/common/DatePickerInput';
import SectionWrapper from './Components/SectionWrapper';
import CustomTextInput from '../Common/CustomTextInput';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomRadioButton from '../Common/CustomRadioButton';
import FileUploadInput from '../Common/FileUploadInput';
import AvatarPicker from '../Common/AvatarPicker';
import DatePickerInput from '../Common/DatePickerInput';
import { isIOS } from '../Utils/PlatformUtil';


interface Props {
    navigation: any;
}

interface State {
    firstName: string;
    lastName: string;
    personalId: string;
    selectedDate: Date | null;
    selectedOption: string;
    selectedValue: string | null;
    medicalIssues: string;
}

export class ProfileScreen extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            personalId: '',
            selectedDate: null,
            selectedOption: 'Yes',
            selectedValue: null,
            medicalIssues: '',
        }
    }

    handleFirstNameChange = (text: string) => {
        this.setState({firstName: text});
    };

    handleLastNameChange = (text: string) => {
        this.setState({lastName: text});
    }

    handlePersonalIdChange = (text: string) => {
        this.setState({personalId: text});
    };

    handleFilesSelected = (files: PickFilesResult['files']) => {
        console.log('Selected files: ', files);
    }

    handleDateChange = (date: Date | null) => {
        this.setState({selectedDate: date});
    }

    handleOptionSelect = (option: string) => {
        this.setState({ selectedOption: option });
    };
    
    handleValueSelect = (option: string) => {
        this.setState({ selectedValue: option });
    };

    handleMedicalIssues = (option: string) => {
        this.setState({});
    }

  render() {
    const {firstName, lastName, personalId, selectedOption, selectedValue, medicalIssues} = this.state;
    const {navigation} = this.props;
    console.log("Selected date inside profile", this.state.selectedDate);
    console.log("Selected Option inside profile", selectedOption);
    console.log("Selected Value inside profile", selectedValue);
    return (
      <ScreenWrapper navigation={navigation}>
       
            <Text style={styles.title}>Complete Your Profile</Text>
            <AvatarPicker containerStyle={styles.avatarContainerStyle} />
            <SectionWrapper title='Personal Information'>
                <CustomTextInput 
                    label='First Name *'
                    placeholder='Enter your first Name'
                    value={firstName}
                    onChangeText={this.handleFirstNameChange}
                />
                <CustomTextInput 
                    label='First Name *'
                    placeholder='Enter your first Name'
                    value={firstName}
                    onChangeText={this.handleFirstNameChange}
                />
                <CustomTextInput 
                    label='First Name *'
                    placeholder='Enter your first Name'
                    value={firstName}
                    onChangeText={this.handleFirstNameChange}
                />
                <CustomTextInput 
                    label='First Name *'
                    placeholder='Enter your first Name'
                    value={firstName}
                    onChangeText={this.handleFirstNameChange}
                />
                <CustomTextInput 
                    label='Last Name *'
                    placeholder='Enter your Last Name'
                    value={lastName}
                    onChangeText={this.handleLastNameChange}
                />
                <CustomTextInput 
                    label='Personal Id *'
                    placeholder='Enter your Personal Id'
                    value={personalId}
                    onChangeText={this.handlePersonalIdChange}
                />
                <DatePickerInput label='Date of birth' onDateChange={this.handleDateChange}/>
            </SectionWrapper>
            <SectionWrapper title='Do you have any medical issues?'>
                <CustomRadioButton
                    options={['Yes', 'No']}
                    selectedOption={this.state.selectedOption}
                    onOptionSelect={this.handleOptionSelect}
                    layout="column"
                    optionStyle={styles.option}
                    selectedOptionStyle={styles.selectedOption}
                    textStyle={styles.text}
                />
            </SectionWrapper>
            {
                selectedOption === 'Yes' && (
                    <SectionWrapper title='If yes, write them down'>
                        <CustomTextInput 
                            label="medical Issues *"
                            placeholder='Enter your medical issues'
                            value={medicalIssues}
                            onChangeText={this.handleMedicalIssues}
                        />
                    </SectionWrapper>
                )
            }
            <SectionWrapper title='When you will start *'>
                <Text>Immediately</Text>
            </SectionWrapper>
            <SectionWrapper title='Upload your personal Id'>
                <FileUploadInput onFileSelected={this.handleFilesSelected} />
            </SectionWrapper>
      </ScreenWrapper>
    )
  }
}

export default ProfileScreen;

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        gap: 10,
    },
    title: {
        color: '#1E232C',
        fontSize: 27,
        fontWeight: 600,
    },
    avatarContainerStyle: {
        alignSelf: 'center',
    },
    personalInfoContainer: {
        gap: 10,
    },
    sectionTitle: {
        color: '#000',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    },
    option: {

    },
    selectedOption: {

    },
    text: {

    },
});