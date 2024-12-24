import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import theme from '../../Constants/theme';
import ClockIcon from '../../Assets/Icons/ClockIcon';
import CalendarIcon from '../../Assets/Icons/CalendarIcon';
import { NavProps } from '../../types';

interface Props {
  imageUrl: string;
  title: string;
  tags: string[];
  time: string;
  date: string;
  CTA?: string;
}

type CardProps = Props & NavProps;

export default class EventCard extends Component<CardProps> {
  handleJoinEvent = () => {
    const { navigation, ...eventProps } = this.props;
    navigation.navigate('EventDetails', { ...eventProps });
  };  

  render() {
    const { imageUrl, title, tags, time, date, CTA } = this.props;

    return (
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <View>
            <ImageBackground
              resizeMode="cover"
              style={styles.image}
              imageStyle={{ top: 0 }}
              source={{ uri: imageUrl }}
            />

            {/* Tags */}
            <View style={styles.tagsContainer}>
              {tags.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>

            {/* Event Details */}
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>

              <View style={{ height: 1, backgroundColor: '#ECECEC' }} />

              {/* Time and Date */}
              <View style={styles.infoRow}>
                <View style={styles.infoItem}>
                  <ClockIcon />
                  <Text style={styles.infoText}>{time}</Text>
                </View>
                <View style={styles.infoItem}>
                  <CalendarIcon filled />
                  <Text style={styles.infoText}>{date}</Text>
                </View>
              </View>
            </View>
          </View>
          
          {/* Join Button */}
          <TouchableOpacity style={styles.joinButton} onPress={this.handleJoinEvent}>
            <Text style={styles.joinButtonText}>{CTA ? CTA : 'Join Event'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 3,
    margin: 1,
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
  infoContainer: {
    gap: 13,
  },
  image: {
    width: '100%',
    height: 106,
    resizeMode: 'cover',
    marginBottom: 9,
    borderRadius: 5,
    overflow: 'hidden',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  tag: {
    backgroundColor: '#F2F7FF',
    color: theme.primary,
    fontSize: 10,
    fontWeight: '500',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontFamily: theme.font,
  },
  detailsContainer: {
    gap: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
    fontFamily: theme.font,
    letterSpacing: -0.3,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 22,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 21,
  },
  joinButton: {
    backgroundColor: '#EAF2FF',
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 7,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: theme.primary,
    fontFamily: theme.font,
    letterSpacing: -0.3,
  },
});
