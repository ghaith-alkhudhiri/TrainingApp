import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  // I18nManager,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CheckBoxProps {
  options: string[];
  selectedOptions: string[]; // Allow multiple selections
  onOptionToggle: (selectedOptions: string[]) => void;
  layout?: 'row' | 'column';
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  selectedOptionStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  boxColor?: string;
  selectedBoxColor?: string;
  icons?: React.ReactElement<any>[]; // Optional icons for options
}

interface CheckBoxState {
  selectedOptions: string[];
}

class CustomCheckBox extends Component<CheckBoxProps, CheckBoxState> {
  constructor(props: CheckBoxProps) {
    super(props);
    this.state = { selectedOptions: props.selectedOptions };
  }

  handleOptionToggle = (option: string) => {
    const { selectedOptions } = this.state;
    const { onOptionToggle } = this.props;

    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    this.setState({ selectedOptions: newSelectedOptions });
    onOptionToggle(newSelectedOptions);
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
      boxColor = '#000',
      selectedBoxColor = '#007bff',
      icons,
    } = this.props;
    const { selectedOptions } = this.state;

    // const isRTL = I18nManager.isRTL;
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
          const isSelected = selectedOptions.includes(option);

          return (
            <TouchableOpacity
              key={option}
              style={[
                styles.option,
                optionStyle,
                isSelected && [styles.selectedOption, selectedOptionStyle],
              ]}
              onPress={() => this.handleOptionToggle(option)}
            >
              {/* Icon or Box */}
              {icons && icons[index] ? (
                React.cloneElement(icons[index], { selected: isSelected })
              ) : (
                <View
                  style={[
                    styles.checkboxSquare,
                    { borderColor: isSelected ? selectedBoxColor : boxColor },
                  ]}
                >
                  {isSelected && (
                    <View
                      style={[
                        styles.selectedCheck,
                        { backgroundColor: selectedBoxColor },
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
                    // { textAlign: isRTL ? 'right' : 'left' },
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
  checkboxSquare: {
    height: 20,
    width: 20,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  selectedCheck: {
    height: 12,
    width: 12,
  },
  text: {
    fontSize: 16,
  },
  selectedText: {
    fontWeight: 'bold',
  },
});

export default CustomCheckBox;
