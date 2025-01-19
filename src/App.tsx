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

const screens = {
  "test": TestPage,
  "Login": LoginPage,
  "otp-verification": OTPVerification,
  "Profile": ProfileScreen,
  "goals": Goal,
  "data": Data,
  "success": SuccessPage,
  "Tasks": TasksPage,
  "bodyMeasurement": BodyMeasurementOverview,
  "newBodyMeasurement": BodyMeasurementForm,
  "Document": DocumentPage,
  "DocumentViewer": DocumentViewer,
  "ProgressPhoto": ProgressPhoto,
  "Categories": Categories,
  "CategoryDetails": CategoryDetails,
  "Classes": ClassesPage,
  "You": You,
  "Settings": Settings,
  "DeleteAccount": DeleteAccountForm,
  "Language": Language,
  "AboutGym": AboutGym,
  "ContactUs": ContactUs,
  "MembershipsSettings": MembershipsSettings,
  "ClassesSettings": ClassesSettings,
  "WorkoutsSettings": WorkoutsSettings,
  "MyOrders": MyOrders,
  "NotificationsSettings": NotificationsSettings,
  "PrivacyPolicy": PrivacyPolicy,
  "EWallet": EWallet,
  "Topup": TopUp,
  "AmountInput": AmountInput,
  "MyFamily": MyFamily,
  "MyAnalysis": MyAnalysis,
  "ClassDetails": ClassesDetails,
  "ReviewSummary": ReviewSummary,
  "Checkout": Checkout,
  "Cart": CartPage,
  "Receipt": Receipt,
  "HelpCenter": HelpCenter,
  "EventCard": EventCard,
  "Event": EventPage,
  "EventDetails": EventDetails,
  "AllEvents": AllEvents,
  "TrainerCard": PersonalTrainerCard,
  "TrainerProfile": TrainerProfile,
  "AllTrainers": AllTrainers,
  "Shop": Shop,
  "ShopCat": ShopCategoryPage,
  "Product": ProductPage,
  "MembershipForm": MembershipForm,
  "Memberships": Overview,
  "MembershipDetail": MembershipDetail,
  "Reschedule": Reschedule,
  "AddReview": AddReview,
  "Track": TrackPage,
  "MyGoals": MyGoals,
  "Metrics": Metrics,
  "InBodyResults": InBodyResults,
  "Main": TabsNavigation,
  "Home": HomePage,
}

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
            {Object.entries(screens).map(([name, component]) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
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
