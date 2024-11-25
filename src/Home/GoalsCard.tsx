import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../Constants/theme';

interface Goal {
    title: string;
    value: number;
    unit: string;
}

interface Props {
    goals: Goal[];
}

export class GoalsCard extends Component<Props> {
  render() {
    const { goals } = this.props;
    return (
      <View style={styles.container}>
        {goals.map((goal, index) => (
            <View key={index} style={styles.innerContainer}>
                <View style={styles.goalContainer}>
                    <Text style={styles.goalTitle}>{goal.title}</Text>
                    <View style={styles.valueContainer}>
                        <Text style={styles.goalValue}>{goal.value}</Text>
                        <Text style={styles.goalUnit}>{goal.unit}</Text>
                    </View>
                </View>
                {index < goals.length - 1 && <View style={styles.separator} />}
            </View>
        ))}
      </View>
    )
  }
}

export default GoalsCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFDFD',
        borderRadius: 7,
        borderColor: '#EEEEEE',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.03,
        shadowRadius: 16.9,
        elevation: 5,
        paddingTop: 12,
        paddingHorizontal: 20,
        paddingBottom: 17,
        flexDirection: 'row',
    },
    innerContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    goalContainer: {
        // flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 7,
    },

    goalTitle: {
        textTransform: 'uppercase',
        color: '#656565',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 1,
    },
    goalValue: {
        color: theme.primary,
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 36,
        fontWeight: 600,
        lineHeight: 45,
        // flex: 1,
    },
    goalUnit: {
        color: '#979DA3',
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 1,
    },
    separator: {
        height: 35,
        width: 1,
        backgroundColor: '#E8E8E8',
    }
});