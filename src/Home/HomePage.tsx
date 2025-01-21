import { Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
// import Home from '../components/Home';
// import Events from './Events';
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
import EventCard from '../Discover/Events/EventCard';
import WeightGraph from '../Common/WeightGraph';

const goals = [
  { title: 'Previous', value: 80, unit: 'kg'},
  { title: 'Goal', value: 75, unit: 'kg'},
  { title: 'Current', value: 71, unit: 'kg'},
];

interface State {
  selectedView: 'Weekly' | 'Monthly' | 'Yearly';
}

export default class HomePage extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      selectedView: 'Weekly',
    };
  }

  // Handle dropdown change
  handleViewChange = (selectedView: 'Weekly' | 'Monthly' | 'Yearly') => {
    this.setState({ selectedView });
  };
  render() {
    const {navigation, route} = this.props;
    const { selectedView } = this.state;
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
            <UpcomingClasses navigation={navigation} route={route} />
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
            
            <SectionHeader title="Events" onPress={()=>{navigation.navigate('AllEvents', {navigation: navigation, route: route})}} />
              <ScrollView horizontal contentContainerStyle={{gap: 13}}>
                <EventCard
                title='Weight loss of the month' 
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Monthly Challenge', 'Fitness']}
                time='3:00 - 4:00 PM'
                date='23 July 2024'
                navigation={navigation}
                route={route}
                />
                <EventCard
                title='Weight loss of the month' 
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Monthly Challenge', 'Fitness']}
                time='3:00 - 4:00 PM'
                date='23 July 2024'
                navigation={navigation}
                route={route}
                />
                <EventCard
                title='Weight loss of the month' 
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Monthly Challenge', 'Fitness']}
                time='3:00 - 4:00 PM'
                date='23 July 2024'
                navigation={navigation}
                route={route}
                />
                <EventCard
                title='Weight loss of the month' 
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Monthly Challenge', 'Fitness']}
                time='3:00 - 4:00 PM'
                date='23 July 2024'
                navigation={navigation}
                route={route}
                />
              </ScrollView>
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
                <SectionHeader
                  showActionBtn={false}
                  showDropdown={true}
                  title="Weight"
                  selectedView={selectedView}
                  onViewChange={this.handleViewChange}
                />
                {/* <WeightGraph data={weightData} /> */}
                <WeightGraph selectedView={selectedView} />
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
        <ScreenWrapper withoutHeader={true} childrenContainerStyle={{gap: 13}}>
          <View style={{gap: 16}}>
            <Header navigation={navigation} route={route} />
            <SearchInput />
          </View>
          <CustomTabs styleType='small' tabs={tabs} />
        </ScreenWrapper>
    );
  };
}
