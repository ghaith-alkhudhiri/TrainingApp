import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import SearchIcon from '../Assets/Icons/SearchIcon';

export class SearchInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchIcon />
        <TextInput style={styles.input} placeholder='Search Classes, Trainer' />
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