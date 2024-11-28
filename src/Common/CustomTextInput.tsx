import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    label: string;
    placeholder: string;
    value?: string;
    onChangeText?: (text: string) => void;
    style?: object;
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
        const { label, placeholder, style} = this.props;
        const { inputValue } = this.state;
        const variantStyle = this.getVariantStyle();
        return (
        <View style={[styles.container, style]}>
            {label ? <Text style={styles.label}>{label}</Text>: null}
            <TextInput 
                style={[styles.input, variantStyle]}
                placeholder={placeholder}
                value={inputValue}
                onChangeText={this.handleTextChange}

            />
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
        paddingTop: 8,
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
    rounded: {

    },
    outlined: {

    },
    default: {

    }
});