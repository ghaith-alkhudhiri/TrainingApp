import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Dropdown from '../Common/Dropdown';

interface Props {
    title: string;
    onPress?: () => void;
    showActionBtn: boolean;
    showDropdown?: boolean;
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
    const {title, onPress, showActionBtn, showDropdown} = this.props;
    const { selectedValue} = this.state;
    const dropdownOptions = ['weekly', 'monthly', 'yearly'];
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        {showActionBtn && (
          <Pressable onPress={onPress}>
            <Text style={styles.seeAllText}>See All</Text>
          </Pressable>
        )}
        {showDropdown && (
          <Dropdown
            options={dropdownOptions}
            selectedValue={selectedValue}
            onValueChange={this.handleValueChange}
          />
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
        height: 27,
        marginBottom: 13,
    },
    titleText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    seeAllText: {
        color: '#0165FC',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 17,
    }
})