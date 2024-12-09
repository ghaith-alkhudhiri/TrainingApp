import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import If from '../Common/If';
import CheckIcon from '../Assets/Icons/CheckIcon';
import { Task } from './TasksPage';

interface Props {
    title: string;
    description: string;
    status: 'done' | 'pending';
    type: 'bodyMeasurement' | 'document' | 'progressPhoto';
    onPress: (task: Task) => void;
}

export class TaskCard extends Component<Props> {
  render() {
    const {title, description, status, type, onPress} = this.props;
    return (
      <Pressable style={styles.container} onPress={() => onPress({title, description, status, type})}>
        <View style={styles.cardHeaderContainer}>
            <View style={styles.cardHeaderTextContainer}>
                <Text style={styles.taskCardTitle}>{title}</Text>
                <Text style={styles.taskCardDescription}>{description}</Text>
            </View>
            {/* Icon */}
            <View style={[styles.statusIconContainer,
                status === 'done' ? styles.doneStatus : styles.pendingStatus
            ]}>
                <If condition={status === 'done'}>
                    <CheckIcon />
                </If>
            </View>
        </View>
        <View style={styles.lineDivider} />
        <View style={styles.cardInfoContainer}>
            <Text style={styles.timeDateText}>Today <Text style={styles.hourText}>10:00 AM</Text> 13th June, 2024</Text>
            <View style={styles.avatarContainer}>
                <Image 
                    source={{uri: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/b94eafde-25f5-41ff-a6c4-63786bf80377/5602cc0f-4caf-460b-8b30-84eb53ad6527.png'}}
                    style={styles.avatarImage}
                />
            </View>
        </View>
      </Pressable>
    )
  }
}

export default TaskCard;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 28,
        borderWidth: 1,
        borderColor: '#EEEEEE',
        backgroundColor: '#FFF',
        shadowColor: 'rgba(0, 39, 138, 0.10)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        gap: 10,
        borderRadius: 11,
        shadowRadius: 7.3,
        elevation: 7,
    },
    taskCardTitle: {
        color: '#000',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: 15,
        lineHeight: 18.75
    },
    taskCardDescription: {
        color: '#ABABAB',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 13.75
    },
    cardHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    cardHeaderTextContainer: {

    },
    statusIconContainer: {
        width: 24,
        height: 24,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
        borderWidth: 1,
        borderColor: '#E3E3E3',
    },
    lineDivider: {
        height: 1,
        backgroundColor: '#ECEAEA',
    },
    cardInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarContainer: {
        height: 24,
        width: 24,
        borderRadius: 12,
        overflow: 'hidden'
    },
    avatarImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    timeDateText: {
        color: '#9E9E9E',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 13.75,
    },
    hourText: {
        color: '#D0D0D0',
        fontFamily: 'Inter',
        fontSize: 11,
        fontWeight: 500,
        lineHeight: 13.75,
    },
    doneStatus: {
        backgroundColor: '#0165FC',
        borderRadius: 27,
        borderWidth: 0,
    },
    pendingStatus: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
    }
})