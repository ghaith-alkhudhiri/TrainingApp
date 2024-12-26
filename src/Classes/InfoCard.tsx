import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    icon?: any;
    value?: string;
    label?: string;
}

export class InfoCard extends Component<Props> {
  render() {
    const {icon, value, label} = this.props;
    return (
        <View style={styles.infoCardContainer}>
            {/* Icon */}
            <View style={styles.infoIconContainer}>
                {/* <LevelIcon /> */}
                {icon}
            </View>
            <View style={styles.infoTextContainer}>
                <Text style={styles.levelTypeText}>{value}</Text>
                <Text style={styles.levelText}>{label}</Text>
            </View>
        </View>
    )
  }
}

export default InfoCard;

const styles = StyleSheet.create({
    infoCardContainer: {
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoIconContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
        backgroundColor: '#EAF2FF',
        width: 45,
        height: 45,
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