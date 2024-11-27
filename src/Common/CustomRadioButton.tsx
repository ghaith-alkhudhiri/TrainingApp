import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  I18nManager,
  ViewStyle,
  TextStyle,
} from 'react-native';

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
    this.state = { selectedOption: props.selectedOption };
  }

  handleOptionSelect = (option: string) => {
    this.setState({ selectedOption: option });
    this.props.onOptionSelect(option);
  };

  render() {
    const {
      options,
      layout = 'column',
      containerStyle,
      optionStyle,
      selectedOptionStyle,
      textStyle,
      selectedTextStyle,
      radioColor = '#000',
      selectedRadioColor = '#007bff',
      icons,
    } = this.props;
    const { selectedOption } = this.state;

    const isRTL = I18nManager.isRTL;
    const isRowLayout = layout === 'row';

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          isRowLayout ? styles.row : styles.column,
        ]}
      >
        {options.map((option, index) => {
          const isSelected = selectedOption === option;

          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                optionStyle,
                isSelected && [styles.selectedOption, selectedOptionStyle],
              ]}
              onPress={() => this.handleOptionSelect(option)}
            >
              {/* Icon or Circle */}
              {icons && icons[index] ? (
                React.cloneElement(icons[index], { selected: isSelected })
              ) : (
                <View
                  style={[
                    styles.radioCircle,
                    { borderColor: isSelected ? selectedRadioColor : radioColor },
                  ]}
                >
                  {isSelected && (
                    <View
                      style={[
                        styles.selectedRb,
                        { backgroundColor: selectedRadioColor },
                      ]}
                    />
                  )}
                </View>
              )}

              {/* Optional Text */}
              {option ? (
                <Text
                  style={[
                    styles.text,
                    textStyle,
                    isSelected && [styles.selectedText, selectedTextStyle],
                    { textAlign: isRTL ? 'right' : 'left' },
                  ]}
                >
                  {option}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
  option: {
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
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedRb: {
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontWeight: 'bold',
  },
});

export default CustomRadioButton;
