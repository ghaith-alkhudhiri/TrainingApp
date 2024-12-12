import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'
import SearchIcon from '../Assets/Icons/SearchIcon';


interface SearchInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  icon?: React.ReactNode;
}

export class SearchInput extends Component<SearchInputProps> {
  static defaultProps = {
    placeholder: 'Search...',
    icon: <SearchIcon />
  }
  render() {
    const {containerStyle, inputStyle, icon, ...textInputProps} =  this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {/* <SearchIcon /> */}
        {icon}
        <TextInput 
          style={[styles.input, inputStyle]} 
          placeholderTextColor="#797979"
          {...textInputProps}
          />
      </View>
    )
  }
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        height: 44,
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#F4F6F9',
        padding: 16,
        flexDirection: 'row',
        gap: 8,
    },
    input: {
        flex: 1,
    }
});