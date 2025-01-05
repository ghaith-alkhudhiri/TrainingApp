import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import theme from '../Constants/theme'
import { NavProps } from '../types'
import DatePickerInput from '../Common/DatePickerInput'
import CustomRadioButton from '../Common/CustomRadioButton'
import CustomModal, { Action } from '../Common/CustomModal'

interface Props {
    route: {
        params: {
            item: object;
        }
    }
}

interface State {
    modalVisible: boolean;
}

type RescheduleProps = NavProps & Props;

export class Reschedule extends Component<RescheduleProps, State> {
    constructor(props: RescheduleProps) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }
  render() {
    const {item} = this.props.route.params;
    const actions : Action[] = [
        {
            text: 'Yes, I’m sure',
            onPress: () => {
                this.setState({ modalVisible: false }, () => {
                    this.props.navigation.navigate('success', {
                        title: 'Reschedule Successfully',
                        description: 'Your class has been reschedule successfully!'
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
    ]
    return (
      <ScreenWrapper title='Reschedule Class' childrenContainerStyle={{gap: 20}} floatingBtn 
        floatingBtnProps={[{label: 'Reschedule Class', onPress: ()=> {this.setState({modalVisible: true})}}]}
        >
        <View style={{gap: 8}}>
            <Text style={styles.title}>Class Details</Text>
            <View style={styles.divider} />
            <View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subtitle}>Class Coach</Text>
                    <Text>{item.coach}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subtitle}>Class Date</Text>
                    <Text>{item.date}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subtitle}>Class Time</Text>
                    <Text>{item.time}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subtitle}>Duration</Text>
                    <Text>{item.duration}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subtitle}>Studio Number</Text>
                    <Text>{item.studioNumber}</Text>
                </View>
            </View>
        </View>
        <View style={{gap: 19}}>
            <Text style={styles.title}>New Date</Text>
            <DatePickerInput onDateChange={()=>{}} />
        </View>
        <View style={{gap: 19}}>
            <Text style={styles.title}>Time available</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CustomRadioButton 
                    SegmentedControl 
                    options={[
                        { label: '7:00  PM', value: '7:00  PM' }, 
                        { label: '7:30  PM', value: '7:30  PM' }, 
                        { label: '8:00  PM', value: '8:00  PM' },
                        { label: '8:30  PM', value: '8:30  PM' },
                        { label: '9:00  PM', value: '9:00  PM' },
                        ]} 
                    selectedOption={'7:00  PM'} 
                    onOptionSelect={()=>{}} 
                    layout='row' />
            </ScrollView>
        </View>
        <CustomModal 
            visible={this.state.modalVisible}
            onClose={() => this.setState({modalVisible: false})}
            title="Reschedule Class"
            description="Are you sure you want to reschedule the class? 
            You are rescheduling your class to a different time and date"
            actions={actions}
            animationType='slide'
        />
      </ScreenWrapper>
    )
  }
}

export default Reschedule

const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    divider: {
        height: 1,
        backgroundColor: '#F3F3F3',
    },
    subtitle: {
        color: '#64748B',
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 18,
    },
    info:{
        color: '#141414',
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});