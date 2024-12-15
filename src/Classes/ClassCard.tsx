import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import NameIcon from '../Assets/Icons/NameIcon';
import ClockIcon from '../Assets/Icons/ClockIcon';
import ClassCategory from './ClassCategory';
import theme from '../Constants/theme';
import StarIcon from '../Assets/Icons/StartIcon';


interface ClassCardProps {
    url?: string;
    categories?: string[];
    title: string;
    rating?: number;
    price?: number;
    coachName: string;
    time: string;
    navigation: any;
}

interface ClassCardState {

}

export class ClassCard extends Component<ClassCardProps, ClassCardState> {
    navigateToClassesDetails = () => {
        
        this.props.navigation.navigate("ClassDetails", {
            url: [this.props.url]
        });
    }
  render() {
    const {title, coachName, time, price, url, categories, rating} = this.props;
    return (
      <Pressable style={styles.container} onPress={this.navigateToClassesDetails}>
        <Image style={styles.classImg} source={{uri: url}} />
        <View style={styles.cardContent}>
            <View style={styles.categoriesAndRatingRow}>
                { categories && 
                    <View style={styles.categoriesContainer}>
                        {categories.map((category, index) => (
                            <ClassCategory text={category} key={index} />
                        ))}
                    </View>
                }
                <View style={styles.ratingContainer}>
                    <StarIcon />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.titleText}>{title}</Text>
                <View style={styles.iconRow}>
                    <NameIcon fill={theme.primary} />
                    <Text style={styles.coachNameText}>{coachName}</Text>
                </View>
                <View style={styles.iconRow}>
                    <ClockIcon fill={theme.primary} />
                    <Text style={styles.timeText}>{time}</Text>
                </View>
            </View>
            <Text style={styles.priceText}>{price} RS</Text>
        </View>
      </Pressable>
    )
  }
}

export default ClassCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 9,
        paddingHorizontal: 11,
        flexDirection: 'row',
        columnGap: 20,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FDFDFD',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 1,},
        shadowOpacity: 0.03,
        shadowRadius: 16.9,
        elevation: 1,
    },
    cardContent: {
        gap: 10,
        flex: 1,
    },
    classImg: {
        width: 99,
        height: 116,
        borderRadius: 6,
        resizeMode: 'cover'
    },
    iconRow: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    categoriesAndRatingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: -0.3,
        fontFamily: 'Inter',
    },
    coachNameText: {
        color: '#000',
        fontWeight: 300,
        fontFamily: 'Inter',
        lineHeight: 21,
    },
    timeText: {
        color: '#000',
        fontWeight: 300,
        fontFamily: 'Inter',
        lineHeight: 21,
    },
    priceText: {
        color: theme.primary,
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 17.5,
    },
    categoriesContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    ratingText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 400,

    }
});