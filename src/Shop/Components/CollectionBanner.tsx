import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import theme from '../../Constants/theme';
import RightArrow from '../../Assets/Icons/RightArrow';

interface Props {
  category: string;
  imageUrl: string;
  onPress: () => void;
}

export class CollectionBanner extends Component<Props> {
  render() {
    const { category, imageUrl, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri : imageUrl}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{category}</Text>
          <View style={styles.collectionRow}>
            <Text style={styles.collectionText}>Collection</Text>
            <RightArrow color="#1E1E1E" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 156,
    borderRadius: 10,
    backgroundColor: '#F4F6F9',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    overflow: 'hidden',
  },
  textContainer: {
    alignSelf: 'center',
    gap: 8,
    // paddingLeft: 32,
    // paddingBottom: 32,
    // flex: 1,
    position: 'absolute', // Positions the text on top of the image
    top: 58,
    left: 32,
    right: 32, // Add padding as needed
    zIndex: 1, 
  },
  title: {
    color: '#141718',
    fontFamily: theme.font,
    fontSize: 28,
    fontWeight: '500',
    lineHeight: 34,
    letterSpacing: -0.6,
  },
  collectionRow: {
    flexDirection: 'row',
    gap: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#1E1E1E',
    width: 88,
  },
  collectionText: {
    color: '#1E1E1E',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    width: 170,
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
    left: 150,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default CollectionBanner;
