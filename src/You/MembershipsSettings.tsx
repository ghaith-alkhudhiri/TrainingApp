import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavProps } from '../types';
import CustomTabs from '../Common/CustomTabs';
import ScreenHeader from '../Layout/ScreenHeader';
import ScreenWrapper from '../Layout/ScreenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../Constants/theme';
import Switch from '../Common/Switch';

interface Membership {
    id: string;
    title: string;
    type: string;
    date: string;
    status: 'Active' | 'Finished' | 'Freezed';
    duration: string;
    freezeStart?: string;
    freezeEnd?: string;
    isRemindOn?: boolean,
}

interface MembershipsSettingsState {
    memberships: Membership[];
    loading: boolean;
    // isRemindOn: boolean;
}

type MembershipsSettingsProps = NavProps & Membership;

class MembershipsSettings extends Component<MembershipsSettingsProps, MembershipsSettingsState> {
    constructor(props: MembershipsSettingsProps) {
        super(props);
        this.state = {
            memberships: [],
            loading: true,
            // isRemindOn: false,
        };
    }

    componentDidMount() {
        // Simulate a database/API call
        const sampleMemberships: Membership[] = [
            {
                id: 'BK22-0945873',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Active',
                duration: '1 Month',
                isRemindOn: false,
            },
            {
                id: 'BK22-0935873',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Active',
                duration: '1 Month',
                isRemindOn: false,
            },
            {
                id: 'BK22-0965873',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Active',
                duration: '1 Month',
                isRemindOn: false,
            },
            {
                id: 'BK22-0965973',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Finished',
                duration: '1 Month',
            },
            {
                id: 'BK22-0965773',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Finished',
                duration: '1 Month',
            },
            {
                id: 'BK22-0965783',
                title: 'Membership',
                type: 'Membership Type',
                date: 'Aug 25, 2024',
                status: 'Freezed',
                duration: '1 Month',
                freezeStart: '6 June 2024',
                freezeEnd: '6 July 2024',
            },
        ];
        setTimeout(() => {
            this.setState({ memberships: sampleMemberships, loading: false });
        });
    }

    toggleReminder = (id: string) => {
        this.setState((prevState) => ({
            memberships: prevState.memberships.map((membership) =>
                membership.id === id
                    ? { ...membership, isRemindOn: !membership.isRemindOn }
                    : membership
            ),
        }));
    };

    // Render Memberships
    renderMembershipItem = ({ item }: { item: Membership }) => (
        <View style={styles.card}>
            {/* Top Section */}
            <View style={styles.header}>
                <Text style={styles.title}>{item.date}</Text>
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
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            <View>
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
      );

    render() {
        const { memberships, loading } = this.state;
        
        if (loading) {
            return (
                <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
                </View>
            );
        }

        // Separate memberships
        const ongoingMemberships = memberships.filter((memberships) => memberships.status === 'Active');
        const completedMemberships = memberships.filter((memberships) => memberships.status === 'Finished');
        const frozenMemberships = memberships.filter((memberships) => memberships.status === 'Freezed');

        const tabs = [
            {
                key: 'active',
                label: 'Active',
                content: (
                    <FlatList
                    data={ongoingMemberships}
                    renderItem={this.renderMembershipItem}
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
                    data={completedMemberships}
                    renderItem={this.renderMembershipItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
            {
                key: 'freezed',
                label: 'Freezed',
                content: (
                    <FlatList
                    data={frozenMemberships}
                    renderItem={this.renderMembershipItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
        ];

        return (
            <ScreenWrapper scrollContainerStyle={{padding: 0, gap: 0}} withoutHeader childrenContainerStyle={{gap: 0}}>
                <View style={{paddingHorizontal: 25,}}>
                    <ScreenHeader title='My Workouts' backEnabled navigation={this.props.navigation} route={this.props.route} />
                </View>
                
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
        marginLeft: 24,
        marginRight: 27,
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
        letterSpacing: -0.3,
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

export default MembershipsSettings;