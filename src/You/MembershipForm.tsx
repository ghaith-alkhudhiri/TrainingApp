import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import { NavProps } from '../types';
import DatePickerInput from '../Common/DatePickerInput';
import theme from '../Constants/theme';
import CustomRadioButton from '../Common/CustomRadioButton';
import CustomTextInput from '../Common/CustomTextInput';
import CustomModal, { Action } from '../Common/CustomModal';

interface Props {
    route: {
        params: {
            title: 'Freeze Membership' | 'Cancel Membership' | 'Unfreeze Membership';
        }
    }
}

interface State {
    modalVisible: boolean;
}

type MembershipFormProps = NavProps & Props;

export class MembershipForm extends Component<MembershipFormProps, State> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }
  render() {
    const { title } = this.props.route.params;
    const actions: Action[] = [
        {
            text: 'Yes, I’m sure',
            onPress: () => {
                this.setState({ modalVisible: false }, () => {
                    this.props.navigation.navigate('success', {
                        title: 'Unfreeze Successfully',
                        description: 'Your Membership has been unFreeze successfully!'
                    });
                });
            },
            style: 'primary',
        },
        {
            text: 'No, Cancel',
            onPress: () => this.setState({modalVisible: false}),
            style: 'outline',
        },
    ];
    return (
      <ScreenWrapper 
        title={title} 
        floatingBtn 
        floatingBtnProps={
            [
                {label: title, onPress: ()=> {
                    title === 'Cancel Membership' ? 
                    this.props.navigation.navigate('success', 
                        {title: 'Cancel Successfully', description: 'Your Membership has been cancel successfully!'}) 
                    : title === 'Freeze Membership' ? 
                    this.props.navigation.navigate('success', 
                        {title: 'Freeze Successfully', description: 'Your Membership has been Freeze successfully!'}) 
                    : this.setState({modalVisible: true})
                    }
                }
            ]
        }>
        <View style={{gap: 23}}>
            {(title === 'Freeze Membership' || title === 'Unfreeze Membership') && (
            <View style={{gap: 19}}>
                <Text style={styles.label}>Start Date</Text>
                <DatePickerInput onDateChange={()=>{}} />
            </View>
            )}
            {title === 'Freeze Membership' && (
            <View style={{gap: 19}}>
                <Text style={styles.label}>End Date</Text>
                <DatePickerInput onDateChange={()=>{}} />
            </View>
            )}
            <View style={{gap: 10}}>
                <Text style={styles.label}>Please select the reason for Freeze</Text>
                <CustomRadioButton 
                    options={[
                        {label: 'Illness or Injury', value: 'Illness or Injury'},
                        {label: 'Personal Reasons', value: 'Personal Reasons'},
                        {label: 'Family Emergency', value: 'Family Emergency'},
                        {label: 'Other', value: 'Other'},
                    ]} 
                    selectedOption={'Illness or Injury'} 
                    onOptionSelect={()=>{}} 
                />
            </View>
            {title !== 'Unfreeze Membership' && (
            <View style={{gap: 10}}>
                <Text style={styles.label}>Other</Text>
                <CustomTextInput 
                    placeholder='Write your Reason'
                    onChangeText={()=>{}}
                />
            </View>
            )}
        </View>
        <CustomModal
            visible={this.state.modalVisible}
            onClose={() => this.setState({modalVisible: false})}
            title="Unfreeze"
            description="Are you sure you want to unfreeze the membership today? 
            Your freezing period has not ended yet! Are you sure you want to unfreeze the membership today?"
            actions={actions}
            animationType='slide'
        />
      </ScreenWrapper>
    )
  }
}

export default MembershipForm

const styles = StyleSheet.create({
    label: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17.5,
    }
})
