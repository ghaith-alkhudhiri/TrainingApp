import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import { NavProps } from '../types';

interface Membership {
  id?: string;
  title?: string;
  description?: string;
  price?: number;
}

interface Review {
  date?: any,
  time?: any,
  duration?: string;
  addsOn?: string[];
  user?: string;
  amount?: number;
  subTotal?: number;
}

interface State {
  membership: Membership;
  review: Review;
  loading: boolean;
}

type Props = NavProps & Membership;

export default class ReviewSummary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      membership: {},
      review: {},
      loading: true,
    };
  }
componentDidMount() {
    // Simulate a database/API call
    setTimeout(() => {
      const sampleMembershipReview: Membership = {
          id: '1',
          title: 'Gymname Basic',
          description: '1 Month membership with unlimited classes.',
          price: 1200,
        };

      const sampleReview: Review = {
        date: 'June 6, 2023',
        time: '10:00 AM - 11:00 AM',
        duration: '1 Month',
        addsOn: ['InBody test'],
        user: 'Jan Doe',
        amount: 200,
        subTotal: 250,
        };

      this.setState({ membership: sampleMembershipReview, review: sampleReview, loading: false });
    });//add timer if you want
  }
  render() {
    const currentUser = 'Jan Doe';
    return (
      <ScreenWrapper 
      title='Review Summary' 
      childrenContainerStyle={{gap: 20}} 
      // scrollContainerStyle={{paddingHorizontal: 24}}
      floatingBtn
      floatingBtnProps={{
        label: 'Next',
        onPress: console.log('Next'),
      }}
      >
        <View>
          <Text style={styles.title}>{this.state.membership.title}</Text>
          <Text style={styles.subtitle}>{this.state.review.duration} Membership</Text>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 12}}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.value}>{this.state.review.date}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>{this.state.review.time}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Package</Text>
            <Text style={styles.value}>{this.state.review.duration}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Adds-on</Text>
            {this.state.review.addsOn && this.state.review.addsOn.map((addOn, index) => (
              <Text style={styles.value} key={addOn}>{this.state.review.addsOn}</Text>
            ))}
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Booking for</Text>
            <Text style={styles.value}>{this.state.review.user}{this.state.review.user === currentUser && ' - Self'}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={{gap: 12}}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.value}>{this.state.review.amount} SR</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Sub Total</Text>
            <Text style={styles.value}>{this.state.review.subTotal} SR</Text>
          </View>
        </View>
      </ScreenWrapper>
      
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    fontFamily: 'Inter',
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '400',
    color: '#797979',
    lineHeight: 9,
    fontFamily: 'Inter',
  },
  divider: {
    height: 1,
    backgroundColor: '#EDEDED',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#797979',
    fontFamily: 'Inter',
    lineHeight: 18,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    fontFamily: 'Inter',
    lineHeight: 18,
  },
});
