import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HiddenTabBar from './HiddenTabBar';
import Discover from '../Discover/Discover';

const Stack = createStackNavigator();

class DiscoverNavigation extends Component{
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Discover" component={Discover} options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }
}

export default DiscoverNavigation;
