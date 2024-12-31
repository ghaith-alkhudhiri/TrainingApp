import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TimerProps {
    initialTime: number; // in seconds
}

interface TimerState {
    timeLeft: number;
}

class Timer extends Component<TimerProps, TimerState> {
    private timerId: NodeJS.Timeout | null = null;

    constructor(props: TimerProps) {
        super(props);
        this.state = {
            timeLeft: props.initialTime,
        };
    }

    componentDidMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    startTimer = () => {
        this.timerId = setInterval(() => {
            this.setState((prevState) => {
                if (prevState.timeLeft <= 1) {
                    if (this.timerId) {
                        clearInterval(this.timerId);
                    }
                    return { timeLeft: 0 };
                }
                return { timeLeft: prevState.timeLeft - 1 };
            });
        }, 1000);
    };

    formatTime = (time: number) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return { hours, minutes, seconds };
    };

    render() {
        const { timeLeft } = this.state;
        const { hours, minutes, seconds } = this.formatTime(timeLeft);

        return (
            <View style={styles.container}>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{String(hours).padStart(2, '0')}</Text>
                </View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{String(minutes).padStart(2, '0')}</Text>
                </View>
                <Text style={styles.separator}>:</Text>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{String(seconds).padStart(2, '0')}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeBox: {
        width: 26,
        height: 'auto',
        backgroundColor: '#EAF2FF',
        borderRadius: 3,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        color: '#007AFF', // Replace with theme.primary
        fontFamily: 'System', // Replace with theme.font
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 17,
    },
    separator: {
        color: '#007AFF', // Replace with theme.primary
        fontFamily: 'System', // Replace with theme.font
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 17,
    },
});

export default Timer;