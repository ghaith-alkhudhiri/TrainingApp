import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    text: string;
}
export class LineDividier extends Component<Props> {
  render() {
    const {text} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text}>{text}</Text>
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