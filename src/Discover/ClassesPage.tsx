import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import SearchIcon from '../Assets/Icons/SearchIcon'
import SearchIcon2 from '../Assets/Icons/SearchIcon2'
import SelectableDates from '../Classes/SelectableDates'
import { Class } from '../interfaces/Class'
import ClassCard from '../Classes/ClassCard'

interface Props {
    navigation: any;
}

export class SearchBtn extends Component {
    render(){
        return (
            <Pressable style={styles.btnContainer} onPress={() => console.log("Search btn clicked")}>
                <SearchIcon2 />
            </Pressable>
        )
    }
}

export class ClassesPage extends Component<Props> {
  render() {
    const upcomingClasses: Class[] = [
        { 
            id: '1', 
            title: 'Yoga Basics', 
            date: '2024-06-30', 
            categories: ['Hardcore', 'Yoga'],
            time: '10:00 - 11:00 AM',
            rating: 5, 
            trainer: 'John Doe', 
            price: 20, 
            url: 'https://images.ctfassets.net/cnu0m8re1exe/3qzr3eoWDYXq9tHmnr3QzK/dade797f13615399d1be31d5d68246a6/shutterstock_1660411888.jpg' 
        },
        { 
            id: '2', 
            title: 'HIIT Workout', 
            date: '2024-07-01', 
            time: '01:00 - 02:00 PM', 
            rating: 4,
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
            rating: 3.5,
            trainer: 'Emily Johnson', 
            price: 30,
            url: 'https://s3-alpha-sig.figma.com/img/af44/d2fe/7e0adec90c31fff8d870b67312f76f20?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BCIoEus~TKCx9SOytaVtdpgEKd3VenHjoQ4ZUK6hAO24TWGAwn1VFnexCh0T-Cb-5yx-sRoLEBtvDDM4o5XwWyBLq4A1xermrjZSJfMbtI3yCTdsHRGjTtyZv2kKVYZe~LX8IrSmsqS6e8WLGu3KPiPd-WukA3aZj5dvLuSaUlyKW-4KOKkOr07P3lU6-lJrpjer-6J98GwWvS58qEcBmPLHpXDWVWfJkUc59WLx3JjgLQ2AnezcinbW-Sw18C8SdGt~t0WMZCPczig7zhDn5CDFD5h0OeFKW0X4u9aZmZprQ7TUehfkSGgQ8NtU1iMB~am9hEvlsWiVzVsCSUGddQ__'
        },
    ];

    return (
      <ScreenWrapper
            title="Classes"
            rightElement={<SearchBtn />}
        >
            <SelectableDates />
            <FlatList
                data={upcomingClasses}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.flatListStyle}
                renderItem={({ item }) => (
                    <ClassCard
                        title={item.title}
                        coachName={item.trainer}
                        time={item.time}
                        price={item.price}
                        rating={item.rating}
                        url={item.url}
                        navigation={this.props.navigation}
                        categories={item.categories}
                    />
                )}
            />
      </ScreenWrapper>
    )
  }
}

export default ClassesPage

const styles = StyleSheet.create({
    btnContainer: {
        width: 40,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 33,
    },
    flatListStyle: {
        gap: 13,
    }
});