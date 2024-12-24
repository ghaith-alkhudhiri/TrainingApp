import { Pressable, StyleProp, StyleSheet, Text, TextStyle, ViewStyle, Image } from 'react-native'
import React, { Component } from 'react'
import theme from '../Constants/theme';
import { View } from 'react-native';
const ApplePayWhite = require('../Assets/Images/applePayWhite.png');
interface Props {
    label?: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    styleType?: 'normal' | 'secondary' | 'outline' | 'disabled' | 'apple';
    counter?: boolean;
    counterLabel?: string;
    number?: number;
}

export class CustomButton extends Component<Props> {
  render() {
    const {label, onPress, buttonStyle, textStyle, styleType, counter, counterLabel, number} = this.props;
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
        case 'apple':
            containerStyle.push(styles.appleButton);
            textStyling.push(styles.appleButtonText);
        default:
            break;
    }

    return (
        <>        
        {!counter &&
            <Pressable style={[containerStyle, buttonStyle]} onPress={onPress} disabled={styleType === 'disabled'}>
                <Text style={[textStyling, textStyle]}>{label}</Text>
                {styleType === 'apple' && (
                    <View style={{width: 55, height: 22}}>
                        <Image source={ApplePayWhite} style={{width: '100%', height: '100%'}} resizeMode='contain'  />
                    </View>
                )}
            </Pressable>
        }
        {counter && number && number > 0 ?
            <Pressable style={styles.counter} onPress={onPress}>
                <Text style={styles.counterLabel}>{number} {counterLabel}</Text>
            </Pressable>
            :
            <></>
        }
      </>
    )
  }
}

export default CustomButton;

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#0961F5',
        paddingHorizontal: 32,
        flexDirection: 'row',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
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
      backgroundColor: '#EAF2FF',
    },
    secondaryButtonText: {
        color: theme.primary,
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
    counter: {
        paddingVertical: 7,
        paddingHorizontal: 17,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
        borderRadius: 27,
        backgroundColor: theme.primary,
    },
    counterLabel: {
        color: '#F4F6F9',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17.5,
        textTransform: 'uppercase',
    },
    appleButton: {
        backgroundColor: '#000',      
    },
    appleButtonText: {
        color: '#FFF',
    }
});