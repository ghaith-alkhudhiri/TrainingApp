import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../Constants/theme';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import ClockIcon from '../Assets/Icons/ClockIcon';

interface props {
  title: string;
  date: string;
  time: string;
  coach: string;
  imageUrl: any;
}

export class HighlightedClassCard extends Component<props> {
  render() {
    const {title, date, time, coach, imageUrl} = this.props
    return (
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Image source={{uri: imageUrl}} style={styles.image} />
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{coach}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <CalendarIcon color='#FFF' width={20} height={20}/>
            <Text style={styles.infoText}>{date}</Text>
          </View>
          <View style={styles.VerticalLine}></View>
          <View style={styles.textContainer}>
            <ClockIcon width={20} height={20} fill='#FFF'/>
            <Text style={styles.infoText}>{time}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default HighlightedClassCard

const styles = StyleSheet.create({
  rootContainer: {
    minHeight: 123,
    borderRadius: 7,
    backgroundColor: theme.primary,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 16.9,
    elevation: 16.9,
    paddingHorizontal: 20,
    gap: 13,
  },
  container: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 13,
  },
  image: {
    width: 43,
    height: 43,
    borderRadius: 29,
  },
  title: {
    color: '#FFF',
    fontFamily: theme.font,
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: -0.3,
  },
  text: {
    color: '#FFF',
    fontFamily: theme.font,
    fontSize: 13,
    fontWeight: 300,
    lineHeight: 21,
  },
  infoContainer: {
    flexDirection: 'row',
    maxHeight: 39,
    borderRadius: 5,
    backgroundColor: '#0750BF',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 9,
    gap: 18,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
  },
  VerticalLine: {
    height: 20,
    width: 1,
    backgroundColor: theme.primary,
  },
  infoText: {
    color: '#FFF',
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 21,
    alignItems: 'flex-start',
  },
})