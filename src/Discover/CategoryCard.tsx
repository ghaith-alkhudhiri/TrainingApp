import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    icon: any;
    title: string;
    onPress: any;
}

export class CategoryCard extends Component<Props> {
  render() {
    const {icon, title, onPress} = this.props;
    return (
      <Pressable style={styles.container} onPress={onPress}>
        <View style={styles.iconContainer}>
            {icon}
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </Pressable>
    )
  }
}

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        gap: 4,
        // backgroundColor: 'blue',
    },
    iconContainer: {
        width: 65,
        height: 65,
        paddingVertical: 13,
        paddingHorizontal: 23,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAF2FF',
        borderRadius: 48,
    },
    titleText: {
        color: '#1E1E1E',
        textAlign: 'center',
        fontFamily: 'Inter',
        width: 65,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16,
    }
});