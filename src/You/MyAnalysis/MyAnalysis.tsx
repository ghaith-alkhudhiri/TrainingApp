import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ScreenWrapper from '../../Layout/ScreenWrapper';
import SectionHeader from '../../Home/SectionHeader';
import MetricsCard from './Components/MetricsCard';
import RightChevron from '../../Assets/Icons/RightChevron';
import { NavProps } from '../../types';
import CalendarIcon from '../../Assets/Icons/CalendarIcon';
import CrowIcon from '../../Assets/Icons/CrowIcon';
import CupIcon from '../../Assets/Icons/CupIcon';
import EmptyWallet from '../../Assets/Icons/EmptyWallet';
import NoteTextIcon from '../../Assets/Icons/NoteText';
import Profile2Users from '../../Assets/Icons/Profile2Users';
import ProfileIcon from '../../Assets/Icons/ProfileIcon';
import ShoppingIcon from '../../Assets/Icons/ShoppingIcon';
import theme from '../../Constants/theme';

class MyAnalysis extends Component<NavProps> {
    render() {
        const { navigation } =  this.props;
        const listItems = [
            {
                icon: <ProfileIcon color="#0165FC" />,
                title: "Your Goals",
                screen: "MyGoals",
            },
            {
                icon: <CrowIcon />,
                title: "Progress Images",
                screen: "MembershipsSettings",
            },
            {
                icon: <CalendarIcon color='#0165FC' />,
                title: "Body Measurement ",
                screen: "ClassesSettings"
            },
            {
                icon: <Profile2Users />,
                title: "InBody Results",
                screen: "MyFamily",
            },
        ];
        return (
            <ScreenWrapper title='My Analysis' childrenContainerStyle={{gap: 24, paddingHorizontal: 0}}>
                <View style={{paddingLeft: 25, paddingRight: 23}}>
                    <SectionHeader title='Metrics' onPress={()=> this.props.navigation.navigate('Metrics')} />
                    <MetricsCard navigation={navigation} route={this.props.route} />
                </View>
                <View>
                    {listItems.map((item, index) => (
                        <Pressable key={index} style={styles.listItem} onPress={() => navigation.navigate(item.screen)}>
                            <View style={styles.listContainer}>
                                {item.icon}
                                <Text style={styles.listText}>{item.title}</Text>
                            </View>
                            <RightChevron fill={"#0165FC"} />
                        </Pressable>
                    ))}
                </View>
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderColor: "#EDEDED",
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    listText: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 14,
        lineHeight: 17,
    },
});

export default MyAnalysis;