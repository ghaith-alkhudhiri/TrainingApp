import { StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    title: string;
}

export class SectionWrapper extends Component<Props> {
  render() {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{this.props.title}</Text>
            {this.props.children}
        </View>
    )
  }
}

export default SectionWrapper;

const styles = StyleSheet.create({
    sectionContainer: {
        gap: 10,
    },
    sectionTitle: {
        color: '#000',
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    }
});