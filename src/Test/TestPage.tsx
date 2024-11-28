import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomTextInput from '../Common/CustomTextInput';

export class TestPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput label='UserName' placeholder='Enter your username' variant="rounded" value="" onChangeText={(text) => console.log(text)} />
      </View>
    )
  }
}

export default TestPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})