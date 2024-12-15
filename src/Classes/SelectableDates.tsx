import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'


interface Day {
    weekday: string;
    dayOfMonth: number;
    date: string;
}

interface State {
    days: Day[];
    selectedDate: string;
}

export class SelectableDates extends Component<any, State> {
    constructor(props: {}){
        super(props);
        this.state = {
            days: this.generateDays(),
            selectedDate: '',
        }
    }

    // Generate the next two weeks worth of days
    generateDays(){
        const today = new Date();
        const days: Day[] = [];

        for(let i = 0; i < 14; i++){
            const day = new Date(today);
            day.setDate(today.getDate() + i);

            const weekday = day.toLocaleDateString('en-US', { weekday: 'short'});
            const dayOfMonth = day.getDate();

            const date = day.toISOString().split('T')[0];

            days.push({ weekday, dayOfMonth, date});
        }        

        return days;
    }

    handleSelectDate = (date: string) => {
        this.setState({ selectedDate: date });
    }

    renderDay = ({item}: { item: { weekday: string; dayOfMonth: number, date: string}}) => {
        const { selectedDate } = this.state;
        const isSelected = selectedDate === item.date;
        return (
            <Pressable 
                style={[styles.dayContainer, isSelected && styles.selectedDayContainer]} 
                onPress={() => this.handleSelectDate(item.date)}>
                <Text style={[styles.weekday, isSelected && styles.selectedWeekday]}>{item.weekday}</Text>
                <Text style={[styles.dayOfMonth, isSelected && styles.selectedDayOfMonth]}>{item.dayOfMonth < 10 ? `0${item.dayOfMonth}` : item.dayOfMonth}</Text>
            </Pressable>
        )
    };

    render() {
        const { days} = this.state;

        return (
            <FlatList
                data={days}
                renderItem={this.renderDay}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
                snapToInterval={100}
                decelerationRate="fast"
            />
        )
    }
}

export default SelectableDates;

const styles = StyleSheet.create({
    scrollContainer: {
        // backgroundColor: 'blue'
    },
    dayContainer: {
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        paddingHorizontal: 8,
        paddingVertical: 17,
    },
    weekday: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Inter',
        fontWeight: '400',
        lineHeight: 24,
        textTransform: 'uppercase'
    },
    dayOfMonth: {
        color: '#000',
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Inter',
        fontWeight: '400',
        lineHeight: 24,
    },
    selectedDayContainer: {
        backgroundColor: '#0165FC',
        borderRadius: 5,
    },
    selectedWeekday: {
        color: '#FFF'
    },
    selectedDayOfMonth: {
        color: '#FFF',
    }
});