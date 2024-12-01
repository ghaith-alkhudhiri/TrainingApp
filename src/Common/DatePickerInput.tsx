import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ChangeEvent, Component } from 'react'
import { DatePicker } from '@capacitor-community/date-picker';
// import ReactDatePicker from 'react-datepicker';


interface Props {
    onDateChange: (date: Date | null) => void;
}

interface State {
    selectedDate: Date | null;
}

export class DatePickerInput extends Component<Props,State> {
    constructor(props: any){
        super(props);
        this.state= {
            selectedDate: null,
        };
    }

    handleWebDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value ? new Date(event.target.value) : null;
        this.setState({selectedDate: date});
        this.props.onDateChange(date);
    }

    openDatePicker = async () => {
        if(Platform.OS === 'web'){
            return;
        }

        try {
            const result = await DatePicker.present({
                mode: 'date',
                locale: 'en_US',
                theme: 'light',
                ios: {
                    format: 'yyyy-MM-dd',
                },
                android: {
                    format: 'yyyy-MM-dd',
                }
            });
            const date = new Date(result.value);
            this.setState({selectedDate: date});
            this.props.onDateChange(date);
        } catch (error) {
            console.error('Error opening date picker', error);
        }
    }
  render() {
    const {selectedDate} = this.state;
    return (
      <View style={styles.container}>
        {Platform.OS !== 'web' && (
            <Pressable onPress={this.openDatePicker} style={styles.button}>
                <Text style={styles.buttonText}>Pick Date</Text>
            </Pressable>
        )}
        {Platform.OS === 'web' && (
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date of birth</Text>
                <input type="date" value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
                    onChange={this.handleWebDateChange}
                    style={styles.dateInput}
                />
            </View>
        )}
        {/* {selectedDate && (
          <Text style={styles.selectedDateText}>Selected Date: {selectedDate.toISOString().split('T')[0]}</Text>
        )} */}
      </View>
    )
  }
}

export default DatePickerInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
      },
      selectedDateText: {
        fontSize: 16,
        color: '#2c3e50',
      },
      dateInput: {
        flex: 1,
        borderWidth: 0,
      },
      inputContainer: {
        flex: 1,
        width: '100%',
        borderColor: '#E2E8F0',
        borderWidth: 0.2,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
      },
      label: {
        marginBottom: 4,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        letterSpacing: 0.04,
        color: '#64748B'
    },
})