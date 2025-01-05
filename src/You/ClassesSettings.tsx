import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { NavProps } from '../types';
import CustomTabs from '../Common/CustomTabs';
import ScreenHeader from '../Layout/ScreenHeader';
import ScreenWrapper from '../Layout/ScreenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../Constants/theme';
import Switch from '../Common/Switch';
import CustomButton from '../Common/CustomButton';
import CustomModal, { Action } from '../Common/CustomModal';

interface Class {
    id: string;
    title: string;
    type: string;
    date: string;
    time: string;
    status: 'Active' | 'Finished' | 'Waiting list';
    duration: string;
    studioNumber: string;
    coach: string;
    coachImage?: string;
    isRemindOn?: boolean
}

interface State {
    classes: Class[];
    modalVisible: boolean;
    loading: boolean;
}

type Props = NavProps & Class;

class ClassesSettings extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            classes: [],
            loading: true,
            modalVisible: false,
        };
    }

    componentDidMount() {
        // Simulate a database/API call
        const sampleClasses: Class[] = [
            {
                id: 'BK22-0945873',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Active',
                duration: '1 hour',
                isRemindOn: false,
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
            {
                id: 'BK22-0935873',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Active',
                duration: '1 hour',
                isRemindOn: false,
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
            {
                id: 'BK22-0965873',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Active',
                duration: '1 hour',
                isRemindOn: false,
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
            {
                id: 'BK22-0965973',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Finished',
                duration: '1 hour',
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
            {
                id: 'BK22-0965773',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Finished',
                duration: '1 hour',
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
            {
                id: 'BK22-0965783',
                title: 'Class Name',
                type: 'Class Type',
                date: 'Aug 25, 2024',
                time: '10:00 AM',
                status: 'Waiting list',
                duration: '1 hour',
                coach: 'Noor M. Ali',
                coachImage: require('../Assets/Images/noor.png'),
                studioNumber: 'Studio 01',
            },
        ];
        setTimeout(() => {
            this.setState({ classes: sampleClasses, loading: false });
        });
    }

    toggleReminder = (id: string) => {
        this.setState((prevState) => ({
            classes: prevState.classes.map((cls) =>
                cls.id === id
                    ? { ...cls, isRemindOn: !cls.isRemindOn }
                    : cls
            ),
        }));
    };

    actions: Action[] = [
        {
            text: 'Yes, I’m sure',
            onPress: () => {
                this.setState({ modalVisible: false }, () => {
                    this.props.navigation.navigate('success', {
                        title: 'Cancel Successfully',
                        description: 'Your waiting list on your class has been cancel successfully!'
                    });
                });
            },
            style: 'primary',
        },
        {
            text: 'No, Cancel',
            onPress: () => this.setState({modalVisible: false}),
            style: 'outline',
        },
    ];

    // Render Classes
    renderClassItem = ({ item }: { item: Class }) => (
        <View style={styles.card}>
            {/* Top Section */}
            <View style={styles.header}>
                <Text style={styles.title}>{item.date} - {item.time}</Text>
                { item.status === 'Active' &&
                <View style={styles.remindContainer}>
                    <Text style={styles.remindText}>Remind me</Text>
                    <Switch
                        value={item.isRemindOn}
                        onValueChange={() => this.toggleReminder(item.id)}
                        trackColor={{ false: '#D1D1D6', true: theme.primary }}
                        thumbColor='white'
                        style={{width: 48, height: 24}}
                    />
                </View>
                }
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            <View style={[styles.row, {gap: 9}]}>
                <Image source={item.coachImage ? { uri: item.coachImage } : { uri: 'https://via.placeholder.com/150' }} 
                resizeMode='cover'
                style={{
                    borderRadius: 5,
                    width: 81,
                    aspectRatio: 0.9, // Adjust this value to match your image ratio (e.g., 1 for square)
                    }}
                />

                <View style={{paddingVertical: 5}}>
                    {/* Middle Section */}
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={[styles.remindText, styles.subtitle]}>{item.title}</Text>
                    </View>

                    {/* Bottom Section */}
                    <View style={styles.row}>
                        <Icon name="copy-outline" size={16} color="#007AFF" />
                        <Text style={[styles.remindText, styles.subtitle]}> Booking ID: </Text>
                        <TouchableOpacity>
                            <Text style={[styles.remindText, styles.subtitle, {color: theme.primary}]}>{item.id}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <Icon name="time-outline" size={16} color="#007AFF" />
                        <Text style={[styles.remindText, styles.subtitle]}> Duration: </Text>
                        <Text style={[styles.remindText, styles.subtitle, {color: theme.primary}]}>{item.duration}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Buttons */}
            <View style={[styles.row, {gap: 10}]}>
                <CustomButton label={item.status === 'Finished' ? 'Add Review' : 'Cancel'} 
                    onPress={() => { item.status === 'Finished' ? this.props.navigation.navigate('AddReview', {item}) : item.status === 'Waiting list' ? this.setState({modalVisible: true}) : this.props.navigation.navigate('MembershipForm', {title: 'Cancel Membership'})}} 
                    buttonStyle={{margin: 0, paddingVertical: 11}} 
                    textStyle={{
                        // color: '#EAF2FF',
                        fontFamily: theme.font,
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: -0.3,
                    }}
                    styleType='secondary'
                />
                <CustomButton label={item.status === 'Active' ? 'Reschedule' : item.status === 'Finished' ? 'Re-Book' : 'Contact us'} 
                    onPress={() => { item.status === 'Finished' ? this.props.navigation.navigate('ReviewSummary') : item.status === 'Active' ? this.props.navigation.navigate('Reschedule', {item}) : this.props.navigation.navigate('ContactUs')}} 
                    buttonStyle={{margin: 0, paddingVertical: 11}} 
                    textStyle={{
                        color: '#EAF2FF',
                        fontFamily: theme.font,
                        fontSize: 14,
                        fontWeight: 500,
                        letterSpacing: -0.3,
                    }}
                />
            </View>

            <CustomModal
                visible={this.state.modalVisible}
                onClose={() => this.setState({modalVisible: false})}
                title="Cancel Class"
                description="Are you sure you want to Cancel the Waiting list 
                You are Canceling your waiting for  this class?"
                actions={this.actions}
                animationType='slide'
            />
        </View>
      );

    render() {
        const { classes, loading } = this.state;
        
        if (loading) {
            return (
                <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
                </View>
            );
        }

        // Separate classes
        const activeClasses = classes.filter((classes) => classes.status === 'Active');
        const finishedClasses = classes.filter((classes) => classes.status === 'Finished');
        const WaitingList = classes.filter((classes) => classes.status === 'Waiting list');

        const tabs = [
            {
                key: 'active',
                label: 'Active',
                content: (
                    <FlatList
                    data={activeClasses}
                    renderItem={this.renderClassItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
            {
                key: 'finished',
                label: 'Finished',
                content: (
                    <FlatList
                    data={finishedClasses}
                    renderItem={this.renderClassItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
            {
                key: 'waitingList',
                label: 'Waiting list',
                content: (
                    <FlatList
                    data={WaitingList}
                    renderItem={this.renderClassItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
        ];

        return (
            <ScreenWrapper title='My Classes' childrenContainerStyle={{padding: 0, gap: 0}}>
                <CustomTabs styleType='underline' tabs={tabs} tabBarStyle={{paddingHorizontal: 0}} />
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    loadingText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#666',
    },
    separator: {
        height: 10,
        backgroundColor: 'transparent',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        paddingHorizontal: 17,
        paddingVertical: 12,
        gap: 13,
        shadowColor: '#000',
        shadowOffset: { width: 7, height: 12 },
        shadowOpacity: 0.05,
        shadowRadius: 20,
        elevation: 20,
        marginHorizontal: 20,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 13,
      },
      title: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 15,
        fontWeight: 600,
        letterSpacing: -0.31,
      },
      remindContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
      },
      remindText: {
        color: '#403F3D',
        fontFamily: theme.font,
        fontSize: 11,
        fontWeight: 400,
        lineHeight: 17,
      },
      divider: {
        height: 1,
        backgroundColor: '#F3F3F3',
      },
      details: {
        marginBottom: 12,
      },
      subtitle: {
        color: '#000',
        lineHeight: 9,
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
      },
});

export default ClassesSettings;