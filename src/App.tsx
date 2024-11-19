import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './Test';
import HomePage from './Home/HomePage';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const linking = {
  prefixes: [],
  config,
};

function App() {
  return (
    <View style={styles.holder}>
        <NavigationContainer linking={linking as any}>
            <Tab.Navigator>
                <Tab.Screen name="Test" component={Test} />
                <Tab.Screen name="Home" component={HomePage} />
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
