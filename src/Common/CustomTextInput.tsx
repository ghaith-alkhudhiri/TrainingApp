import { Image, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'

interface Props {
    label?: string;
    placeholder: string;
    placeholderTextColor?: string;
    value?: string;
    icon?: any;
    onChangeText?: (text: string) => void;
    style?: object;
    inputContainerStyle?: ViewStyle;
    variant?: 'default' | 'rounded' | 'outlined';
}

interface State {
    inputValue: string;
}

export class CustomTextInput extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            inputValue: props.value || '',
        };
    }

    handleTextChange = (text: string) => {
        this.setState({inputValue: text});
        if(this.props.onChangeText){
            this.props.onChangeText(text);
        }
    };

    getVariantStyle(){
        const {variant} = this.props;
        switch(variant){
            case 'rounded':
                return styles.rounded;
            case 'outlined':
                return styles.outlined;
            default:
                return styles.default;
        }
    }
    render() {
        const { label, placeholder, placeholderTextColor, icon, style, inputContainerStyle} = this.props;
        const { inputValue } = this.state;
        const variantStyle = this.getVariantStyle();
        return (
        <View style={[styles.container, style]}>
            {label ? <Text style={styles.label}>{label}</Text>: null}
            <View style={[styles.inputContainer, inputContainerStyle]}>
                {icon && icon}
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor || '#999'}
                    value={inputValue}
                    onChangeText={this.handleTextChange}

                />
            </View>
        </View>
        )
    }
}

export default CustomTextInput;

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderWidth: 2,
        borderColor: "#E2E8F0",
        backgroundColor: "#FFF",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    label: {
        fontSize: 12,
        fontFamily: "Inter",
        fontWeight: 400,
        lineHeight: 16,
        letterSpacing: 0.04,
        color: '#64748B',
    },
    input: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 24
    },
    inputContainer: {
        gap: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 24,
        height: 24,
    },
    rounded: {

    },
    outlined: {

    },
    default: {

    }
});