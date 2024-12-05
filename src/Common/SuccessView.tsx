import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'

interface Props {
    image: React.ComponentType;
    title: string;
    description: string;
    containerStyle?: ViewStyle;
    infoStyle?: ViewStyle;
    titleStyle?: TextStyle;
    descriptionStyle?: TextStyle;
}

export class SuccessView extends Component<Props> {
  render() {
    const {image: ImageComponent, title, description, containerStyle, infoStyle, titleStyle, descriptionStyle} = this.props;
    // Remove `gap` if it's explicitly set to `null`
    const computedInfoStyle = {
      ...styles.successInfo,
      ...infoStyle,
      ...(infoStyle?.gap === null ? { gap: undefined } : {}),
    };
    return (
      <View style={[containerStyle ? containerStyle : styles.container]}>
        <ImageComponent />
        <View style={computedInfoStyle}>
            <Text style={[titleStyle, styles.successTitle]}>{title}</Text>
            <Text style={[descriptionStyle, styles.successDescription]}>{description}</Text>
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