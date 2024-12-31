import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import Dropdown from '../../Common/Dropdown'
import TrashIcon from '../../Assets/Icons/TrashIcon'
import DropdownWithBottomSheet from './DropdownWithBottomSheet'
import theme from '../../Constants/theme'

export class ProductCard extends Component {
  render() {
    return (
      <View style={{paddingVertical: 10, gap: 32, width: '100%', flexDirection: 'row', alignItems: 'baseline'}}>
        <View style={{gap: 12, flexDirection: 'row', alignContent: 'center', alignItems: 'center',}}>
            <Image 
                source={require('../../Assets/Images/item.jpg')}
                style={{height: 85, width: 88, borderRadius: 7}}    
                resizeMode='cover'
            />
            <View style={{gap: 6}}>
                <Text style={{
                  color: '#000',
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>Two set</Text>
                {/* <Dropdown options={['hi']} onValueChange={()=>{}} /> */}
                <View>
                  <DropdownWithBottomSheet />
                </View>
                <Text style={{
                  color: '#000',
                  fontFamily: theme.font,
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: 17.5,
                }}>40 RS</Text>
            </View>
        </View>
        <View style={{gap: 8, padding: 10, paddingBottom: 16, height: 48, flexDirection: 'row'}}>
            <View style={{
                width: 22,
                height: 22,
                borderRadius: 3,
                backgroundColor: '#F4F6F9',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                padding: 1,
                }}>
                <TrashIcon width={19} height={18} fill={'#246BFD'} filled />
            </View>
            <Text>1</Text>
            <View style={{
                width: 22,
                height: 22,
                borderRadius: 3,
                backgroundColor: '#F4F6F9',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                padding: 1,
                }}>
                <Text style={{textAlign: 'center', verticalAlign: 'middle'}}>+</Text>
            </View>
        </View>
      </View>
    )
  }
}

export default ProductCard