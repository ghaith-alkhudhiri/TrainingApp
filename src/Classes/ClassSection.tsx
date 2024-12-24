import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import LineDividier from '../Common/LineDivider';


interface Props {
    title: string;
    description?: string;
    details?: {title: string, value: string}[];
}

export class ClassSection extends Component<Props> {
  render() {
    const {title, description, details} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <LineDividier />
        {description && (
            <Text style={styles.descriptionText}>{description}</Text>
        )}
        {details && details.length > 0 && (
            <View style={styles.detailsContainer}>
                {details.map((row, index) => (
                    <View key={index} style={styles.rowContainer}>
                        <Text style={styles.detailTitle}>{row.title}</Text>
                        <Text style={styles.detailValue}>{row.value}</Text>
                    </View>
                ))}
            </View>
        )}
      </View>
    )
  }
}

export default ClassSection;

const styles = StyleSheet.create({
    container: {
        // gap: 8,
    },
    detailsContainer: {
        gap: 6,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sectionTitle: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600
    },
    descriptionText: {
        color: '#797979',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
    detailTitle: {
        color: '#647488',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 18
    },
    detailValue: {
        color: '#141414',
        textAlign: 'right',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 18
    }
});