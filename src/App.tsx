import React, { Component } from 'react';
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
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingPage from './Onboarding/OnboardingPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabs = [
  { title: 'Home', icon: <HomeIcon />, component: HomePage, path: 'home' },
  { title: 'Discover', icon: <DiscoverIcon />, component: Test, path: 'discover' },
  { title: 'Calendar', icon: <CalendarIcon />, component: Test, path: 'calendar' },
  { title: 'Shop', icon: <ShopIcon />, component: Test, path: 'shop' },
  { title: 'You', icon: <ProfileIcon />, component: Test, path: 'profile' },
];

const config = {
  screens: {
      main: {
          path: "/",
          screens: tabs.reduce((acc, tab) => {
            acc[tab.title] = tab.path;
            return acc;
          }, {})
      }
  }
};


const linking = {
  prefixes: [],
  config,
};

class MainTabs extends Component {
  render(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            const tab = tabs.find((t) => t.title === route.name);
            return tab?.icon || null;
          },
          headerShown: false,
          tabBarShowLabel: true,
        })}
      >
        {tabs.map((tab) => (
          <Tab.Screen key={tab.title} name={tab.title} component={tab.component} />
        ))}
      </Tab.Navigator>
    );
  }
}

interface State {
  hasSeenOnboarding: boolean;
  isLoading: boolean;
}

export default class App extends Component<any, State> {
  constructor(props: any){
    super(props);
    this.state = {
      hasSeenOnboarding: false,
      isLoading: true
    };
  }

  async componentDidMount() {
    const status = await AsyncStorage.getItem('hasSeenOnboarding');
    this.setState({
      hasSeenOnboarding: status === 'true',
      isLoading: false,
    });
  }

  completeOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    this.setState({ hasSeenOnboarding: true });
  } 

  render(){
    const { hasSeenOnboarding, isLoading} = this.state;

    if(isLoading){
      return null; // Add loading spinner here
    }

    return (
      <NavigationContainer linking={linking as any}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!hasSeenOnboarding ? (
            <Stack.Screen name="Onboarding">
              {(props) => (
                <OnboardingPage {...props} onComplete={this.completeOnboarding} />
              )}
          </Stack.Screen>
          ): (
            <Stack.Screen name="MainApp" component={MainTabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  // return (
    // <View style={styles.holder}>
    //     <NavigationContainer linking={linking as any}>
    //         <Tab.Navigator screenOptions={({ route }) => ({
    //           tabBarIcon: () => {
    //             const tab = tabs.find((t) => t.title === route.name);
    //             return tab?.icon || null;
    //           },
    //           headerShown: false, // Optional: hide the header
    //           tabBarShowLabel: true, // Optional: control label visibility
    //       })}>
    //           {tabs.map((tab) => (
    //             <Tab.Screen
    //               key={tab.title}
    //               name={tab.title}
    //               component={tab.component}
    //             />
    //           ))}
    //         </Tab.Navigator>
    //     </NavigationContainer>
    // </View>
  // );
}

// export default App;

const styles = StyleSheet.create({
  holder: {
      maxHeight: "100%",
      height: "100%",
      overflow: "hidden",
      width: "100%"
  }

});
