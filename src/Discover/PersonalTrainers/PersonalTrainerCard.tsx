import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Star from '../../Assets/Icons/Star';
import theme from '../../Constants/theme';

interface Props {
  imageUrl: string;
  name: string;
  tags?: string[];
  rating: number;
  reviews: number;
  position: string;
}

export default class PersonalTrainerCard extends Component<Props> {
  handleBookNow = () => {
    console.log('Book Now Pressed');
  };

  render() {
    const { imageUrl, name, tags, rating, reviews, position } = this.props;
    return (
      <View style={styles.card}>
        <View style={{gap: 9, flexDirection: 'row'}}>
          <Image resizeMode='cover' source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.detailsContainer}>
            {tags &&
              <View style={{gap: 12, flexDirection: 'row'}}>
                {tags.map((tag, index) => (
                  <Text style={styles.tag} key={index}>{tag}</Text>
                ))}
              </View>
            }
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.specialty}>{position}</Text>
            </View>
            <View style={styles.infoRow}>
              <View style={{gap: 3, flexDirection: 'row'}}>
                <View style={{ flexDirection: 'row', gap: 2 }}>
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} filled={index < Math.floor(rating)} />
                  ))}
                </View>
                <Text style={styles.rating}>{rating}</Text>
              </View>
              <View style={{ width: 1, backgroundColor: '#E6E6E6'}} />
              <Text style={styles.reviews}>{reviews} Reviews</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={this.handleBookNow}>
          <Text style={styles.bookButtonText}>Book Session</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    overflow: 'hidden',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 0.05,
    shadowOffset: { width: 7, height: 12 },
    shadowRadius: 20,
    elevation: 3,
    margin: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    gap: 13,
    paddingVertical: 12,
    paddingHorizontal: 17,
  },
  image: {
    width: '27%',
    height: 92,
    borderRadius: 6,
  },
  detailsContainer: {
    width: '100%',
    gap: 8,
  },
  tag: {
    paddingVertical : 4,
    paddingHorizontal: 8,
    color: theme.primary,
    fontFamily: theme.font,
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 16,
    backgroundColor: '#F2F7FF',
    borderRadius: 21,
  },
  name: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  specialty: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 9,
  },
  infoRow: {
    flexDirection: 'row',
    gap: 16,
  },
  rating: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
    fontFamily: theme.font,
    letterSpacing: -0.3,
  },
  reviews: {
    color: '#898989',
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: '400',
    letterSpacing: -0.3,
  },
  bookButton: {
    backgroundColor: '#EAF2FF',
    paddingVertical: 11,
    alignItems: 'center',
    borderRadius: 7,
  },
  bookButtonText: {
    color: theme.primary,
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.3,
  },
});
