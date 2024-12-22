import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemRowProps {
    index: number;
    item: {
        count: number;
        name: string;
        price: number;
        currency: string;
    };
}

class ItemRow extends Component<ItemRowProps> {
    render() {
        const { index, item } = this.props;
        return (
            <View key={index} style={styles.item}>
                <Text style={styles.itemCountName}>{item.count} {item.name}</Text>
                <Text style={styles.itemPriceText}>{item.price} {item.currency}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
});

export default ItemRow;