import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CollectionBanner from './Components/CollectionBanner'

export class Shop extends Component {
  render() {
    return (
      <View style={{padding: 24}}>
        <Text>Shop</Text>
        <CollectionBanner />
      </View>
    )
  }
}

export default Shop