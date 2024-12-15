import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import LevelIcon from '../Assets/Icons/LevelIcon';

interface Props {
    imagesUrls: string[]
    route: any;
}

export class ClassesDetails extends Component<Props> {
    render() {
    const { route } = this.props;
    const { url } = route.params;
    return (
        <ScreenWrapper heroImage heroImagesUrls={url} floatingBtn floatingBtnProps={{label: "Book Class", onPress: () => console.log("Book class clicked")}}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Vinyasa Yoga</Text>
                <Text style={styles.categoryText}>Hardcore and Yoga</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoCardContainer}>
                    {/* Icon */}
                    <View style={styles.infoIconContainer}>
                        <LevelIcon />
                    </View>
                    <View style={styles.infoTextContainer}>
                        <Text style={styles.levelTypeText}>Expert</Text>
                        <Text style={styles.levelText}>Level</Text>
                    </View>
                </View>
            </View>
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
        justifyContent: 'space-between'
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