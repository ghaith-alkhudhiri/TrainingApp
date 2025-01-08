import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ClassCard from '../Classes/ClassCard';
import SectionHeader from './SectionHeader';
import { NavProps } from '../types';

interface Class {
    id: string;
    title: string;
    url: string;
    date: string;
    time: string;
    trainer: string;
    categories: string[];
    price?: number;
}

export class UpcomingClasses extends Component<NavProps> {
    render() {
        const upcomingClasses: Class[] = [
            { 
                id: '1', 
                title: 'Yoga Basics', 
                date: '2024-06-30', 
                categories: ['Hardcore', 'Yoga'],
                time: '10:00 - 11:00 AM', 
                trainer: 'John Doe', 
                price: 20, 
                url: 'https://images.ctfassets.net/cnu0m8re1exe/3qzr3eoWDYXq9tHmnr3QzK/dade797f13615399d1be31d5d68246a6/shutterstock_1660411888.jpg' 
            },
            { 
                id: '2', 
                title: 'HIIT Workout', 
                date: '2024-07-01', 
                time: '01:00 - 02:00 PM', 
                trainer: 'Jane Smith', 
                categories: ['Hardcore', 'Yoga'],
                price: 25,
                url: 'https://images.ctfassets.net/cnu0m8re1exe/3qzr3eoWDYXq9tHmnr3QzK/dade797f13615399d1be31d5d68246a6/shutterstock_1660411888.jpg'
            },
            { 
                id: '3', 
                title: 'Pilates', 
                date: '2024-07-02', 
                categories: ['Hardcore', 'Yoga'],
                time: '03:00 - 04:00 PM', 
                trainer: 'Emily Johnson', 
                price: 30,
                url: 'https://s3-alpha-sig.figma.com/img/af44/d2fe/7e0adec90c31fff8d870b67312f76f20?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BCIoEus~TKCx9SOytaVtdpgEKd3VenHjoQ4ZUK6hAO24TWGAwn1VFnexCh0T-Cb-5yx-sRoLEBtvDDM4o5XwWyBLq4A1xermrjZSJfMbtI3yCTdsHRGjTtyZv2kKVYZe~LX8IrSmsqS6e8WLGu3KPiPd-WukA3aZj5dvLuSaUlyKW-4KOKkOr07P3lU6-lJrpjer-6J98GwWvS58qEcBmPLHpXDWVWfJkUc59WLx3JjgLQ2AnezcinbW-Sw18C8SdGt~t0WMZCPczig7zhDn5CDFD5h0OeFKW0X4u9aZmZprQ7TUehfkSGgQ8NtU1iMB~am9hEvlsWiVzVsCSUGddQ__'
            },
        ];

        return (
            <View style={styles.container}>
                <SectionHeader title="Classes" onPress={() => {}}/>
                <FlatList
                    data={upcomingClasses}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.flatListStyle}
                    renderItem={({ item }) => (
                        <ClassCard
                            title={item.title}
                            coachName={item.trainer}
                            navigation={this.props.navigation}
                            time={item.time}
                            price={item.price}
                            url={item.url}
                            categories={item.categories}
                        />
                    )}
                />
            </View>
        )
    }
}

export default UpcomingClasses;

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    flatListStyle: {
        gap: 13,
    },
    classItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 16,
        color: 'gray',
    },
    trainer: {
        fontSize: 16,
        color: 'darkgray',
    },
})