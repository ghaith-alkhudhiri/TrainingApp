import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ClockIcon from '../Assets/Icons/ClockIcon';
import EventCalendarIcon from '../Assets/Icons/EventCalendarIcon';
import theme from '../Constants/theme';

interface Props {
    imageUrl: string;
    title: string;
    duration: number;
    date: Date;
}

export class EventCard extends Component<Props> {
    formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('en-GB', options).format(date);
      }
  render() {
    const {imageUrl, title, duration, date} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl }} />
        <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.detailsRow}>
                <View style={styles.infoRow}>
                    <ClockIcon fill={theme.primary} />
                    <Text>{duration} hour</Text>
                </View>
                <View style={styles.infoRow}>
                    <EventCalendarIcon fill={theme.primary} />
                    <Text>{this.formatDate(date)}</Text>
                </View>
            </View>
        </View>
      </View>
    )
  }
}

export default EventCard;

const styles = StyleSheet.create({
    container: {
        width: 193,
    },
    title: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 21,
    },
    image: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 7,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FDFDFD',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 1,
    },
    detailsRow: {
        flexDirection: 'row',
        gap: 15,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    }

})