import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import DatePickerInput from '../Common/DatePickerInput'
import CustomTextInput from '../Common/CustomTextInput';

interface State {
    selectedDate: Date | null;
    neck: string;
    shoulder: string;
    arms: string;
    forearms: string;
    wrist: string;
    chest: string;
    waist: string;
    abdomen: string;
    buttocks: string;
    thighs: string;
    calves: string;
}

interface Props {

}

export class BodyMeasurementForm extends Component<Props, State> {

    constructor(props: any){
        super(props);
        this.state = {
            neck: '',
            shoulder: '',
            arms: '',
            forearms: '',
            wrist: '',
            chest: '',
            waist: '',
            abdomen: '',
            buttocks: '',
            thighs: '',
            calves: '',
            selectedDate: null,
        }
    }

    handleInputChange = (key: keyof State, value: string) => {
        this.setState({ [key]: value} as unknown);
    };

    handleDateChange = (date: Date | null) => {
        this.setState({selectedDate: date});
    }

    render() {
        const bodyParts: (keyof State)[] = [
            'neck', 'shoulder', 'arms', 'forearms', 'wrist',
            'chest', 'waist', 'abdomen', 'buttocks', 'thighs', 'calves'
        ];
    return (
        <ScreenWrapper title="Body Measurement" childrenContainerStyle={{gap: 12}} floatingBtn floatingBtnProps={{ label: 'Done', onPress: () => {console.log("Done")}}}>
            <DatePickerInput label="Today's date" onDateChange={this.handleDateChange}/>
            <Text style={styles.formGuideText}>Please fill out Information in CM</Text>
            {bodyParts.map((part) => (
                <CustomTextInput
                    key={part}
                    label={part.charAt(0).toUpperCase() + part.slice(1)} // Capitalize the first letter
                    placeholder={`Enter ${part} measurement`}
                    value={this.state[part] ? this.state[part].toString() : ''}
                    onChangeText={(text) => this.handleInputChange(part, text)}
                    // style={styles.input}
                    variant="default"
                />
            ))}
        </ScreenWrapper>
        )
    }
}

export default BodyMeasurementForm;

const styles = StyleSheet.create({
    formGuideText: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 18.75,
    }
})