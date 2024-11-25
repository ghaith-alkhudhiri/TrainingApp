import { View, Text } from 'react-native'
import React from 'react'

export default function Test() {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View style={{flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30}}>Yellow Box</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 30}}>blue Box</Text>
      </View>
    </View>
  )
}