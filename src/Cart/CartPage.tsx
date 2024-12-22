import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../Constants/theme';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import Clock from '../Assets/Icons/Clock';
import StopWatch from '../Assets/Icons/StopWatch';

interface State {
  items: { name: string; details: string; price: number }[];
  subtotal: number;
}

export default class CartPage extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      items: [
        { name: 'Gymname Basic', details: '1 month Membership', price: 200 },
        { name: 'InBody test', details: '', price: 50 },
      ],
      subtotal: 250,
    };
  }

  render() {
    const { items, subtotal } = this.state;

    return (
      <ScreenWrapper
        title='Cart'
        scrollContainerStyle={{paddingHorizontal: 25}}
        floatingBtn
        floatingBtnProps={{
          label: 'Checkout',
          onPress: console.log('Checkout'),
        }}
        secondaryFloatingBtn
        secondaryFloatingBtnProps={{
          label: 'Add Items',
          onPress: console.log('Add Items'),
        }}
      >
        <View style={{gap: 19}}>
          {/* Membership Details */}
          <View style={styles.card}>
            <View style={{padding: 21, paddingTop: 24}}>
              <Text style={styles.cardTitle}>{items[0].name}</Text>
              <Text style={styles.cardSubtitle}>{items[0].details}</Text>
            </View>
            
            <View style={styles.cardInfoRow}>
              <View style={styles.cardInfo}>
                <CalendarIcon width={16} height={16} color='#0750BF'/>
                <Text style={styles.cardInfoText}>6th Jun</Text>
              </View>
              <View style={styles.cardInfo}>
                <Clock />
                <Text style={styles.cardInfoText}>10:00 AM</Text>
              </View>
              <View style={styles.cardInfo}>
                <StopWatch />
                <Text style={styles.cardInfoText}>1 Month</Text>
              </View>
            </View>
          </View>

          {/* Payment Summary */}
          <Text style={styles.sectionTitle}>Payment summary</Text>
          <View style={styles.summary}>
            <View style={{gap: 5}}>
              {items.map((item, index) => (
                <View style={styles.summaryRow} key={index}>
                  <Text style={styles.summaryText}>{item.name}</Text>
                  <Text style={styles.summaryPrice}>{item.price} SR</Text>
                </View>
              ))}
            </View>

            <View style={{height: 1, backgroundColor: '#E7EFFF'}} />
            
            <View style={styles.summaryRow}>
              <Text style={[styles.summaryText, styles.bold]}>Subtotal</Text>
              <Text style={[styles.summaryPrice, styles.bold]}>{subtotal} SR</Text>
            </View>
          </View>
        </View>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#EAF2FF',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0750BF',
    fontFamily: 'Inter',
    letterSpacing: -0.3,
  },
  cardSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0750BF',
    fontFamily: 'Inter',
    lineHeight: 16.38,
  },
  cardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 2,
    borderColor: '#EAF2FF',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 8,
  },
  cardInfoText: {
    fontSize: 14,
    color: '#0750BF',
    fontFamily: 'Inter',
    fontWeight: '600',
    lineHeight: 17.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Inter',
    letterSpacing: -0.3,
  },
  summary: {
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryText: {
    color: '#3A3A3A',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 18,
  },
  summaryPrice: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18,
  },
  bold: {
    fontSize: 14,
    fontWeight: 600,
  },
});
