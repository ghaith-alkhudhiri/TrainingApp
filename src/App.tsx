import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './Test';
import HomePage from './Home/HomePage';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeIcon from './Assets/Icons/HomeIcon';
import ProfileIcon from './Assets/Icons/ProfileIcon';
import DiscoverIcon from './Assets/Icons/DiscoverIcon';
import CalendarIcon from './Assets/Icons/CalendarIcon';
import ShopIcon from './Assets/Icons/ShopIcon';

const Tab = createBottomTabNavigator();

const config = {
  screens: {
      main: {
          path: "/",
          screens: {
              // Menu: 'Menu/:parentKey?',
              Test: "Test",
              // Order: "Order",
              // CarList: "CarList",
              // CarForm: "CarForm",
              // AddressList: "AddressList",
              // MyOrders: "MyOrders",
              // Customization: "Customization",
              // Verify: "Verify",
              // Checkout: "Checkout",
              // OrderStatus: "OrderStatus/:id",
              // Home: ':id?'
          }
      }
  }
};

const tabs = [
  { title: 'Home', icon: <HomeIcon />, component: HomePage },
  { title: 'Discover', icon: <DiscoverIcon />, component: Test },
  { title: 'Calendar', icon: <CalendarIcon />, component: Test },
  { title: 'Shop', icon: <ShopIcon />, component: Test },
  { title: 'You', icon: <ProfileIcon />, component: Test },
];

const linking = {
  prefixes: [],
  config,
};

function App() {
  return (
    <View style={styles.holder}>
        <NavigationContainer linking={linking as any}>
            <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: () => {
                const tab = tabs.find((t) => t.title === route.name);
                return tab?.icon || null;
              },
              headerShown: false, // Optional: hide the header
              tabBarShowLabel: true, // Optional: control label visibility
          })}>
              {tabs.map((tab) => (
                <Tab.Screen
                  key={tab.title}
                  name={tab.title}
                  component={tab.component}
                />
              ))}
                {/* <Tab.Screen name="Test" component={Test} />
                <Tab.Screen name="Home" component={HomePage} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  holder: {
      maxHeight: "100%",
      height: "100%",
      overflow: "hidden",
      width: "100%"
  }

});
