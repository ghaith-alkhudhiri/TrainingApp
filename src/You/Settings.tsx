import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import PeopleIcon from '../Assets/Icons/PeopleIcon';
import MessageIcon from '../Assets/Icons/MessageIcon';
import RadarIcon from '../Assets/Icons/RadarIcon';
import LockIcon from '../Assets/Icons/LockIcon';
import ProfileDeleteIcon from '../Assets/Icons/ProfileDeleteIcon';
import LogoutIcon from '../Assets/Icons/LogoutIcon';
import RightChevron from '../Assets/Icons/RightChevron';
import ListItem from './Components/ListItem';
import ContactUsIcon from '../Assets/Icons/ContactUsIcon';

interface State {
    notificationsEnabled: boolean;
}

interface Props {
    navigation: any;
}

class Settings extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            notificationsEnabled: false,
        };
    }

    

    toggleNotifications = () => {
        this.setState({ notificationsEnabled: !this.state.notificationsEnabled });
    };

    render() {
        const {navigation} =  this.props;
        const listItems = [
            {
                icon: <PeopleIcon />,
                title: "About Gymname",
                screen: "AboutGym",
            },           
            {
                icon: <ContactUsIcon />,
                title: "Contact us",
                screen: "ContactUs",
            },
            {
                icon: <RadarIcon />,
                title: "Help Center",
                screen: "HelpCenter",
            },
            {
                icon: <LockIcon />,
                title: "Privacy Policy",
                screen: "PrivacyPolicy",
            },
            {
                icon: <ProfileDeleteIcon />,
                title: "Delete Account",
                screen: "DeleteAccount",
            },
            {
                icon: <LogoutIcon />,
                title: "Language",
                screen: "Language",
            },
            {
                icon: <LogoutIcon />,
                title: "Log out",
                screen: "LogOut",
            }

        ];

        return (
            <ScreenWrapper title="Settings" childrenContainerStyle={{paddingHorizontal: 0}}>
               <View>
                    {listItems.map((item, index) => (
                        <>
                            <ListItem key={index} icon={item.icon} title={item.title} screen={item.screen} navigation={navigation}  />
                            {(index === 2 || index === 5 || index === 8) && (
                                <View style={{height: 10, backgroundColor: "#F4F4F4"}} />
                            )}
                        </>
                    ))}
                    </View>
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingText: {
        fontSize: 18,
    },
});

export default Settings;