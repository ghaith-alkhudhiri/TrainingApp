import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, Text } from 'react-native';

interface RadioButtonProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  layout?: 'row' | 'column';
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  selectedOptionStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  radioColor?: string;
  selectedRadioColor?: string;
  icons?: React.ReactElement<any>[];
}

interface RadioButtonState {
  selectedOption: string;
}

class CustomRadioButton extends Component<RadioButtonProps, RadioButtonState> {
  constructor(props: RadioButtonProps) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption,
    };
  }

  handleOptionSelect = (option: string) => {
    this.setState({ selectedOption: option });
    this.props.onOptionSelect(option);
  };

  render() {
    const {
      options,
      layout,
      optionStyle,
      selectedOptionStyle,
      textStyle,
      selectedTextStyle,
      radioColor,
      selectedRadioColor,
      containerStyle,
      icons,
    } = this.props;
    const { selectedOption } = this.state;
    const isRowLayout = layout === 'row';

    return (
      <View style={[styles.container, containerStyle, isRowLayout ? [styles.row, {flexWrap: 'wrap'} ] : styles.column]}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              optionStyle,
              selectedOption === option && (selectedOptionStyle || styles.selectedOption),
            ]}
            onPress={() => this.handleOptionSelect(option)}
          >
            {icons && React.cloneElement(icons[index], { selected: selectedOption === option })}
            
            {!icons && (
              <View style={[
                styles.radioCircle,
                { borderColor: selectedOption === option ? (selectedRadioColor || '#000') : (radioColor || '#000') }
              ]}>
                {selectedOption === option && (
                  <View style={[styles.selectedRb, { backgroundColor: selectedRadioColor || '#000' }]} />
                )}
              </View>
            )}

            <Text style={[
              styles.text,
              textStyle,
              selectedOption === option && (selectedTextStyle || styles.selectedText),
            ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  option: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
  },
  selectedOption: {
    borderColor: '#007bff',
    backgroundColor: '#e7f0ff',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  selectedText: {
    fontSize: 16,
  }
});

export default CustomRadioButton;