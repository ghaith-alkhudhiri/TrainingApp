import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // For icons
import theme from '../Constants/theme'; // Use your theme file

export default class EventPage extends Component {
  handleGetTickets = () => {
    console.log('Navigating to ticket purchase...');
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Header with image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../Assets/Images/img.png')} // Replace with your image URL
            style={styles.image}
          />
          <View style={styles.headerActions}>
            <TouchableOpacity>
              <Icon name="arrow-left" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share-variant" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Event Details */}
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>Weight loss of the month</Text>
          <Text style={styles.subtitle}>Jul Challenges</Text>

          {/* Event Details Section */}
          <View style={styles.detailsRow}>
            <View style={styles.detailItem}>
              <Icon name="calendar" size={24} color={theme.primary} />
              <Text style={styles.detailText}>24th June</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="clock" size={24} color={theme.primary} />
              <Text style={styles.detailText}>4:00 PM</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="timer-sand" size={24} color={theme.primary} />
              <Text style={styles.detailText}>2 Hour</Text>
            </View>
            <View style={styles.detailItem}>
              <Icon name="map-marker" size={24} color={theme.primary} />
              <Text style={styles.detailText}>Bahrain, Manama</Text>
            </View>
          </View>

          {/* About the Event */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About the event</Text>
            <Text style={styles.sectionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique,
              laoreet nibh sed, aliquet arcu. <Text style={styles.readMore}>Read more</Text>
            </Text>
          </View>

          {/* Event Agenda */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Event Agenda</Text>
            <View style={styles.agendaItem}>
              <Text style={styles.agendaTitle}>Registration</Text>
              <Text style={styles.agendaTime}>04:00 - 04:30</Text>
            </View>
            <View style={styles.agendaItem}>
              <Text style={styles.agendaTitle}>Sharing Results</Text>
              <Text style={styles.agendaTime}>04:30 - 05:30</Text>
            </View>
            <View style={styles.agendaItem}>
              <Text style={styles.agendaTitle}>Giveaways and rewards</Text>
              <Text style={styles.agendaTime}>05:30 - 06:00</Text>
            </View>
          </View>
        </ScrollView>

        {/* Footer Button */}
        <TouchableOpacity style={styles.footerButton} onPress={this.handleGetTickets}>
          <Text style={styles.footerButtonText}>Get Tickets</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerActions: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6E6E6E',
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  detailText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6E6E6E',
    lineHeight: 20,
  },
  readMore: {
    color: theme.primary,
    fontWeight: '500',
  },
  agendaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  agendaTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  agendaTime: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6E6E6E',
  },
  footerButton: {
    backgroundColor: theme.primary,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
