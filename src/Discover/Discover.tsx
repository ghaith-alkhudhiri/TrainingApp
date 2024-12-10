import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MembershipsCard from './Components/MembershipsCard'

export class Discover extends Component {
  render() {
    return (
      <View>
        <Text>Discover</Text>
        <MembershipsCard/>
      </View>
    )
  }
}

export default Discover