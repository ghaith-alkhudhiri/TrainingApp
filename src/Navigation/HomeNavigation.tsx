import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HiddenTabBar from './HiddenTabBar';
import HomePage from '../Home/HomePage';
import NotificationsScreen from '../Notification/NotificationsScreen';
import InboxScreen from '../Inbox/InboxScreen';

const Stack = createStackNavigator();

class HomeNavigation extends Component{
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
        <Stack.Screen name="Notification" component={HiddenTabBar(NotificationsScreen)} options={{headerShown: false}} />
        <Stack.Screen name="Inbox" component={HiddenTabBar(InboxScreen)} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }
}

export default HomeNavigation;
