import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface Props {
    title: string;
    number: number;
    unit?: string;
    status: string;
    statusColor?: 'low' | 'med' | 'high';
}

export class MiniMetricsCard extends Component<Props> {
    render() {
        const {title, number, unit='kg', status, statusColor='high'} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.weightLabel}>{title}</Text>
                <Text style={styles.weightValue}>
                    {number}{' '}
                    <Text style={styles.weightUnit}>{unit}</Text>
                </Text>
                <Text style={[
                    styles.status, 
                    statusColor === 'high' ? { color: '#D1691E' } : 
                    statusColor === 'med' ? { color: '#E8C95E' } : 
                    { color: '#20A1FF' }
                    ]}>{status}</Text>
            </View>
        )
    }
}

export default MiniMetricsCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#EEEEEF',
        backgroundColor: '#FFF',
        paddingTop: 17,
        paddingRight: 45,
        paddingBottom: 17,
        paddingLeft: 18,
        shadowColor: '#6294FD',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 10,
    },
    weightLabel: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 17,
        marginBottom: 13,
    },
    weightValue: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 27,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    weightUnit: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '600',
    },
    status: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 17,
        textTransform: 'uppercase',
    },
})