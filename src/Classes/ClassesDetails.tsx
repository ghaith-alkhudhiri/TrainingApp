import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import LevelIcon from '../Assets/Icons/LevelIcon';
import SeatsIcon from '../Assets/Icons/SeatsIcon';
import PriceIcon from '../Assets/Icons/PriceIcon';
import RatingIcon from '../Assets/Icons/RatingIcon';
import InfoCard from './InfoCard';
import ClassSection from './ClassSection';
import ClassSections from './ClassSections';

interface Props {
    imagesUrls: string[]
    route: any;
}

export class ClassesDetails extends Component<Props> {
    render() {
    const { route } = this.props;
    const { url } = route.params;

    const infoCards = [
        {
            icon: <LevelIcon />,
            value: "Expert",
            label: "Level"
        },
        {
            icon: <SeatsIcon />,
            value: "20",
            label: "Seats left"
        },
        {
            icon: <PriceIcon />,
            value: "200",
            label: "SAR"
        },
        {
            icon: <RatingIcon />,
            value: "4.5",
            label: 'Rating'
        }
        
    ]
    return (
        <ScreenWrapper heroImage heroImagesUrls={url} floatingBtn floatingBtnProps={{label: "Book Class", onPress: () => console.log("Book class clicked")}}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Vinyasa Yoga</Text>
                <Text style={styles.categoryText}>Hardcore and Yoga</Text>
            </View>
            <View style={styles.infoContainer}>
                {infoCards.map((infoCard, index) => (
                    <InfoCard key={index} icon={infoCard.icon} value={infoCard.value} label={infoCard.label} />
                ))}
                {/* <View style={styles.infoCardContainer}>
                    <View style={styles.infoIconContainer}>
                        <LevelIcon />
                    </View>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.levelTypeText}>Expert</Text>
                        <Text style={styles.levelText}>Level</Text>
                    </View>
                </View> */}
            </View>
            <ClassSections />
        </ScreenWrapper>
    )
  }
}

export default ClassesDetails;

const styles = StyleSheet.create({
    headerContainer: {
        gap: 6,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
    },
    categoryText: {
        color: '#797979',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 9
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5,
        paddingHorizontal: 24
    },
    infoCardContainer: {
        gap: 6,
    },
    infoIconContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        backgroundColor: '#EAF2FF',
    },
    levelTypeText: {
        color: '#0165FC',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontWeight: 600,
        lineHeight: 18.75,
    },
    levelText: {
        color: '#797979',
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 16.25,
    },
    infoTextContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});