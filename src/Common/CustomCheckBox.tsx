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
import CheckMarkIcon from '../Assets/Icons/CheckMarkIcon';
import theme from '../Constants/theme';

interface CheckBoxProps {
  label?: string;
  options: string[];
  removeOptionText?: boolean;
  selectedOptions: string[];
  onOptionToggle: (selectedOptions: string[]) => void;
  layout?: 'row' | 'column';
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  selectedOptionStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  boxColor?: string;
  selectedBoxColor?: string;
  icons?: React.ReactElement<any>[];
  checkboxSquareStyle?: ViewStyle;
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

    const newSelectedOptions = selectedOptions?.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    this.setState({ selectedOptions: newSelectedOptions });
    onOptionToggle(newSelectedOptions);
  };

  render() {
    const {
      label,
      options,
      removeOptionText,
      layout = 'column',
      containerStyle,
      optionStyle,
      selectedOptionStyle,
      textStyle,
      selectedTextStyle,
      boxColor,
      selectedBoxColor,
      icons,
      checkboxSquareStyle,
    } = this.props;
    const { selectedOptions } = this.state;

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
          const isSelected = selectedOptions.includes(option);

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
              onPress={() => this.handleOptionToggle(option)}
            >
              {/* Icon or Box */}
              {icons && icons[index] ? (
                React.cloneElement(icons[index], { selected: isSelected })
              ) : isSelected ? (
                <View
                  style={[
                    styles.checkboxSquare,
                    checkboxSquareStyle,
                    { backgroundColor: selectedBoxColor? selectedBoxColor : theme.primary },
                    { borderColor: selectedBoxColor? selectedBoxColor : theme.primary }
                  ]}
                >
                  <CheckMarkIcon width={14} height={14}/>
                </View>
              ) : (
                <View
                  style={[
                    styles.checkboxSquare,
                    checkboxSquareStyle,
                    { borderColor: boxColor? boxColor : '#D1D1D6' },
                  ]}
                />
              )}
              {/* Option Text */}
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
    width: '100%',
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
  checkboxSquare: {
    height: 20,
    width: 20,
    borderWidth: 0.5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  text: {
    color: '#2C2C2E',
    fontSize: 15,
    fontWeight: 600,
    textTransform: 'capitalize',
  },
});

export default CustomCheckBox;
