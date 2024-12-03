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
import theme from '../Constants/theme';

interface RadioButtonProps {
  label?: string;
  options: string[];
  removeOptionText?: boolean;
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
      label,
      options,
      removeOptionText,
      layout,
      containerStyle,
      optionStyle,
      selectedOptionStyle,
      textStyle,
      selectedTextStyle,
      radioColor,
      selectedRadioColor,
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
        {label && <Text style={styles.label}>{label}</Text>}
        {options.map((option, index) => {
          const isSelected = selectedOption === option;

          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                optionStyle,
                isSelected && [styles.selectedOption, selectedOptionStyle],
                removeOptionText && styles.removeOptionText,
                { flexDirection: isRTL ? 'row-reverse' : 'row' }
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
                    { borderColor: isSelected ? selectedRadioColor ? selectedRadioColor : theme.primary : radioColor ? radioColor : '#D1D1D6' },
                  ]}
                >
                  {isSelected && (
                    <View
                      style={[
                        styles.selectedRb,
                        { backgroundColor: selectedRadioColor ? selectedRadioColor : theme.primary },
                      ]}
                    />
                  )}
                </View>
                )}

              {/* Optional Text */}
              {removeOptionText ? (null) :
                <Text
                  style={[
                    styles.text,
                    textStyle,
                    isSelected && selectedTextStyle,
                    { textAlign: isRTL ? 'right' : 'left' },
                  ]}
                >
                  {option}
                </Text>
            }
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
  label: {
    textAlign: 'left',
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18.75,
  },
  option: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    borderRadius: 6,
    margin: 5,
    width: '100%',
    flex: 1,
  },
  removeOptionText: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 0,
    margin: 5,
    width: '100%',
  },
  selectedOption: {
    borderColor: theme.primary,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 10,
  },
  
  selectedRb: {
    height: 10,
    width: 10,
    borderRadius: 10,
    position: 'absolute',
    top: '50%', // Center it vertically
    left: '50%', // Center it horizontally
    transform: [
      { translateX: '-50%' }, // Adjust the position back by half the width
      { translateY: '-50%' }, // Adjust the position back by half the height
    ],
  }
  ,
  text: {
    color: '#2C2C2E',
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
});

export default CustomRadioButton;
