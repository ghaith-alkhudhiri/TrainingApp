import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotificationCard from '../Notification/NotificationCard';
import ScreenWrapper from '../Layout/ScreenWrapper';
import SectionHeader from '../Home/SectionHeader';
import CustomButton from '../Common/CustomButton';
import theme from '../Constants/theme';
import MessageIcon from '../Assets/Icons/MessageIcon';

interface Message {
    id: number;
    title: string;
    message: string;
    timestamp: Date;
    status: 'read' | 'unread';
    group?: string;
    trainer?: string;
}

interface InboxScreenState {
    messages: Message[];
}

export class InboxScreen extends Component<{}, InboxScreenState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            messages: [
                {
                    id: 1,
                    title: 'Event Reminder',
                    message: 'You have an event at 3 PM.',
                    timestamp: new Date(),
                    status: 'unread',
                    group: 'Yoga Class',
                },
                {
                    id: 2,
                    title: 'Update Available',
                    message: 'A new update is available for your app.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 1)),
                    status: 'read',
                    trainer: 'John Doe',
                },
                {
                    id: 3,
                    title: 'Past Inbox',
                    message: 'This is an older Inbox.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
                    status: 'unread',
                    trainer: 'John Doe',
                },
                {
                    id: 4,
                    title: 'Past Inbox',
                    message: 'This is an older Inbox.',
                    timestamp: new Date(new Date().setDate(new Date().getDate() - 5)),
                    status: 'unread',
                    group: 'Yoga Class',
                },
            ],
        };
    }

    getUnreadCount = (): number => {
        const { messages } = this.state;
        return messages.filter((message) => message.status === 'unread').length;
    };

    markAllAsRead = (section: 'Groups' | 'Trainers') => {
        this.setState((prevState) => ({
            messages: prevState.messages.map((message) =>
                (section === 'Groups' && message.group) || (section === 'Trainers' && message.trainer)
                    ? { ...message, status: 'read' }
                    : message
            ),
        }));
    };

    render() {
        const unreadCount = this.getUnreadCount();
        const group = this.state.messages.filter((message) => message.group);
        const trainerMessages = this.state.messages.filter((message) => message.trainer);

        return (
            <ScreenWrapper
                title="Messages"
                rightElement={
                    <CustomButton
                        counter
                        number={unreadCount}
                        counterLabel="new"
                        onPress={() => {}}
                    />
                }
            >
                {this.state.messages.length === 0 ? (
                    <View style={styles.emptyContainer}>
                        <MessageIcon />
                        <Text>No message available.</Text>
                    </View>
                ) : (
                    <>
                        {group.length > 0 && (
                            <View style={{ marginHorizontal: -10 }}>
                                <SectionHeader
                                    title="Groups"
                                    titleStyle={styles.titleStyle}
                                    actionLabel="Mark all as read"
                                    actionLabelStyle={styles.actionLabelStyle}
                                    onPress={() => this.markAllAsRead('Groups')}
                                    containerStyle={styles.containerStyle}
                                />
                                {group.map((message: Message) => (
                                    <NotificationCard
                                        key={message.id}
                                        title={message.title}
                                        message={message.message}
                                        timestamp={message.timestamp}
                                        status={message.status}
                                    />
                                ))}
                            </View>
                        )}

                        {trainerMessages.length > 0 && (
                            <View style={{ marginHorizontal: -10 }}>
                                <SectionHeader
                                    title="Trainers"
                                    titleStyle={styles.titleStyle}
                                    actionLabel="Mark all as read"
                                    actionLabelStyle={styles.actionLabelStyle}
                                    onPress={() => this.markAllAsRead('Trainers')}
                                    containerStyle={styles.containerStyle}
                                />
                                {trainerMessages.map((message: Message) => (
                                    <NotificationCard
                                        key={message.id}
                                        title={message.title}
                                        message={message.message}
                                        timestamp={message.timestamp}
                                        status={message.status}
                                    />
                                ))}
                            </View>
                        )}
                    </>
                )}
            </ScreenWrapper>
        );
    }
}

export default InboxScreen;

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionLabelStyle: {
        fontWeight: '400',
    },
    titleStyle: {
        textTransform: 'uppercase',
        color: theme.secondaryText,
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 18.75,
        letterSpacing: 0.75,
    },
    containerStyle: {
        paddingLeft: 24,
        paddingRight: 23,
    },
});
