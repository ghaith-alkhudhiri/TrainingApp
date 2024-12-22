import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class PersonalTrainerCard extends Component {
  handleBookNow = () => {
    console.log('Book Now Pressed');
  };

  render() {
    return (
      <View style={styles.card}>
        {/* Trainer Image */}
        <Image
          source={require('../Assets/Images/noor.png')} // Replace with your image URL
          style={styles.image}
        />

        {/* Trainer Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.speciality}>Weight Loss Specialist</Text>

          {/* Additional Details */}
          <View style={styles.infoRow}>
            <Text style={styles.infoText}>⭐ 4.9</Text>
            <Text style={styles.infoText}>|</Text>
            <Text style={styles.infoText}>10+ years experience</Text>
          </View>
        </View>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton} onPress={this.handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
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
    margin: 16,
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  speciality: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6E6E6E',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#6E6E6E',
    fontWeight: '500',
  },
  bookButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
