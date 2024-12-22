import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    label: string;
    children: any;
}

export class CheckoutSection extends Component<Props> {
  render() {
    const { label, children } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{label}</Text>
        {children}
    </View>
    )
  }
}

export default CheckoutSection;

const styles = StyleSheet.create({
    container: {
        gap: 19
    },
    title: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
    }
});