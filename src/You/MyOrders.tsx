import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavProps } from '../types';
import CustomTabs from '../Common/CustomTabs';
import ScreenHeader from '../Layout/ScreenHeader';
import ScreenWrapper from '../Layout/ScreenWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../Constants/theme';
import Switch from '../Common/Switch';
import CustomButton from '../Common/CustomButton';
import AddIcon from '../Assets/Icons/Add';

interface Order {
    id: string;
    items: {title: string, images?: string[], price: string, size?: number, color?: string}[];
    price: number;
    status: 'Active' | 'Completed' | 'Canceled';
    steps: { title: string, timestamp: string, icon: string, isCompleted: boolean }[];
    trackingId: number;
    dateTime: string;
    isNotifyOn?: boolean,
}

interface MyOrdersState {
    orders: Order[];
    loading: boolean;
}

type MyOrdersProps = NavProps & Order;

class MyOrders extends Component<MyOrdersProps, MyOrdersState> {
    constructor(props: MyOrdersProps) {
        super(props);
        this.state = {
            orders: [],
            loading: true,
        };
    }

    componentDidMount() {
        // Simulate a database/API call
        const sampleOrders: Order[] = [
            {
                id: '43243',
                items: [
                    { title: 'Item 1', images: [require('../Assets/Images/item.jpg')], price: '10.00', size: 21, color: 'pink' },
                    { title: 'Item 2', images: [require('../Assets/Images/item.jpg')], price: '20.00', size: 23, color: 'red' }
                ],
                price: 30.00,
                status: 'Active',
                steps: [
                    { title: 'Order Placed', timestamp: '23 Aug 2023, 03:05 AM', icon: 'cart-outline', isCompleted: true },
                    { title: 'In Progress', timestamp: '23 Aug 2023, 03:05 AM', icon: 'progress-clock', isCompleted: true },
                    { title: 'Shipped', timestamp: 'Expected 02 Sep 2023', icon: 'truck-delivery-outline', isCompleted: false },
                    { title: 'Delivered', timestamp: '23 Aug 2023, 03:05 AM', icon: 'package-variant', isCompleted: false },
                  ],
                trackingId: 123456,
                dateTime: '2023-01-01T09:00:00Z',
                isNotifyOn: true
            },
            {
                id: '432435',
                items: [
                    { title: 'Item 1', images: [require('../Assets/Images/item.jpg')], price: '10.00', size: 21, color: 'pink' },
                    { title: 'Item 2', images: [require('../Assets/Images/item.jpg')], price: '20.00', size: 23, color: 'red' }
                ],
                price: 30.00,
                status: 'Completed',
                steps: [
                    { title: 'Order Placed', timestamp: '23 Aug 2023, 03:05 AM', icon: 'cart-outline', isCompleted: true },
                    { title: 'In Progress', timestamp: '23 Aug 2023, 03:05 AM', icon: 'progress-clock', isCompleted: true },
                    { title: 'Shipped', timestamp: 'Expected 02 Sep 2023', icon: 'truck-delivery-outline', isCompleted: true },
                    { title: 'Delivered', timestamp: '23 Aug 2023, 03:05 AM', icon: 'package-variant', isCompleted: true },
                  ],
                trackingId: 123456,
                dateTime: '2023-01-01T09:00:00Z',
                isNotifyOn: true
            },
            {
                id: '432439',
                items: [
                    { title: 'Item 1', images: [require('../Assets/Images/item.jpg')], price: '10.00', size: 21, color: 'pink' },
                    { title: 'Item 2', images: [require('../Assets/Images/item.jpg')], price: '20.00', size: 23, color: 'red' }
                ],
                price: 30.00,
                status: 'Canceled',
                steps: [
                    { title: 'Order Placed', timestamp: '23 Aug 2023, 03:05 AM', icon: 'cart-outline', isCompleted: true },
                    { title: 'In Progress', timestamp: '23 Aug 2023, 03:05 AM', icon: 'progress-clock', isCompleted: true },
                    { title: 'Shipped', timestamp: 'Expected 02 Sep 2023', icon: 'truck-delivery-outline', isCompleted: true },
                    { title: 'Delivered', timestamp: '23 Aug 2023, 03:05 AM', icon: 'package-variant', isCompleted: true },
                  ],
                trackingId: 123456,
                dateTime: '2023-01-01T09:00:00Z',
                isNotifyOn: true
            },
        ];
        setTimeout(() => {
            this.setState({ orders: sampleOrders, loading: false });
        });
    }

