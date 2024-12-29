import { Image, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import theme from '../../Constants/theme'
import Star from '../../Assets/Icons/Star'

interface Props {
    imageUrl: string;
    title: string;
    price: number;
    rating: number;
}

export class ItemCard extends Component<Props> {
  render() {
    const {imageUrl, title, price, rating} = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} 
        style={styles.image}
        resizeMode='cover'/>
        <View style={styles.infoContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price} SR</Text>
            </View>
            <View style={styles.ratingContainer}>
                <Star color='#FCBB44' />
                <Text style={styles.rating}>{rating}</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    gap: 13,
  },
  image: {
    width: 157,
    height: 152,
    borderRadius: 7,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    gap: 6,
  },
  title: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
  },
  price: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17,
  },
  ratingContainer: {
    gap: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#797979',
    fontFamily: theme.font,
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 21,
  },
});

export default ItemCard