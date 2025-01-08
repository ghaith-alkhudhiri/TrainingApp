import { Pressable, ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CollectionBanner from './Components/CollectionBanner'
import Basket from '../Assets/Icons/Basket'
import ScreenWrapper from '../Layout/ScreenWrapper'
import ScreenHeader from '../Layout/ScreenHeader'
import { NavProps } from '../types'
import Search from '../Assets/Icons/Search'
import theme from '../Constants/theme'
import RightArrowIcon from '../Assets/Icons/RightArrowIcon'
import ArrowRight from '../Assets/Icons/ArrowRight'
import ItemCard from './Components/ItemCard'
import Slideshow from './Components/Slideshow'
import SelectableItem from '../Common/SelectableItem'
import SectionHeader from '../Home/SectionHeader'
import Timer from './Components/Timer'

interface ShopState {
  selectedLabel: string;
}

export class Shop extends Component<NavProps, ShopState> {
  state: ShopState = {
    selectedLabel: 'All',
  };
  render() {
    const images = [
      require('../Assets/Images/banner.png'),
      require('../Assets/Images/banner.png'),
      require('../Assets/Images/banner.png'),
    ];
    return (
      <ScreenWrapper withoutHeader>
        <ScreenHeader
          navigation={this.props.navigation} 
          route={this.props.route} 
          backEnabled={false} 
          title='Shop'
          rightElement={
            <Pressable onPress={()=>this.props.navigation.navigate('Cart')} style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
              <Basket/>
            </Pressable>
          }
          // backContainerStyle={{left: 25}}
          // rightContainerStyle={{right: 25}}
          leftElementEnabled
          leftElement={
            <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
              <Search/>
            </View>
          }
        />
        <View style={{gap: 24}}>
          <View style={{gap: 16, }}>
            <CollectionBanner category='Active Ware' imageUrl={require('../Assets/Images/image29.png')} onPress={()=>{}} />
            <CollectionBanner category='Water Bottle' imageUrl={require('../Assets/Images/bottle.png')} onPress={()=>{}} />
            <CollectionBanner category='Yoga Mat' imageUrl={require('../Assets/Images/mat.png')} onPress={()=>{}} />
          </View>

          <View style={{gap: 13}}>

            <View style={{flexDirection: 'row', justifyContent: 'space-between',  }}>
              <Text style={{
                color: '#000',
                fontFamily: theme.font,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: -0.3,
              }}>Flash Sales</Text>
              <View style={{gap: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{
                  color: '#797979',
                  fontFamily: theme.font,
                  fontSize: 12,
                  fontWeight: 400,
                  lineHeight: 1,
                }}>Ends in:</Text>
                {/* <View style={{flexDirection: 'row', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
                  <View style={{width: 26, height: 'auto', backgroundColor: '#EAF2FF', borderRadius: 3, padding: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                      color: theme.primary,
                      fontFamily: theme.font,
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: 17,
                    }}>03</Text>
                  </View>
                  <Text style={{
                      color: theme.primary,
                      fontFamily: theme.font,
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: 17,
                    }}>:</Text>
                  <View style={{width: 26, height: 'auto', backgroundColor: '#EAF2FF', borderRadius: 3, padding: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                      color: theme.primary,
                      fontFamily: theme.font,
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: 17,
                    }}>12</Text>
                  </View>
                  <Text style={{
                      color: theme.primary,
                      fontFamily: theme.font,
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: 17,
                    }}>:</Text>
                  <View style={{width: 26, height: 'auto', backgroundColor: '#EAF2FF', borderRadius: 3, padding: 4, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                      color: theme.primary,
                      fontFamily: theme.font,
                      fontSize: 13,
                      fontWeight: 400,
                      lineHeight: 17,
                    }}>25</Text>
                  </View>
                </View> */}
                <Timer initialTime={3600} />
                <ArrowRight width={21} height={21} color={theme.primary} />
              </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ }}>
                <View style={{gap: 6, flexDirection: 'row'}}>
                {/* {['All', 'Newest', 'Popular', 'Set'].map((label, index) => (
                  <SelectableItem
                  key={index}
                  isSelected={this.state.selectedLabel === label}
                  onPress={() => this.setState({ selectedLabel: label })}
                  label={label}
                  />
                ))} */}
                <Text style={{
                  paddingHorizontal: 25,
                  paddingVertical: 6,
                  borderRadius: 27,
                  backgroundColor: theme.primary,
                  color: '#F4F6F9',
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>All</Text>
                <Text style={{
                  paddingHorizontal: 25,
                  paddingVertical: 6,
                  borderRadius: 27,
                  backgroundColor: '#F1F5F9',
                  color: theme.primary,
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>Newest</Text>
                <Text style={{
                  paddingHorizontal: 25,
                  paddingVertical: 6,
                  borderRadius: 27,
                  backgroundColor: '#F1F5F9',
                  color: theme.primary,
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>Popular</Text>
                <Text style={{
                  paddingHorizontal: 25,
                  paddingVertical: 6,
                  borderRadius: 27,
                  backgroundColor: '#F1F5F9',
                  color: theme.primary,
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>Set</Text>
                </View>
            </ScrollView>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ }}>
                <View style={{gap: 11, flexDirection: 'row'}}>
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/TamarranLogo.png')} rating={3.4} />
                </View>
            </ScrollView>

          </View>

          <View style={{ }}>
            <Slideshow images={images} />
          </View>

          <View style={{gap: 13}}>

            <View style={{ }}>
              <SectionHeader title='Best Sellers'/>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ }}>
                <View style={{gap: 11, flexDirection: 'row'}}>
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/TamarranLogo.png')} rating={3.4} />
                </View>
            </ScrollView>

          </View>

          <View style={{gap: 13}}>

            <View style={{ }}>
              <SectionHeader title='You Might Like'/>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ }}>
                <View style={{gap: 11, flexDirection: 'row'}}>
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/TamarranLogo.png')} rating={3.4} />
                </View>
            </ScrollView>

          </View>

          <View style={{gap: 13}}>

            <View style={{ }}>
              <SectionHeader title='Sport Ware'/>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ }}>
                <View style={{gap: 11, flexDirection: 'row'}}>
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/ad2.png')} rating={3.4} />
                  <ItemCard title='Two piece set' price={200} imageUrl={require('../Assets/Images/TamarranLogo.png')} rating={3.4} />
                </View>
            </ScrollView>

          </View>
        </View>
      </ScreenWrapper>
    )
  }
}

export default Shop