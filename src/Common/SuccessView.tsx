import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    image: React.ComponentType;
    title: string;
    description: string;
}

export class SuccessView extends Component<Props> {
  render() {
    const {image: ImageComponent, title, description} = this.props;
    return (
      <View style={styles.container}>
        <ImageComponent />
        <View style={styles.successInfo}>
            <Text style={styles.successTitle}>{title}</Text>
            <Text style={styles.successDescription}>{description}</Text>
        </View>
      </View>
    )
  }
}

export default SuccessView;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        gap: 30,
    },
    successTitle: {
        fontSize: 27,
        fontWeight: 600,

    },
    successDescription: {
        color: '#8391A1',
        width: 226,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17
    },
    successInfo: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    }
})