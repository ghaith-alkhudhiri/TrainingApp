import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../../../Constants/theme'

export class GoalsCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.miniContainer}>
            <Text style={styles.title}>Start</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.number}>85</Text>
                <Text style={[styles.title, styles.unit]}> kg</Text>
            </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.miniContainer}>
            <Text style={styles.title}>Current</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.number}>81</Text>
                <Text style={[styles.title, styles.unit]}> kg</Text>
            </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.miniContainer}>
            <Text style={styles.title}>Target</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.number}>70</Text>
                <Text style={[styles.title, styles.unit]}> kg</Text>
            </View>
        </View>
      </View>
    )
  }
}

export default GoalsCard

const styles = StyleSheet.create({
    container: {
        paddingTop: 12,
        paddingBottom: 17,
        paddingHorizontal: 20,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#EEEEEF',
        backgroundColor: '#FDFDFD',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 1 },
        shadowOpacity: 0.03,
        shadowRadius: 16.9,
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center',
    },
    divider: {
        width: 1,
        backgroundColor: '#E8E8E8',
        height: 35,
        bottom: -18,
    },
    miniContainer: {
        justifyContent: 'center',
        gap: 4,
    },
    title: {
        color: '#656565',
        textAlign: 'center',
        fontFamily: theme.font,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
    number: {
        color: theme.primary,
        textAlign: 'center',
        fontFamily: theme.font,
        fontWeight: 600,
        fontSize: 36,
    },
    unit: {
        color: '#979DA3',
        textTransform: 'lowercase',
    },
})