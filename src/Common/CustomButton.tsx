import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'

interface Props {
    label: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    styleType?: 'secondary' | 'outline' | 'disabled';
}

export class CustomButton extends Component<Props> {
  render() {
    const {label, onPress, buttonStyle, textStyle, styleType} = this.props;
    let containerStyle: StyleProp<ViewStyle> = [styles.btnContainer];
    let textStyling: StyleProp<TextStyle> = [styles.btnText];

    switch (styleType) {
        case 'secondary':
            containerStyle.push(styles.secondaryButton);
            textStyling.push(styles.secondaryButtonText);
            break;
        case 'outline':
            containerStyle.push(styles.outlineButton);
            textStyling.push(styles.outlineButtonText);
            break;
        case 'disabled':
            containerStyle.push(styles.disabledButton);
            textStyling.push(styles.disabledButtonText);
            break;
        default:
            break;
    }

    return (
      <Pressable style={[containerStyle, buttonStyle]} onPress={onPress} disabled={styleType === 'disabled'}>
        <Text style={[textStyling, textStyle]}>{label}</Text>
      </Pressable>
    )
  }
}

export default CustomButton;

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#0961F5',
        paddingHorizontal: 32,
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        flex: 1,
        borderRadius: 10,
        marginVertical: 5,
    },
    btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 24,
        fontFamily: 'Inter',
    },
    secondaryButton: {
      backgroundColor: '#FFD700',
    },
    secondaryButtonText: {
        color: '#000',
    },
    outlineButton: {
        borderWidth: 2,
        borderColor: '#246BFD',
        backgroundColor: 'transparent',
    },
    outlineButtonText: {
        color: '#246BFD',
    },
    disabledButton: {
        backgroundColor: '#C0C0C0',
    },
    disabledButtonText: {
        color: '#666',
    },
});