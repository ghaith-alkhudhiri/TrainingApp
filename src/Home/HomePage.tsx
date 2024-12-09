import { Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
// import Home from '../components/Home';
import Events from './Events';
import UpcomingClasses from './UpcomingClasses';
import ScreenWrapper from '../Layout/ScreenWrapper';
import AdvertisementBanner from './AdvertisementBanner';
import Header from './Header';
import SearchInput from '../Common/SearchInput';
import CustomTabs from '../Common/CustomTabs';
import CustomSectionCard from '../Common/CustomSectionCard';
// import HomeIcon from '../assets/icons/HomeIcon';
import ClipboardIcon from '../Assets/Icons/ClipboardIcon';
import DumbbellIcon from '../Assets/Icons/DumbbellIcon';
import RightArrow from '../Assets/Icons/RightArrow';
// import SectionWrapper from '../components/profile/SectionWrapper';
import SectionHeader from '../Home/SectionHeader';
import GoalsCard from './GoalsCard';
// import WeightGraph from '../components/common/CustomGraph';
import theme from '../Constants/theme';
import ToDoSection from './ToDo/ToDoSection';
import { NavProps } from '../types';
import HighlightedClassCard from './HighlightedClassCard';

const goals = [
  { title: 'Previous', value: 80, unit: 'kg'},
  { title: 'Goal', value: 75, unit: 'kg'},
  { title: 'Current', value: 71, unit: 'kg'},
];

const weightData = [
  { date: '2024-01-01', weight: 70 },
  { date: '2024-01-08', weight: 69.5 },
  { date: '2024-02-01', weight: 69 },
  { date: '2024-03-01', weight: 68.5 },
  { date: '2024-06-01', weight: 67 },
  { date: '2024-07-01', weight: 66},
  { date: '2024-07-02', weight: 64},
  { date: '2024-07-03', weight: 65},
  { date: '2024-07-04', weight: 61},
  { date: '2024-07-11', weight: 61},
  { date: '2024-07-12', weight: 61},
  { date: '2024-07-13', weight: 61},
];

const workouts = [
  {
    id: '1',
    title: 'Upper Workout',
    tags: ['Hardcore', 'Yoga'],
    progress: 5,
    total: 20,
    image: 'https://via.placeholder.com/150',
    instructor: 'Noor M. Ali',
  },
  {
    id: '2',
    title: 'Lower Workout',
    tags: ['Hardcore', 'Yoga'],
    progress: 5,
    total: 20,
    image: 'https://via.placeholder.com/150',
    instructor: 'Noor M. Ali',
  },
];

const tasks = [
  {
    id: '1',
    title: 'Body Measurement',
    description: 'June Weight Update',
    time: '10:00 AM',
    date: '13th June, 2024',
    completed: true,
  },
  {
    id: '2',
    title: 'Tips for breath work',
    description: 'Useful Document',
    time: '10:00 AM',
    date: '13th June, 2024',
    completed: false,
  },
  {
    id: '3',
    title: 'Progress Photo',
    description: 'June Progress Photo',
    time: '10:00 AM',
    date: '13th June, 2024',
    completed: false,
  },
];

export class HomePage extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    const tabs = [
      {
        key: 'general',
        label: 'General',
        content: (
          <View style={{gap: 22, marginTop: 5}}>
            <AdvertisementBanner 
              imageUrl={require('../Assets/Images/ad.png')}
              title='Varies Membership'
              description="Don't miss out on our membership benefits"
              cta='Shop now'
            />
            <UpcomingClasses />
            <AdvertisementBanner 
              imageUrl={require('../Assets/Images/ad2.png')}
              title="New Collection"
              description='Be the first to buy the new merchandise'
              cta='Shop now'
            />
            <SectionHeader title="Upcoming Classes" counter={3} onPress={() => {}} />
            <HighlightedClassCard 
              title='Hatha yoga'
              date='Monday, 26 July'
              time='09:00 - 10:00'
              coach='Noor M. Ali'
              imageUrl={require('../Assets/Images/img.png')}
            />
            <Events/>
          </View>
        )
      },
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <View style={{gap: 22}}>
              <CustomSectionCard sectionTitle='Your Plan' title='No Plan Yet!' description='no plan yet, but click here to view our memberships' styleType='border' actionLabel='View Now' actionIcon={<RightArrow />} onPress={()=>{}} titleStyle={{fontSize: 14, fontWeight: '500', lineHeight: 17.5}} />
              <View>
                <SectionHeader showActionBtn={false} title="Goals" />
                <GoalsCard goals={goals} />
              </View>
              <View>
                <SectionHeader showActionBtn={false} showDropdown={true} title="Weight" />
                {/* <WeightGraph data={weightData} /> */}
              </View>
          </View>
        )
      },
      {
        key: 'todo',
        label: 'To do',
        content: (
          <View style={{gap: 22}}>
            <ToDoSection navigation={navigation} route={route} />
          </View>
        )
      }
    ];
    return (
        <ScreenWrapper withoutHeader={true}>
          <View style={{paddingHorizontal: 14, gap: 17}}>
            <Header navigation={navigation} route={route} />
            <SearchInput />
            <CustomTabs styleType='small' tabs={tabs} />
          </View>
        </ScreenWrapper>
    );
  };
}

export default HomePage

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 15,
    gap: 10,
    backgroundColor: 'white'
  },
  form: {
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    width: 250,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: 'white',
    borderRadius: 10,
  },
  errorText: {
    backgroundColor: '#FFCCCB',
    color: 'red',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  successText: {
    backgroundColor: 'lightgreen',
    color: 'green',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  }
})