import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react'
import Dropdown from '../Common/ModalDropdown';
import theme from '../Constants/theme';

interface Props {
    title: string;
    onPress?: () => void;
    showActionBtn: boolean;
    showDropdown?: boolean;
    counter?: number;
    actionLabel?: string;
    actionLabelStyle?: TextStyle;
    titleStyle?: TextStyle;
    containerStyle?: ViewStyle;
    selectedView?: 'Weekly' | 'Monthly' | 'Yearly';
    onViewChange?: (selectedView: 'Weekly' | 'Monthly' | 'Yearly') => void;
}

interface State {
  selectedValue: string;
}

export class SectionHeader extends Component<Props, State> {
  static defaultProps = {
    showActionBtn: true,
    onPress: () => {},
  }

  constructor(props: Props){
    super(props);
    this.state = {
      selectedValue: '',
    }
  }

  handleValueChange = (value: string) => {
    this.setState({selectedValue: value});
  }
  render() {
    const {title, onPress, showActionBtn, showDropdown, counter, actionLabel, actionLabelStyle, titleStyle, containerStyle} = this.props;
    const { selectedValue} = this.state;
    // const dropdownOptions = ['weekly', 'monthly', 'yearly'];
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, titleStyle]}>{title}</Text>
          {counter && 
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{counter}</Text>
            </View>
          }
        </View>
        {showActionBtn && (
          <Pressable onPress={onPress}>
            {actionLabel ? (
              <Text style={[styles.actionLabel, actionLabelStyle]}>{actionLabel}</Text>
            ):
            (
              <Text style={styles.actionLabel}>See All</Text>
            )}
          </Pressable>
        )}
        {showDropdown && (
          <Picker
          selectedValue={this.props.selectedView}
          onValueChange={(itemValue) => this.props.onViewChange(itemValue as 'Weekly' | 'Monthly' | 'Yearly')}
          style={{ borderColor: theme.primary, borderWidth: 1, borderRadius: 12.5, paddingVertical: 5, color:theme.primary }}
          >
          <Picker.Item label="Weekly" value="Weekly" />
          <Picker.Item label="Monthly" value="Monthly" />
          <Picker.Item label="Yearly" value="Yearly" />
        </Picker>
        )}
      </View>
    )
  }
}

export default SectionHeader;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      // height: 27,
      marginBottom: 13,
    },
    titleContainer: {
      flexDirection: 'row',
    },
    titleText: {
      color: '#000',
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3,
    },
    actionLabel: {
      color: theme.primary,
      fontFamily: 'Inter',
      fontSize: 14,
      lineHeight: 17,
    },
    counterContainer: {
      height: 20,
      width: 20,
      paddingHorizontal: 6,
      backgroundColor: theme.primary,
      borderRadius: 20,
      marginLeft: 5,
      justifyContent: 'center',
    },
    counterText: {
      color: '#F4F6F9',
      alignSelf: 'center',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: '400',
    },
})