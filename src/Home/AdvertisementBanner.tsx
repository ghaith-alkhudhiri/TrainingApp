import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../Constants/theme';

interface Props {
    title: string;
    imageUrl?: any;
    description: string;
    cta: string;
}

export class AdvertisementBanner extends Component<Props> {
  render() {
    const {title, imageUrl, description, cta} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.advertisementContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.ctaBtn}>
                <Text style={styles.ctaText}>{cta}</Text>
            </View>
        </View>
        <Image source={imageUrl} style={styles.advertisementImg}/>
        {/* <Image source={{uri: imageUrl}} style={styles.advertisementImg} /> */}
      </View>
    )
  }
}

export default AdvertisementBanner;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 152,
        borderRadius: 13,
        flexDirection: 'row',
        backgroundColor: '#F4F6F9'
    },
    advertisementImg: {
        height: 152,
        width: 162,
        borderRadius: 13,
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: 0,
    },
    advertisementContent: {
        marginTop: 35,
        marginLeft: 28,
        gap: 10,
    },
    title: {
        color: theme.primary,
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: -0.3
    },
    description: {
        color: theme.primary,
        fontFamily: 'Inter',
        fontWeight: 300,
        fontSize: 14,
        lineHeight: 17,
        width: 153,
    },
    ctaBtn: {
        width: 110,
        height: 28,
        borderRadius: 4,
        backgroundColor: theme.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ctaText: {
        color: '#F4F6F9',
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: 500,
        lineHeight: 17,
    },
    imageMask: {
        width: 162,
        height: '100%',
    }
})