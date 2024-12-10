import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HiddenTabBar from './HiddenTabBar';
import Discover from '../Discover/Discover';
import Overview from '../Discover/Memberships/Overview';

const Stack = createStackNavigator();

class DiscoverNavigation extends Component{
  render() {
    console.log('DISCOVER NAV');
    
    return (
      <Stack.Navigator>
        <Stack.Screen name="Discover" component={Discover} options={{headerShown: false}} />
        <Stack.Screen name="Memberships" component={Overview} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }
}

export default DiscoverNavigation;
