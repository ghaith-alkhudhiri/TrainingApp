import { Text, View } from 'react-native'
import React, { Component } from 'react'
import MembershipsCard from './Components/MembershipsCard'
import ScreenWrapper from '../Layout/ScreenWrapper'
import Header from '../Home/Header'
import { NavProps } from '../types'
import SearchInput from '../Common/SearchInput'
import CustomButton from '../Common/CustomButton'

export class Discover extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    return (
        <ScreenWrapper withoutHeader={true}>
            <View style={{paddingHorizontal: 14, gap: 17}}>
                <Header navigation={navigation} route={route} />
                <SearchInput />
                <MembershipsCard navigation={navigation} route={route}/>
            </View>
            <CustomButton onPress={()=>{navigation.navigate('Memberships')}}/>
        </ScreenWrapper>
    );
  }
}

export default Discover