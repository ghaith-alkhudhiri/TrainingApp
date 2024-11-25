import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../Constants/theme';

interface Props {
    text: string;
}

export class ClassCategory extends Component<Props> {
  render() {
    const {text} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.categoryText}>{text}</Text>
      </View>
    )
  }
}

export default ClassCategory;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#F4F6F9',
        borderRadius: 6,
    },
    categoryText: {
        color: theme.primary,
        fontFamily: 'Inter',
        fontWeight: 400,
        lineHeight: 16,
    }
})