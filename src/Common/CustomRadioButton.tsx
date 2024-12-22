import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  I18nManager,
  ViewStyle,
  TextStyle,
  Image,
} from 'react-native';
import theme from '../Constants/theme';

interface RadioButtonOption {
  label: string;
  value: string;
  icon?: any;
}

interface RadioButtonProps {
  label?: string;
  options: RadioButtonOption[];
  removeOptionText?: boolean;
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  layout?: 'row' | 'column';
  containerStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  selectedOptionStyle?: ViewStyle;
  textStyle?: TextStyle;
  selectedTextStyle?: TextStyle;
  radioCircleStyle?: ViewStyle;
  radioColor?: string;
  selectedRadioColor?: string;
  icons?: React.ReactElement<any>[];
  subInfo?: any;
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
      radioCircleStyle,
      radioColor,
      selectedRadioColor,
      icons,
      subInfo,
      // radioCircleStyle,
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
          const isSelected = selectedOption === option.value;

          // different style fo Radio with subInfo
          if (subInfo) {
            return (
              <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                optionStyle,
                isSelected && [styles.selectedOption, selectedOptionStyle],
                removeOptionText && styles.removeOptionText,
                {flexDirection: 'row', justifyContent: 'space-between'}
              ]}
              onPress={() => this.handleOptionSelect(option.value)}
            >

              {/* Text */}
              <Text
                  style={[
                    styles.text,
                    textStyle,
                    isSelected && selectedTextStyle,
                  ]}
                >
                  {option.label}
                </Text>

              {/* Icon or Circle and subInfo */}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>

                {subInfo[index] && (
                  <View>
                    <Text style={{
                      color: '#000',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: -0.3,
                    }}>
                      {subInfo[index][0]}
                    </Text>
                    <Text style={{
                      color: '#797979',
                      textAlign: 'center',
                      fontFamily: 'Inter',
                      fontSize: 11,
                      fontWeight: 400,
                      lineHeight: 9,
                    }}>
                      {subInfo[index][1]}
                    </Text>
                  </View>
                )}
                  
                <View>
                  {icons && icons[index] ? (
                    React.cloneElement(icons[index], { selected: isSelected })
                  ) : (
                    <View
                      style={[
                        styles.radioCircle,
                        radioCircleStyle,
                        { borderColor: isSelected ? selectedRadioColor ? selectedRadioColor : theme.primary : radioColor ? radioColor : '#D1D1D6' },
                        {marginRight: 0, marginLeft: 17}
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
                </View>
              </View>
            </TouchableOpacity>
            )
          }

          return (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                isSelected && [styles.selectedOption, selectedOptionStyle],
                removeOptionText && styles.removeOptionText,
                { flexDirection: isRTL ? 'row-reverse' : 'row' },
                optionStyle,
              ]}
              onPress={() => this.handleOptionSelect(option.value)}
            >
              {/* Icon or Circle */}
              {icons && icons[index] ? (
                React.cloneElement(icons[index], { selected: isSelected })
              ) : (
                <View
                  style={[
                    styles.radioCircle,
                    radioCircleStyle,
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
              <View style={{gap : 13, flexDirection: 'row'}}>
                {/* Render Option Icon */}
                {option.icon && (
                  <View style={styles.optionIconContainer}>
                    <Image source={option.icon} style={{width: 26, height: 12, resizeMode: 'contain'}} />
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
                    {option.label}
                  </Text>
                }
              </View>
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
    borderWidth: 1,
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
  optionIconContainer: {
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4
  },
  optionIcon: {
    width: 22,
    height: 12,
    resizeMode: 'contain'
  }
});

export default CustomRadioButton;
