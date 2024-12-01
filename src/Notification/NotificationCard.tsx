import React, { Component } from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

interface NotificationCardProps {
    title: string;
    message: string;
    timestamp: Date;
    status: 'read' | 'unread';
}

const randomColor = () => {
    const colors = ['#CDF8DD', '#F8D2CD', '#DBEAFE'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const timeSince = (timestamp: Date): string => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
        return weeks + (weeks === 1 ? 'w' : 'w');
    } else if (days > 0) {
        return days + (days === 1 ? 'd' : 'd');
    } else if (hours > 0) {
        return hours + (hours === 1 ? 'h' : 'h');
    } else if (minutes > 0) {
        return minutes + (minutes === 1 ? 'm' : 'm');
    } else {
        return seconds + (seconds === 1 ? 's' : 's');
    }
};

export class NotificationCard extends Component<NotificationCardProps, { isHovered: boolean }> {
    constructor(props: NotificationCardProps) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { title, message, timestamp, status } = this.props;
        const { isHovered } = this.state;
        const bgColor = randomColor();
        const bgColorState = isHovered ? '#EFF6FF' : 'transparent';

        // Apply bold text style and border for unread notifications
        const unreadStyle = status === 'unread' ? styles.unread : {};

        return (
            <Pressable
                onPressIn={this.handleMouseEnter}
                onPressOut={this.handleMouseLeave}
            >
                <View style={[styles.container, { backgroundColor: bgColorState }]}>
                    <View style={[styles.card, unreadStyle]}>
                        <View style={[styles.image, { backgroundColor: bgColor }]} />
                        <View style={{ flex: 1 }}>
                            <View style={styles.header}>
                                <Text style={styles.title}>{title}</Text>
                                <Text style={styles.timestamp}>{timeSince(timestamp)}</Text>
                            </View>
                            <Text style={styles.message}>{message}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        );
    }
}

export default NotificationCard;

const styles = StyleSheet.create({
    container: {
        borderColor: '#E5EBF3',
        borderWidth: 1,
        flex: 1,
    },
    card: {
        paddingVertical: 16,
        paddingHorizontal: 27,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 7,
    },
    message: {
        fontSize: 13,
        color: '#797979',
        fontWeight: '400',
        flexWrap: 'wrap',
    },
    timestamp: {
        fontSize: 13,
        color: '#797979',
        textAlign: 'right',
        fontWeight: '400',
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    unread: {
        backgroundColor: '#EFF6FF',
    },
});
