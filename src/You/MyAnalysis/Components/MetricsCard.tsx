import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { configureReanimatedLogger } from 'react-native-reanimated'
import MetricsIcon from '../../../Assets/Icons/MetricsIcon'
import theme from '../../../Constants/theme'
import ArrowRight from '../../../Assets/Icons/ArrowRight'
import { NavProps } from '../../../types'

export class MetricsCard extends Component<NavProps> {
  render() {
    return (
      <View style={styles.container}>
        <Pressable style={[styles.row, {justifyContent: 'space-between'}]} onPress={()=> this.props.navigation.navigate('Metrics')}>
            <View style={[styles.row, {gap: 8}]}>
                <MetricsIcon />
                <Text style={styles.h1}>
                    81.0{' '}
                    <Text style={[styles.h1, styles.h3]}>kg</Text>
                </Text>
            </View>
            <ArrowRight color={theme.primary} width={24} height={24} />
        </Pressable>
        <View style={[styles.row, {justifyContent: 'space-between', gap: 10}]}>
            <View style={styles.miniContainer}>
                <Text style={[styles.h2, styles.h4]}>BMI</Text>
                <Text style={styles.h2}>30.0</Text>
            </View>
            <View style={styles.miniContainer}>
                <Text style={[styles.h2, styles.h4]}>Body Fat</Text>
                <Text style={styles.h2}>35.2</Text>
            </View>
        </View>
      </View>
    )
  }
}

export default MetricsCard

const styles = StyleSheet.create({
    container: {
        paddingVertical: 19,
        paddingHorizontal: 17,
        gap: 15,
        backgroundColor: '#FFF',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 12 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    miniContainer: {
        paddingVertical: 11,
        paddingLeft: 16,
        paddingRight: 25,
        gap: 8,
        borderRadius: 8,
        backgroundColor: '#F5F8FB',
        flexGrow: 1,
    },
    h1: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 32,
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    h2: {
        color: theme.primary,
        fontFamily: theme.font,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    h3: {
        fontSize: 15,
        fontWeight: 500,
    },
    h4: {
        fontSize: 14,
        fontWeight: 400,
    },
})