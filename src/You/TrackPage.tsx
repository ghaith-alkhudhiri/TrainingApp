import { Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import OrderTracking from './Components/OrderTracking'
import { NavProps } from '../types'
import theme from '../Constants/theme'

export class TrackPage extends Component<NavProps> {
  render() {
    const {item} = this.props.route.params;
    return (
      <ScreenWrapper title='Track Order' childrenContainerStyle={{gap: 24}}>
        <View style={[styles.row, {gap: 12}]}>
            <Image source={ item.items[0].images[0] || {uri : 'https://via.placeholder.com/150'}} 
            style={{
                width: 88,
                aspectRatio: 1,
                borderRadius: 7,
            }}
            resizeMode='cover'
            />
            <View>
                <Text style={styles.title}>{item.items[0].title}</Text>
                <Text style={styles.subTitle}>Size: {item.items[0].size} | Color: {item.items[0].color}</Text>
                <Text style={styles.title}>{item.items[0].price} RS</Text>
            </View>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 11}}>
            <Text style={[styles.title, {fontSize: 15}]}>Order Details</Text>
            <View style={{gap: 6}}>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subTitle2}>Expected Delivery Date</Text>
                    <Text style={styles.subTitle3}>{item.steps[item.steps.length - 1].timestamp}</Text>
                </View>
                <View style={[styles.row, {justifyContent: 'space-between'}]}>
                    <Text style={styles.subTitle2}>Tracking ID</Text>
                    <Text style={styles.subTitle3}>{item.trackingId}</Text>
                </View>
            </View>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 11}}>
            <Text style={[styles.title, {fontSize: 15}]}>Order Status</Text>
            <OrderTracking steps={item.steps}/>
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
  title: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 17.5,
  },
  subTitle: {
    color: '#797979',
    fontFamily: theme.font,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 15,
  },
  subTitle2: {
    color: '#797979',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 18,
  },
  subTitle3: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 18,
  },
})