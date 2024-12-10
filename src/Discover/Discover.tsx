import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MembershipsCard from './Components/MembershipsCard'
import ScreenWrapper from '../Layout/ScreenWrapper'
import Header from '../Home/Header'
import { NavProps } from '../types'
import SearchInput from '../Common/SearchInput'

export class Discover extends Component<NavProps> {
  render() {
    return (
        <ScreenWrapper withoutHeader={true}>
            <View style={{paddingHorizontal: 14, gap: 17}}>
                <Header navigation={this.props.navigation} route={this.props.route} />
                <SearchInput />
                <MembershipsCard navigation={undefined} route={undefined}/>
            </View>
        </ScreenWrapper>
    );
  }
}

export default Discover