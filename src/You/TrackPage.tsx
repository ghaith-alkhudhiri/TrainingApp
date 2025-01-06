import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import OrderTracking from './Components/OrderTracking'

export class TrackPage extends Component {
  render() {
    return (
      <ScreenWrapper title='Track Order' childrenContainerStyle={{gap: 24}}>
        <View style={[styles.row, {gap: 12}]}>
            <Image source={require('../Assets/Images/item.jpg') || {uri : 'https://via.placeholder.com/150'}} 
            style={{
                width: 88,
                aspectRatio: 1,
                borderRadius: 7,
            }}
            resizeMode='cover'
            />
            <View>
                <Text>Hi</Text>
                <Text>Size:  | Color: </Text>
                <Text> RS</Text>
            </View>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 11}}>
            <Text>Order Details</Text>
            <View style={{gap: 6}}>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text>Expected Delivery Date</Text>
                    <Text>Hi</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text>Tracking ID</Text>
                    <Text>Hi</Text>
                </View>
            </View>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 11}}>
            <Text>Order Status</Text>
            <OrderTracking 
              steps={[
                { title: 'Order Placed', timestamp: '23 Aug 2023, 03:05 AM', icon: 'cart-outline', isCompleted: true },
                { title: 'In Progress', timestamp: '23 Aug 2023, 03:05 AM', icon: 'progress-clock', isCompleted: true },
                { title: 'Shipped', timestamp: 'Expected 02 Sep 2023', icon: 'truck-delivery-outline', isCompleted: false },
                { title: 'Delivered', timestamp: '23 Aug 2023, 03:05 AM', icon: 'package-variant', isCompleted: false },
              ]}
            />
        </View>
      </ScreenWrapper>
    )
  }
}

export default TrackPage

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#F3F3F3',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})