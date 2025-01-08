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
import TasksPage from './Home/ToDo/Tasks/TasksPage';
import BodyMeasurementOverview from './Home/ToDo/Tasks/BodyMeasurementOverview';
import BodyMeasurementForm from './Home/ToDo/Tasks/BodyMeasurementForm';
import { DocumentPage } from './Home/ToDo/Tasks/DocumentPage';
import DocumentViewer from './Home/ToDo/Tasks/DocumentViewer';
import ProgressPhoto from './Home/ToDo/Tasks/ProgressPhoto';
import Categories from './Discover/Categories';
import CategoryDetails from './Discover/CategoryDetails';
import ClassesPage from './Discover/ClassesPage';
import ClassesDetails from './Classes/ClassesDetails';
import Checkout from './Checkout/Checkout';
import Receipt from './Checkout/Receipt';
import EventDetails from './Discover/Events/EventDetails';
import AllEvents from './Discover/Events/AllEvents';
import EventCard from './Discover/Events/EventCard';
import CartPage from './Cart/CartPage';
import AllTrainers from './Discover/PersonalTrainers/AllTrainers';
import PersonalTrainerCard from './Discover/PersonalTrainers/PersonalTrainerCard';
import TrainerProfile from './Discover/PersonalTrainers/TrainerProfile';
import Shop from './Shop/Shop';
import You from './You/You';
import Settings from './You/Settings';
import MembershipsSettings from './You/MembershipsSettings';
import ClassesSettings from './You/ClassesSettings';
import WorkoutsSettings from './You/WorkoutsSettings';
import MyOrders from './You/MyOrders';
import EWallet from './You/EWallet';
import MyFamily from './You/MyFamily';
import MyAnalysis from './You/MyAnalysis/MyAnalysis';
import AboutGym from './You/AboutGym';
import ShopCategoryPage from './Shop/ShopCategoryPage';
import ProductPage from './Shop/ProductPage';
import ContactUs from './You/ContactUs';
import HelpCenter from './You/HelpCenter';
import NotificationsSettings from './You/NotificationsSettings';
import PrivacyPolicy from './You/PrivacyPolicy';
import DeleteAccountForm from './You/DeleteAccountForm';
import Language from './You/Language';
import TopUp from './You/TopUp';
import AmountInputScreen from './You/AmountInput';
import AmountInput from './You/AmountInput';
import MembershipForm from './You/MembershipForm';
import ReviewSummary from './Cart/ReviewSummary';
import Reschedule from './You/Reschedule';
import AddReview from './You/AddReview';
import TrackPage from './You/TrackPage';
import MyGoals from './You/MyAnalysis/MyGoals';
import Metrics from './You/MyAnalysis/Metrics';
import InBodyResults from './You/MyAnalysis/InBodyResults';
import EventPage from './Discover/Events/EventPage';
import MembershipDetail from './Discover/Memberships/MembershipDetail';
import Overview from './Home/ToDo/Workouts/Overview';

// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabs = [
  { title: 'Home', icon: <HomeIcon />, component: HomePage, path: 'home' },
  { title: 'Discover', icon: <DiscoverIcon />, component: Test, path: 'discover' },
  { title: 'Calendar', icon: <CalendarIcon />, component: Test, path: 'calendar' },
  { title: 'Shop', icon: <ShopIcon />, component: Test, path: 'shop' },
  { title: 'You', icon: <ProfileIcon color="#9DB2CE" />, component: Test, path: 'profile' },
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
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Main'>
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
            <Stack.Screen name="You" component={You} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="DeleteAccount" component={DeleteAccountForm} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="AboutGym" component={AboutGym} />
            <Stack.Screen name="ContactUs" component={ContactUs} />
            <Stack.Screen name="MembershipsSettings" component={MembershipsSettings} />
            <Stack.Screen name="ClassesSettings" component={ClassesSettings} />
            <Stack.Screen name="WorkoutsSettings" component={WorkoutsSettings} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
            <Stack.Screen name="NotificationsSettings" component={NotificationsSettings} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Stack.Screen name="EWallet" component={EWallet} />
            <Stack.Screen name="Topup" component={TopUp} />
            <Stack.Screen name="AmountInput" component={AmountInput} />
            <Stack.Screen name="MyFamily" component={MyFamily} />
            <Stack.Screen name="MyAnalysis" component={MyAnalysis} />
            <Stack.Screen name="ClassDetails" component={ClassesDetails} />
            <Stack.Screen name="ReviewSummary" component={ReviewSummary} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Cart" component={CartPage} />
            <Stack.Screen name="Receipt" component={Receipt} />
            <Stack.Screen name="HelpCenter" component={HelpCenter} />
            <Stack.Screen name="EventCard" component={EventCard} />
            <Stack.Screen name="Event" component={EventPage} />
            <Stack.Screen name="EventDetails" component={EventDetails} />
            <Stack.Screen name="AllEvents" component={AllEvents} />
            <Stack.Screen name="TrainerCard" component={PersonalTrainerCard} />
            <Stack.Screen name="TrainerProfile" component={TrainerProfile} />
            <Stack.Screen name="AllTrainers" component={AllTrainers} />
            <Stack.Screen name="Shop" component={Shop} />
            <Stack.Screen name="ShopCat" component={ShopCategoryPage} />
            <Stack.Screen name="Product" component={ProductPage} />
            <Stack.Screen name="MembershipForm" component={MembershipForm} />
            <Stack.Screen name="Memberships" component={Overview} />
            <Stack.Screen name="MembershipDetail" component={MembershipDetail} />
            <Stack.Screen name="Reschedule" component={Reschedule} />
            <Stack.Screen name="AddReview" component={AddReview} />
            <Stack.Screen name="Track" component={TrackPage} />
            <Stack.Screen name="MyGoals" component={MyGoals} />
            <Stack.Screen name="Metrics" component={Metrics} />
            <Stack.Screen name="InBodyResults" component={InBodyResults} />
            <Stack.Screen name="Main" component={TabsNavigation} />
            <Stack.Screen name="Home" component={HomePage} />
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
