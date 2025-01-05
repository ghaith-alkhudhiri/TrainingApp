import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

interface AmountInputComponentProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

interface AmountInputComponentState {
    realPart: string;
    decimalPart: string;
    realPartWidth: number;
    decimalPartWidth: number;

}

class AmountInputComponent extends Component<AmountInputComponentProps, AmountInputComponentState> {
    constructor(props: AmountInputComponentProps) {
        super(props);
        const [realPart, decimalPart] = props.value.split('.') || ['0', '00'];
        this.state = {
            realPart,
            decimalPart,
            realPartWidth: 20,
            decimalPartWidth: 20,
        };
    }

    handleRealPartChange = (value: string) => {
        this.setState({ realPart: value});
        this.updateCombinedValue(value, this.state.decimalPart);
        this.updateWidth(value, 'realPart');
    };

    handleDecimalPartChange = (value: string) => {
        const formattedValue = value.slice(0, 2);
        this.setState({ decimalPart: formattedValue });
        this.updateCombinedValue(this.state.realPart, formattedValue);
        this.updateWidth(formattedValue, 'decimalPart');
    }

    updateWidth = (text: string, part: 'realPart' | 'decimalPart') => {
        const fontSize = part === 'realPart' ? 25 : 15;
        const textWidth = Math.max(text.length * fontSize * 0.53, 20);
        if(part === 'realPart'){
            this.setState({realPartWidth: textWidth });
        } else {
            this.setState({ decimalPartWidth: textWidth });
        }
    }

    updateCombinedValue = (realPart: string, decimalPart: string) => {
        const combinedValue = `${realPart}.${decimalPart}`;
        this.props.onChange(combinedValue);
    }


    render() {
        const { label } = this.props;
        const { realPart, decimalPart, realPartWidth, decimalPartWidth } = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.label}</Text>
                <View style={styles.inputContainer}>
                    
                    <TextInput
                        style={[styles.input, styles.realPartInput, {width: realPartWidth}]}
                        value={realPart}
                        onChangeText={this.handleRealPartChange}
                        // placeholder='0.00'
                        keyboardType="numeric"
                        placeholder='0'
                    />
                    <Text style={styles.dot}>.</Text>
                    <TextInput 
                        style={[styles.input, styles.decimalPartInput, { width: decimalPartWidth} ]}
                        value={decimalPart}
                        onChangeText={this.handleDecimalPartChange}
                        keyboardType='numeric'
                        placeholder='00'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 7,
        shadowColor: 'rgba(98, 148, 253, 1)',
        shadowOffset: { width: 0, height: 4},
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 4,
    },
    label: {
        fontSize: 15,
        color: "#0165FC",
        fontFamily: "Inter",
        fontWeight: 400,
        lineHeight: 18.75,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    realPartInput: {
        fontSize: 25,
        // backgroundColor: 'red',
        // textAlignVertical: "bottom",
    },
    decimalPartInput: {
        fontSize: 15,
        // backgroundColor: 'yellow',
        paddingBottom: 1,
    },
    input: {
        // backgroundColor: 'blue'
    },
    dot: {
        marginHorizontal: 2,
    }
});

export default AmountInputComponent;