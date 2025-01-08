import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeNavigation from './HomeNavigation';
import HomeIcon from '../Assets/Icons/HomeIcon';
import DiscoverIcon from '../Assets/Icons/DiscoverIcon';
import CalendarIcon from '../Assets/Icons/CalendarIcon';
import ShopIcon from '../Assets/Icons/ShopIcon';
import ProfileIcon from '../Assets/Icons/ProfileIcon';
import Test from '../Test';
import DiscoverNavigation from './DiscoverNavigation';
import Shop from '../Shop/Shop';
import You from '../You/You';

const Tab = createBottomTabNavigator();

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
            component={Shop}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <ShopIcon />
            }}
        />
        <Tab.Screen
            name="You"
            component={You}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => <ProfileIcon color='#9DB2CE'/>
            }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigation