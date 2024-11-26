import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotificationCard from './NotificationCard';
// import SuccessView from './SuccessView';
import ScreenWrapper from '../../Layout/ScreenWrapper';
import SectionHeader from '../SectionHeader';
import CustomButton from '../../Common/CustomButton';
import theme from '../../Constants/theme';
import NotificationIcon from '../../Assets/Icons/NotificationIcon';

interface Notification {
    id: number;
    title: string;
    message: string;
    timestamp: Date;
    status: 'read' | 'unread';
}

interface GroupedNotifications {
    today: Notification[];
    yesterday: Notification[];
    older: Notification[];
}

interface NotificationsScreenState {
    notifications: Notification[];
}

export class NotificationsScreen extends Component<{}, NotificationsScreenState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notifications: [
                {
                    id: 1,
                    title: 'Event Reminder',
                    message: 'You have an event at 3 PM.',
                    timestamp: new Date(), // Today
                    status: 'unread',
                },
                {
                    id: 2,
                    title: 'Update Available',
                    message: 'A new update is available for your app.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
                    status: 'read',
                },
                {
                    id: 3,
                    title: 'Past Notification',
                    message: 'This is an older notification.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)), // Older
                    status: 'unread',
                },
                {
                    id: 4,
                    title: 'Past Notification',
                    message: 'This is an older notification.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)), // Older
                    status: 'unread',
                },
            ],
        };
    }

    getUnreadCount = (): number => {
        const { notifications } = this.state;
        return notifications.filter((notification) => notification.status === 'unread').length;
    };

    groupNotifications = (): GroupedNotifications => {
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        const isSameDay = (date1: Date, date2: Date): boolean =>
            date1.toDateString() === date2.toDateString();

        return this.state.notifications.reduce(
            (groups: GroupedNotifications, notification) => {
                if (isSameDay(new Date(notification.timestamp), today)) {
                    groups.today.push(notification);
                } else if (isSameDay(new Date(notification.timestamp), yesterday)) {
                    groups.yesterday.push(notification);
                } else {
                    groups.older.push(notification);
                }
                return groups;
            },
            { today: [], yesterday: [], older: [] }
        );
    };

    markAllAsRead = (section: keyof GroupedNotifications) => {
        const groupedNotifications = this.groupNotifications();

        // Get the IDs of the notifications in the specified section
        const notificationIdsToMark = groupedNotifications[section].map((notification) => notification.id);

        // Update the state for the specified section
        this.setState((prevState) => ({
            notifications: prevState.notifications.map((notification) =>
                notificationIdsToMark.includes(notification.id)
                    ? { ...notification, status: 'read' }
                    : notification
            ),
        }));
    };


    render() {
        const unreadCount = this.getUnreadCount();
        const groupedNotifications = this.groupNotifications();
        // const mergedStyle = { ...styles.containerStyle, paddingTop: 24 };
        return (
            <ScreenWrapper
                title="Notifications"
                rightElement={
                    <CustomButton
                        counter
                        number={unreadCount}
                        counterLabel="new"
                        onPress={() => {}}
                    />
                }
            >
                {this.state.notifications.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <NotificationIcon/>
                        <Text>No notifications available.</Text>
                        {/* <SuccessView
                            image={NotificationIcon}
                            title='No Notification'
                            description='There are no Notification were sent yet.'
                        /> */}
                    </View>
                ) : (
                    Object.entries(groupedNotifications).map(([key, group]) => (
                        group.length > 0 && (
                            <View style={{marginHorizontal: -10}} key={key}>
                                <SectionHeader
                                    title={key.charAt(0).toUpperCase() + key.slice(1)} // Capitalize 'today', 'yesterday', etc.
                                    titleStyle={styles.titleStyle}
                                    actionLabel="Mark all as read"
                                    actionLabelStyle={styles.actionLabelStyle}
                                    onPress={() => this.markAllAsRead(key as keyof GroupedNotifications)}
                                    containerStyle={styles.containerStyle}
                                />
                                {group.map((notification: Notification) => (
                                    <NotificationCard
                                        key={notification.id}
                                        title={notification.title}
                                        message={notification.message}
                                        timestamp={notification.timestamp}
                                    />
                                ))}
                            </View>
                        )
                    ))
                )}
            </ScreenWrapper>
        )
    }
}

export default NotificationsScreen;

const styles = StyleSheet.create({
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
        // margin: 0,
        paddingLeft: 24,
        paddingRight: 23,
        // paddingBottom: 14,
    },
})