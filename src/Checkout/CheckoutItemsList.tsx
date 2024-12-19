import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import LineDividier from '../Common/LineDivider';

interface CheckoutItem {
    count: number;
    name: string;
    price: number;
    currency: string;
}

interface Props {
    items: CheckoutItem[];
    discount: number;
}

export class CheckoutItemsList extends Component<Props> {
  render() {
    const {items, discount} = this.props;

    const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
    const total = subtotal - discount;
    return (
      <View style={styles.container}>
        {items.map((item, index) => (
            <View key={index} style={styles.item}>
                <Text style={styles.itemCountName}>{item.count} {item.name}</Text>
                <Text style={styles.itemPriceText}>{item.price} {item.currency}</Text>
            </View>
        ))}
        <LineDividier />
        <View style={styles.item}>
            <Text style={styles.itemCountName}>Subtotal</Text>
            <Text style={styles.itemPriceText}>{subtotal.toFixed(2)} {items[0]?.currency || ''}</Text>
        </View>
        {discount > 0 && (
            <View style={styles.item}>
                <Text style={styles.itemCountName}>Discount</Text>
                <Text style={styles.itemPriceText}>
                -{discount.toFixed(2)} {items[0]?.currency || ''}
                </Text>
            </View>
        )}
        <View style={styles.item}>
          <Text style={styles.itemCountName}>Total</Text>
          <Text style={styles.itemPriceText}>
            {total.toFixed(2)} {items[0]?.currency || ''}
          </Text>
        </View>

      </View>
    )
  }
}

export default CheckoutItemsList;

const styles = StyleSheet.create({
    container: {
        gap: 7,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemCountName: {
        color: "#3A3A3A",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 18,
    },
    itemPriceText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 18
    }
})