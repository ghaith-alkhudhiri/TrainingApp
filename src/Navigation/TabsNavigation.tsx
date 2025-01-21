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
import EventCalendarIcon from '../Assets/Icons/EventCalendarIcon';
import CalendarScreen from '../Calendar/CalendarScreen';

const Tab = createBottomTabNavigator();

const TabsNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name="Home" 
            component={HomeNavigation}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => <HomeIcon focused={focused ? true : false} />
            }}    
        />
        <Tab.Screen 
            name="Discover" 
            component={DiscoverNavigation}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => <DiscoverIcon focused={focused ? true : false} />
            }}    
        />
        <Tab.Screen
            name="Calendar"
            component={CalendarScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => focused ? <EventCalendarIcon width={24} height={24} /> : <CalendarIcon />
            }}
        />
        <Tab.Screen
            name="Shop"
            component={Shop}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => <ShopIcon focused={focused ? true : false} />
            }}
        />
        <Tab.Screen
            name="You"
            component={You}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => <ProfileIcon color='#9DB2CE' focused={focused ? true : false} />
            }}
        />
    </Tab.Navigator>
  )
}

export default TabsNavigation