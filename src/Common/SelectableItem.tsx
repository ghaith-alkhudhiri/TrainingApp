import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface State {
  isSelected: boolean;
}

interface Props {
  isSelected: boolean;
  onPress: () => void;
  label: string;
}

export class SelectableItem extends Component<Props> {
 


  render() {
    const {isSelected, onPress, label} = this.props;

    return (
      <Pressable 
        style={[styles.container, isSelected && styles.selected]}
        onPress={onPress}
        >
        <Text style={[styles.text, isSelected && styles.selectedText]}>{label}</Text>
      </Pressable>
    )
  }
}

export default SelectableItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    borderRadius: 27,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    backgroundColor: '#0165FC',
  },
  text: {
    color: '#1E1E1E',
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: 17.5,
  },
  selectedText: {
    color: '#F4F6F9',
    fontWeight: 600,
  }
})