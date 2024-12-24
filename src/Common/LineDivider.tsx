import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'

interface Props {
    text?: string;
    containerStyle?: ViewStyle; 
}
export class LineDividier extends Component<Props> {
  render() {
    const {text, containerStyle} = this.props;
    return (
      <View style={[styles.container, containerStyle ]}>
        <View style={styles.line} />
        {text && (
          <Text style={styles.text}>{text}</Text>
        )}
        <View style={styles.line} />
      </View>
    )
  }
}

export default LineDividier;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFFFFF'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#E8ECF4'
    },
    text: {
        marginHorizontal: 10,
        fontSize: 14,
        lineHeight: 17,
        color: '#6A707C',
    }
})