    toggleNotifier = (id: string) => {
        this.setState((prevState) => ({
            orders: prevState.orders.map((ord) =>
                ord.id === id
                    ? { ...ord, isNotifyOn: !ord.isNotifyOn }
                    : ord
            ),
        }));
    };

    // Render Orders
    renderOrderItem = ({ item }: { item: Order }) => (
        <View style={styles.card}>
            {/* Top Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Order #{item.id}</Text>
                { item.status === 'Active' &&
                <View style={styles.notifyContainer}>
                    <Text style={styles.notifyText}>Notify me</Text>
                    <Switch
                        value={item.isNotifyOn}
                        onValueChange={() => this.toggleNotifier(item.id)}
                        trackColor={{ false: '#D1D1D6', true: theme.primary }}
                        thumbColor='white'
                        style={{width: 48, height: 24}}
                    />
                </View>
                }
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Middle Section */}
            <View style={{gap: 2}}>
                <View style={styles.row}>
                    <Icon name="copy-outline" size={16} color="#007AFF" />
                    <Text style={[styles.notifyText, styles.subtitle]}> Order Status: </Text>
                    <Text style={[styles.notifyText, styles.subtitle, {color: theme.primary}]}>{item.steps[0].title}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="time-outline" size={16} color="#007AFF" />
                    <Text style={[styles.notifyText, styles.subtitle]}> Date and Time: </Text>
                    <Text style={[styles.notifyText, styles.subtitle, {color: theme.primary}]}>{item.steps[0].timestamp}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="copy-outline" size={16} color="#007AFF" />
                    <Text style={[styles.notifyText, styles.subtitle]}> Total Amount: </Text>
                    <Text style={[styles.notifyText, styles.subtitle, {color: theme.primary}]}>{item.items[0].price} RS</Text>
                </View>
            </View>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Buttons */}
            <View style={[styles.row, {gap: 10}]}>
                {item.status === 'Active' && (
                    <CustomButton label='Cancel' 
                        onPress={() => this.props.navigation.navigate('MembershipForm', {title: 'Cancel Membership'})} 
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
                )}
                <CustomButton label={item.status === 'Active' ? 'Track' : item.status === 'Completed' ? 'Add Review' : 'Re-Order'} 
                    onPress={() => { item.status === 'Completed' ? this.props.navigation.navigate('AddReview', {item}) : item.status === 'Active' ? this.props.navigation.navigate('Track', {item}) : this.props.navigation.navigate('Cart')}} 
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
            
        </View>
      );

    render() {
        const { orders, loading } = this.state;
        
        if (loading) {
            return (
                <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
                </View>
            );
        }

        // Separate memberships
        const ActiveOrders = orders.filter((orders) => orders.status === 'Active');
        const CompletedOrders = orders.filter((orders) => orders.status === 'Completed');
        const CanceledOrders = orders.filter((orders) => orders.status === 'Canceled');

        const tabs = [
            {
                key: 'active',
                label: 'Active',
                content: (
                    <FlatList
                    data={ActiveOrders}
                    renderItem={this.renderOrderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
            {
                key: 'completed',
                label: 'Completed',
                content: (
                    <FlatList
                    data={CompletedOrders}
                    renderItem={this.renderOrderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
            {
                key: 'canceled',
                label: 'Canceled',
                content: (
                    <FlatList
                    data={CanceledOrders}
                    renderItem={this.renderOrderItem}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                )
            },
        ];

        return (
            <ScreenWrapper title='My Orders' childrenContainerStyle={{padding: 0, gap: 0}}
                rightElement={
                    <CustomButton 
                        styleType='rounded'
                        onPress={()=>{}} 
                        icon={<AddIcon />} 
                    />
                }
            >
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
        letterSpacing: -0.3,
      },
      notifyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
      },
      notifyText: {
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

export default MyOrders;