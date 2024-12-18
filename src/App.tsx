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
import TabsNavigation from './Navigation/TabsNavigation';
import LoginPage from './Account/LoginPage';
import OTPVerification from './Account/OTPVerification';
import SuccessPage from './Common/SuccessPage';
import TestPage from './Test/TestPage';
import ProfileScreen from './Profile/ProfilePage';
import MemberPrerequisite from './Onboarding/MemberPrerequisite';
import WelcomeScreen from './Onboarding/WelcomeScreen';
import Goal from './Preferences/Goal';
import Data from './Preferences/Data';
import InboxScreen from './Inbox/InboxScreen';
import NotificationsScreen from './Notification/NotificationsScreen';
import Workouts from './Home/ToDo/Workouts/Workouts';
import TasksPage from './Tasks/TasksPage';
import BodyMeasurementOverview from './Tasks/BodyMeasurementOverview';
import BodyMeasurementForm from './Tasks/BodyMeasurementForm';
import { DocumentPage } from './Tasks/DocumentPage';
import DocumentViewer from './Tasks/DocumentViewer';
import ProgressPhoto from './Tasks/ProgressPhoto';
import Categories from './Discover/Categories';
import CategoryDetails from './Discover/CategoryDetails';
import ClassesPage from './Discover/ClassesPage';
import ClassesDetails from './Classes/ClassesDetails';
import Checkout from './Checkout/Checkout';

// const Tab = createBottomTabNavigator();
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
      onboarding: 'onboarding',
      login: 'login',
      'otp-verification': 'otp-verification',
      success: 'success',
      mainApp: {
        path: 'mainApp',
        screens: {
          home: 'home',
          discover: 'discover',
          calendar: 'calendar',
          shop: 'shop',
          profile: 'profile',
        },
      },
      test: 'test'
  }
};


const linking = {
  prefixes: ['http://localhost:3000'],
  config,
};

// class MainTabs extends Component {
//   render(){
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: () => {
//             const tab = tabs.find((t) => t.title === route.name);
//             return tab?.icon || null;
//           },
//           headerShown: false,
//           tabBarShowLabel: true,
//         })}
//       >
//         {tabs.map((tab) => (
//           <Tab.Screen key={tab.title} name={tab.title} component={tab.component} />
//         ))}
//       </Tab.Navigator>
//     );
//   }
// }

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
          {!hasSeenOnboarding ? (
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Categories'>
            <Stack.Screen name="Onboarding">
              {(props) => (
                <OnboardingPage {...props} onComplete={this.completeOnboarding} />
              )}
            </Stack.Screen>
            <Stack.Screen name="MemberPrerequisite" component={MemberPrerequisite} options={{headerShown: false}} />
            {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}} /> */}
            <Stack.Screen name="WelcomeScreen">
                {(props) => (
                  <WelcomeScreen {...props} onComplete={this.completeOnboarding} />
                )}
            </Stack.Screen>
            <Stack.Screen name="test" component={TestPage} />
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="otp-verification" component={OTPVerification} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="goals" component={Goal} />
            <Stack.Screen name="data" component={Data} />
            <Stack.Screen name="success" component={SuccessPage} />
            <Stack.Screen name="Tasks" component={TasksPage} />
            <Stack.Screen name="bodyMeasurement" component={BodyMeasurementOverview} />
            <Stack.Screen name="newBodyMeasurement" component={BodyMeasurementForm} />
            <Stack.Screen name="Document" component={DocumentPage} />
            <Stack.Screen name="DocumentViewer" component={DocumentViewer} />
            <Stack.Screen name="ProgressPhoto" component={ProgressPhoto} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            <Stack.Screen name="Classes" component={ClassesPage} />
            <Stack.Screen name="ClassDetails" component={ClassesDetails} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Main" component={TabsNavigation} />
          </Stack.Navigator>
          ): (
            <>
              {/* <Stack.Screen name="Login" component={LoginPage} /> */}
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Main" component={TabsNavigation} />
              {/* <TabsNavigation /> */}
              <Stack.Screen name="success" component={SuccessPage} />
            </>
          )}
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  holder: {
      maxHeight: "100%",
      height: "100%",
      overflow: "hidden",
      width: "100%"
  }

});
