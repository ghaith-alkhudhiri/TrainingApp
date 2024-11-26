import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'

interface SocialMediaBtnProps {
    icon: any;
    onPress: () => void;
    style?: ViewStyle;
}

export class SocialMediaBtn extends Component<SocialMediaBtnProps> {
  render() {
    const { icon, onPress, style} = this.props;
    return (
    <Pressable style={[styles.socialProviderCard, style]} onPress={onPress}>
        {icon}
    </Pressable>
    )
  }
}

export default SocialMediaBtn;

const styles = StyleSheet.create({
    socialProviderCard: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8ECF4',
        backgroundColor: '#FFF',
    }
})