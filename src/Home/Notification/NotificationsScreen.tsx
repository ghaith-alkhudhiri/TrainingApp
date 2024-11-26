import React, { Component } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import NotificationCard from './NotificationCard';
// import SuccessView from './SuccessView';
import ScreenWrapper from '../../Layout/ScreenWrapper';
import Header from '../Header';
import NotificationIcon from '../../Assets/Icons/NotificationIcon';
import CustomButton from '../../Common/CustomButton';
import theme from '../../Constants/theme';
import SectionHeader from '../SectionHeader';
import ScreenHeader from '../../Layout/ScreenHeader';

interface Notification {
    title: string;
    message: string;
    timestamp: Date;
    status: 'read' | 'unread';
}

export class NotificationsScreen extends Component {
    render() {
        // const notifications: Notification[] = [];
        const notifications: Notification[] = [
            {   
                title: 'Event Reminder',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.',
                timestamp: new Date('2024-07-15T14:30:00Z'),
                status: 'unread' 
            },
            { 
                title: 'Update Available',
                message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.',
                timestamp: new Date('2024-07-15T14:30:00Z'),
                status: 'read' 
            },
        ];
        const mergedStyle = { ...styles.containerStyle, paddingTop: 24 };
        return (
            <ScreenWrapper title='Notifications' rightElement={<CustomButton counter number={2} counterLabel='new' onPress={()=>{}}/>}>
                {notifications.length > 0 ? ( 
                    <>
                    {/* <SectionHeader title='Today' actionLabel='Mark all as read' actionLabelStyle={styles.actionLabelStyle} /> */}
                    <SectionHeader containerStyle={mergedStyle} title='Today' titleStyle={styles.titleStyle} actionLabel='Mark all as read' actionLabelStyle={styles.actionLabelStyle} />
                    {notifications.map((notification, index) => (
                        <NotificationCard
                            key={index}
                            title={notification.title}
                            message={notification.message}
                            timestamp={notification.timestamp}
                        />
                    ))}
                    {/* <SectionHeader title='Yesterday' actionLabel='Mark all as read' /> */}
                    <SectionHeader containerStyle={mergedStyle} title='Yesterday' titleStyle={styles.titleStyle} actionLabel='Mark all as read' actionLabelStyle={styles.actionLabelStyle} />
                    {notifications.map((notification, index) => (
                        <NotificationCard
                            key={index}
                            title={notification.title}
                            message={notification.message}
                            timestamp={notification.timestamp}
                        />
                    ))}
                    </>                            
                ) : (
                    <View style={styles.emptyContainer}>
                        <Text> Success </Text>
                        {/* <SuccessView
                            image={NotificationIcon}
                            title='No Notification'
                            description='There are no Notification were sent yet.'
                        /> */}
                    </View>
                )}
            </ScreenWrapper>
        )
    }
}

export default NotificationsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionLabelStyle: {
        fontWeight: 400,
    },
    titleStyle: {
        textTransform: 'uppercase',
        color: theme.secondaryText,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 18.75,
        letterSpacing: 0.75,
    },
    containerStyle: {
        margin: 0,
        paddingLeft: 24,
        paddingRight: 23,
        paddingBottom: 14,
    },
})