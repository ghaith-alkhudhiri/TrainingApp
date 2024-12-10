import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import HomePage from '../Home/HomePage';
import HomeNavigation from './HomeNavigation';
import HomeIcon from '../Assets/Icons/HomeIcon';
import DiscoverIcon from '../Assets/Icons/DiscoverIcon';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import ShopIcon from '../Assets/Icons/ShopIcon';
import ProfileIcon from '../Assets/Icons/ProfileIcon';
import Test from '../Test';
import DiscoverNavigation from './DiscoverNavigation';

const Tab = createBottomTabNavigator();
const tabs = [
    { title: 'Home', icon: <HomeIcon />, component: Test, path: 'home' },
    { title: 'Discover', icon: <DiscoverIcon />, component: Test, path: 'discover' },
    { title: 'Calendar', icon: <CalendarIcon />, component: Test, path: 'calendar' },
    { title: 'Shop', icon: <ShopIcon />, component: Test, path: 'shop' },
    { title: 'You', icon: <ProfileIcon />, component: Test, path: 'profile' },
  ];
const TabsNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeNavigation}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <HomeIcon />
            }}    
        />
        <Tab.Screen 
            name="Discover" 
            component={DiscoverNavigation}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <DiscoverIcon />
            }}    
        />
        <Tab.Screen
            name="Calendar"
            component={Test}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <CalendarIcon />
            }}
        />
        <Tab.Screen
            name="Shop"
            component={Test}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <ShopIcon />
            }}
        />
        <Tab.Screen
            name="You"
            component={Test}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <ProfileIcon />
            }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigation