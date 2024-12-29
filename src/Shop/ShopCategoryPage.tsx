import { View, Text, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { NavProps } from '../types'
import Search from '../Assets/Icons/Search'
import FilterSet from '../Common/FilterSet'
import ScreenWrapper from '../Layout/ScreenWrapper'
import ItemCard from './Components/ItemCard'
import Basket from '../Assets/Icons/Basket'

export class ShopCategoryPage extends Component<NavProps> {
  render() {
    return (
        <ScreenWrapper title='Active Ware' rightElement={
            <View style={{flexDirection: 'row', gap: 8}}>
                <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
                    <Search/>
                </View>
                <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
                    <Basket/>
                </View>
            </View>
        }>
            <View style={{paddingHorizontal: 24}}>
                <FilterSet filters={['Filters', 'Price', 'Level']} />
                
                <View style={{marginTop: 24}}>
                    <View style={{gap: 11, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', alignContent: 'center'}}>
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/img.png')} rating={3.4} />
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                        <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/img.png')} rating={3.4} />
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
  }
}

export default ShopCategoryPage