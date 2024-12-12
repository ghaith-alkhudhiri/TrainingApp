import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import StarIcon from '../../Assets/Icons/StartIcon';

interface Props {
    name: string;
    rating: number;
    reviewMsg: string;
}

export class ReviewItem extends Component<Props> {
  render() {
    const {name, rating, reviewMsg} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.infoContainer}>
                <View style={styles.ratingContainer}>
                    <StarIcon />
                    <Text>{rating}</Text>
                </View>
                <Text style={styles.publishedAtText}>2 Weeks ago</Text>
            </View>
        </View>
        <Text style={styles.reviewMsgText}>{reviewMsg}</Text>
      </View>
    )
  }
}

export default ReviewItem;

const styles = StyleSheet.create({
    container: {
        gap: 9,
        paddingVertical: 16,
        paddingHorizontal: 25,
        borderTopWidth: 1,
        borderColor: '#E0E0E0',
        borderBottomWidth: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoContainer: {
        gap: 3,
    },
    nameText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 16,
        fontWeight: 500,
    },
    ratingContainer: {
        flexDirection: 'row',
        gap: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    publishedAtText: {
        color: '#797979',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
    },
    reviewMsgText: {
        color: '#797979',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18,
    }

})