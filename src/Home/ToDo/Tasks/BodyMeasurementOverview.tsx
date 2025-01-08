import { Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../../Layout/ScreenWrapper'
import CustomButton from '../../../Common/CustomButton'
import DatePickerInput from '../../../Common/DatePickerInput';

interface Props {
    navigation: any;
}

export class BodyMeasurementOverview extends Component<Props> {
   

    render() {
        const { navigation } = this.props;
        return (
        <ScreenWrapper title="Body Measurement" rightElement={<CustomButton label="Hello" onPress={()  => {navigation.navigate("newBodyMeasurement")}} /> }>
            <Text>Hello</Text>
        </ScreenWrapper>
        )
    }
}

export default BodyMeasurementOverview