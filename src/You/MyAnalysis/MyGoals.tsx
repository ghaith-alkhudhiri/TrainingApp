import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import GoalsCard from './Components/GoalsCard'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import { NavProps } from '../../types'
import theme from '../../Constants/theme'

export class MyGoals extends Component<NavProps> {
    render() {
        return (
                <ScreenWrapper 
                    title='My Goals' 
                    childrenContainerStyle={styles.childrenContainer} 
                    floatingBtn 
                    floatingBtnProps={[{label: 'Modify My Goal', onPress: ()=> this.props.navigation.navigate('goals') }]}
                >
                    <GoalsCard />
                    <View style={styles.goalContainer}>
                        <Text style={styles.currentGoalText}>Current Goal</Text>
                        <View style={styles.separator} />
                        <View style={styles.goalDetailsContainer}>
                            <View style={styles.goalDetailRow}>
                                <Text style={styles.title}>Weight</Text>
                                <Text style={styles.info}>Noor M. Ali</Text>
                            </View>
                            <View style={styles.goalDetailRow}>
                                <Text style={styles.title}>Class Date</Text>
                                <Text style={styles.info}>8th Jun,2024</Text>
                            </View>
                            <View style={styles.goalDetailRow}>
                                <Text style={styles.title}>Class Time</Text>
                                <Text style={styles.info}>3:00 PM</Text>
                            </View>
                            <View style={styles.goalDetailRow}>
                                <Text style={styles.title}>Duration</Text>
                                <Text style={styles.info}>1 Hour</Text>
                            </View>
                            <View style={styles.goalDetailRow}>
                                <Text style={styles.title}>Studio Number</Text>
                                <Text style={styles.info}>Studio 01</Text>
                            </View>
                        </View>
                    </View>
                </ScreenWrapper>
        )
    }
}

const styles = StyleSheet.create({
    childrenContainer: {
        gap: 34,
    },
    goalContainer: {
        gap: 8,
    },
    currentGoalText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: -0.3,
    },
    separator: {
        height: 1,
        backgroundColor: '#E1E1E1',
    },
    goalDetailsContainer: {
        gap: 10,
    },
    goalDetailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#64748B',
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 18,
    },
    info: {
        color: '#141414',
        textAlign: 'right',
        fontFamily: theme.font,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
})

export default MyGoals