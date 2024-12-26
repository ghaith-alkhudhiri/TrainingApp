import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomButton from '../Common/CustomButton';
import SettingsIcon from '../Assets/Icons/SettingsIcon';
import AvatarPicker from '../Common/AvatarPicker';
import ProfileIcon from '../Assets/Icons/ProfileIcon';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import CrowIcon from '../Assets/Icons/CrowIcon';
import CupIcon from '../Assets/Icons/CupIcon';
import ShoppingIcon from '../Assets/Icons/ShoppingIcon';
import EmptyWallet from '../Assets/Icons/EmptyWallet';
import Profile2Users from '../Assets/Icons/Profile2Users';
import NoteTextIcon from '../Assets/Icons/NoteText';
import RightArrowIcon from '../Assets/Icons/RightArrowIcon';
import RightChevron from '../Assets/Icons/RightChevron';



class You extends Component {
    render() {
        const listItems = [
            {
                icon: <ProfileIcon color="#0165FC" />,
                title: "Your Profile",
            },
            {
                icon: <CrowIcon />,
                title: "My Memberships",
            },
            {
                icon: <CalendarIcon color='#0165FC' />,
                title: "My Classes",
            },
            {
                icon: <CupIcon />,
                title: "My Workout",
            },
            {
                icon: <ShoppingIcon />,
                title: "My Orders",
            },
            {
                icon: <EmptyWallet />,
                title: "E-Wallet",
            },
            {
                icon: <Profile2Users />,
                title: "My Family",
            },
            {
                icon: <NoteTextIcon />,
                title: "My Analysis",
            }
        ]
        return (
            <ScreenWrapper title="You" scrollViewContainerStyle={{paddingHorizontal: 0}} style={styles.container} rightElement={
            <CustomButton 
                styleType='rounded'
                onPress={() => console.log("settings button clicked")} 
                icon={<SettingsIcon />} />}>
                    <View style={styles.avatarContainer}>
                        <AvatarPicker isPicker={false} imageUri='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' />
                        <Text style={styles.userNameText}>{"User Name"}</Text>
                    </View>
                    <View>
                        {listItems.map((item, index) => (
                            <Pressable key={index} style={styles.listItem} onPress={() => console.log(item.title)}>
                                <View style={styles.contentContainer}>
                                    {item.icon}
                                    <Text style={styles.text}>{item.title}</Text>
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
        backgroundColor: '#f5f5f5',
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    text: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 17,
    },
    userNameText: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderColor: "#EDEDED",
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }
});

export default You;