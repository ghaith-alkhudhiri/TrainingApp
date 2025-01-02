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
import NotificationIcon from '../Assets/Icons/NotificationIcon';
import NotificationBingIcon from '../Assets/Icons/NotificationBingIcon';
import NotificationOutlineIcon from '../Assets/Icons/NotificationOutlineIcon';
import CustomModal from '../Common/CustomModal';

interface State {
    notificationsEnabled: boolean;
    isLogoutModalVisible: boolean;
}

interface Props {
    navigation: any;
}

class Settings extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            notificationsEnabled: false,
            isLogoutModalVisible: false,
        };
    }

    toggleLogoutModal = () => {
        console.log("Toggle logout modal called");
        this.setState({ isLogoutModalVisible: !this.state.isLogoutModalVisible });
    }

    toggleNotifications = () => {
        this.setState({ notificationsEnabled: !this.state.notificationsEnabled });
    };

    handleLogout = () => {
        this.setState({isLogoutModalVisible: false});
    }

    render() {
        const {navigation} =  this.props;
        const { isLogoutModalVisible} = this.state;

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
                icon: <NotificationOutlineIcon />,
                title: "Notifications Settings",
                screen: "NotificationsSettings"
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
                screen: "null",
                onPress: this.toggleLogoutModal,
            }

        ];

        return (
            <ScreenWrapper title="Settings" childrenContainerStyle={{paddingHorizontal: 0}}>
               <View>
                    {listItems.map((item, index) => (
                        <>
                            <ListItem 
                                key={index} 
                                icon={item.icon} 
                                title={item.title} 
                                screen={item.screen} 
                                navigation={navigation}
                                onPress={item.onPress}    
                            />
                            {(index === 2 || index === 5 || index === 8) && (
                                <View style={{height: 10, backgroundColor: "#F4F4F4"}} />
                            )}
                        </>
                    ))}
                    </View>

                    {/* Logout Confirmation Modal */}
                    <CustomModal
                        visible={isLogoutModalVisible}
                        onClose={this.toggleLogoutModal}
                        title="Log out"
                        description="Are you sure you want to log out?"
                        actions={[
                            {
                                text: "Yes, I'm sure",
                                onPress: this.toggleLogoutModal,
                                style: 'primary',
                            },
                            {
                                text: "No, Cancel",
                                onPress: this.handleLogout,
                                style: 'outline',
                            },
                        ]}
                        animationType='slide'
                    />
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