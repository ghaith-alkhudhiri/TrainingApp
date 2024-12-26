import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CollectionBanner from './Components/CollectionBanner'
import Basket from '../Assets/Icons/Basket'
import ScreenWrapper from '../Layout/ScreenWrapper'
import ScreenHeader from '../Layout/ScreenHeader'
import { NavProps } from '../types'
import Search from '../Assets/Icons/Search'

export class Shop extends Component<NavProps> {
  render() {
    return (
      <ScreenWrapper withoutHeader>
        <ScreenHeader
          navigation={this.props.navigation} 
          route={this.props.route} 
          backEnabled={false} 
          title='Shop'
          rightElement={
            <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
              <Basket/>
            </View>
          }
          backContainerStyle={{left: 25}}
          rightContainerStyle={{right: 25}}
          leftElementEnabled
          leftElement={
            <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
              <Search/>
            </View>
          }
        />
        <View style={{padding: 24}}>
          <CollectionBanner />
        </View>
      </ScreenWrapper>
    )
  }
}

export default Shop