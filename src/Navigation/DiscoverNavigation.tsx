import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HiddenTabBar from './HiddenTabBar';
import Discover from '../Discover/Discover';
import Overview from '../Discover/Memberships/MembershipScreen';
import MembershipDetail from '../Discover/Memberships/MembershipDetail';
import EventPage from '../Discover/Events/EventPage';
import AllEvents from '../Discover/Events/AllEvents';
import AllTrainers from '../Discover/PersonalTrainers/AllTrainers';

const Stack = createStackNavigator();

class DiscoverNavigation extends Component{
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Discover" component={Discover} options={{headerShown: false}} />
        <Stack.Screen name="Memberships" component={Overview} options={{headerShown: false}} />
        <Stack.Screen name="MembershipDetail" component={HiddenTabBar(MembershipDetail)} options={{headerShown: false}} />
        <Stack.Screen name="Event" component={EventPage} options={{headerShown: false}} />
        <Stack.Screen name="AllEvents" component={AllEvents} options={{headerShown: false}} />
        <Stack.Screen name="AllTrainers" component={AllTrainers} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }
}

export default DiscoverNavigation;
