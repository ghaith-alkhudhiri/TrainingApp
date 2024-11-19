import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './Test';


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
    <View style={{flex: 1, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, color: 'white'}}>Hello From create react app + react native web + react-native-app</Text>
      <NavigationContainer linking={linking as any}>
          <Tab.Navigator id={undefined}>
              <Tab.Screen name="Test" component={Test} />
          </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
