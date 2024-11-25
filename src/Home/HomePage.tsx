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

interface HomePageProps {
  navigate: any;
}

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

export class HomePage extends Component<HomePageProps> {
  render() {
    const tabs = [
      {
        key: 'general',
        label: 'General',
        content: (
          <View style={{gap: 22}}>
            <AdvertisementBanner imageUrl='https://s3-alpha-sig.figma.com/img/ff82/42b7/8853662b37a74f0bb163d5471b0d694f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVQSZ5db-DRyg3qmYtK6~-gbqQKkf8nBDmWVR4XXG-M8HMJ8XXsvhZN-4S-uK9~vAdyEi9cTeeWwqNHGSMuu3v9C992R0wgOzwo6gNsKHK1Im~-ItW5ZzvGJF1y6V17scARYvLhEe5rbHnbAtVa91YmNvMbuuwkBACgcV45g9R-GJrqXWbwA3KaoYk4CmEfaT3Ly93MFFR0U7BQb5ChMw~e~UbuorrfvbNJpD6r~m-cmRslcVKoRy-9h~ZZFxFYRAzhtMsNOe4A~WntihThwVem44GIsTaPVv7U-KoU70SE0ACswTAeyEgGkPsNstnivSODo2TJ95ii9HHs5gyR43g__' title='Varies Membership' description="Don't miss out on our membership benefits" cta='Shop now' />
            <UpcomingClasses />
            <AdvertisementBanner 
              imageUrl='https://s3-alpha-sig.figma.com/img/4228/4932/fbdd36834c5ba5297716cd08de7c9d33?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdUqEgnJFYxf5vIuSYZTEq0BcS~brGX2hf5Tjhc3EptfP8vTnR9YpE267QQBuZN9hB2sd2~mT~MAKie8lbDli7oY03wLRi8YztHAJleohxGw3iLgSPZfnDI9rvbuM0KB4knLvm4t9kxFLoTS0ndnWYWSmJL1oIHd4JU0boADVz8N7dxFpU7m0KqCjXQlSD7WdEuZ7G2vyYyPdUlMmHHaLRpQFBH5YL9rGY~1xZbsOVQC-JBqNmQ~uCKbgNrYjPqha8WJuoMlYN7amqvzUDki4hQPQQnseTZKRUeT8~A5JNggW~KJeyrUAr3Li2Vj2-9BHQgg~gkcl6kGK7I4eae4qQ__'
              title="New Collection"
              description='Be the first to buy the new merchandise'
              cta='Shop now'
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
              <CustomSectionCard sectionTitle='Workout of Day' title='Empty' description='You did not have any exercise or tasks on this date' image={<ClipboardIcon fill={theme.primary} />} titleStyle={{textAlign: 'center'}} descriptionStyle={{textAlign: 'center'}} />
              <CustomSectionCard sectionTitle='Tasks' title='Empty' description='You did not have any exercise or tasks on this date' image={<DumbbellIcon fill={theme.primary} />} titleStyle={{textAlign: 'center'}} descriptionStyle={{textAlign: 'center'}} />
          </View>
        )
      }
    ];
    return (
        <ScreenWrapper withoutHeader={true}>
          {/* <Home/> */}
          <Header />
          <SearchInput />
          <CustomTabs styleType='small' tabs={tabs} />
          {/* <AdvertisementBanner imageUrl='https://s3-alpha-sig.figma.com/img/ff82/42b7/8853662b37a74f0bb163d5471b0d694f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVQSZ5db-DRyg3qmYtK6~-gbqQKkf8nBDmWVR4XXG-M8HMJ8XXsvhZN-4S-uK9~vAdyEi9cTeeWwqNHGSMuu3v9C992R0wgOzwo6gNsKHK1Im~-ItW5ZzvGJF1y6V17scARYvLhEe5rbHnbAtVa91YmNvMbuuwkBACgcV45g9R-GJrqXWbwA3KaoYk4CmEfaT3Ly93MFFR0U7BQb5ChMw~e~UbuorrfvbNJpD6r~m-cmRslcVKoRy-9h~ZZFxFYRAzhtMsNOe4A~WntihThwVem44GIsTaPVv7U-KoU70SE0ACswTAeyEgGkPsNstnivSODo2TJ95ii9HHs5gyR43g__' title='Varies Membership' description="Don't miss out on our membership benefits" cta='Shop now' />
          <UpcomingClasses />
          <AdvertisementBanner 
            imageUrl='https://s3-alpha-sig.figma.com/img/4228/4932/fbdd36834c5ba5297716cd08de7c9d33?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdUqEgnJFYxf5vIuSYZTEq0BcS~brGX2hf5Tjhc3EptfP8vTnR9YpE267QQBuZN9hB2sd2~mT~MAKie8lbDli7oY03wLRi8YztHAJleohxGw3iLgSPZfnDI9rvbuM0KB4knLvm4t9kxFLoTS0ndnWYWSmJL1oIHd4JU0boADVz8N7dxFpU7m0KqCjXQlSD7WdEuZ7G2vyYyPdUlMmHHaLRpQFBH5YL9rGY~1xZbsOVQC-JBqNmQ~uCKbgNrYjPqha8WJuoMlYN7amqvzUDki4hQPQQnseTZKRUeT8~A5JNggW~KJeyrUAr3Li2Vj2-9BHQgg~gkcl6kGK7I4eae4qQ__'
            title="New Collection"
            description='Be the first to buy the new merchandise'
            cta='Shop now'
          />
          <Events/> */}
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