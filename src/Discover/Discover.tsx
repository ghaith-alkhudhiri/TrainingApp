import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import MembershipsCard from './Components/MembershipsCard'
import ScreenWrapper from '../Layout/ScreenWrapper'
import Header from '../Home/Header'
import { NavProps } from '../types'
import SearchInput from '../Common/SearchInput'
import CustomButton from '../Common/CustomButton'
import EventCard from './Events/EventCard'
import SectionHeader from '../Home/SectionHeader'
import PersonalTrainerCard from './PersonalTrainers/PersonalTrainerCard'

export class Discover extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    return (
        <ScreenWrapper withoutHeader={true}>
            <View style={{paddingHorizontal: 14, gap: 17}}>
                <Header navigation={navigation} route={route} />
                <SearchInput />
                <MembershipsCard navigation={navigation} route={route}/>

                <SectionHeader title="Events" onPress={()=>{navigation.navigate('AllEvents')}} />
                <ScrollView horizontal contentContainerStyle={{gap: 13}}>
                  <EventCard 
                  title='Weight loss of the month' 
                  imageUrl={require('../Assets/Images/noor.png')}
                  tags={['Monthly Challenge', 'Fitness']}
                  time='3:00 - 4:00 PM'
                  date='23 July 2024'
                  />
                  <EventCard 
                  title='Weight loss of the month' 
                  imageUrl={require('../Assets/Images/noor.png')}
                  tags={['Monthly Challenge', 'Fitness']}
                  time='3:00 - 4:00 PM'
                  date='23 July 2024'
                  />
                  <EventCard 
                  title='Weight loss of the month' 
                  imageUrl={require('../Assets/Images/noor.png')}
                  tags={['Monthly Challenge', 'Fitness']}
                  time='3:00 - 4:00 PM'
                  date='23 July 2024'
                  />
                  <EventCard 
                  title='Weight loss of the month' 
                  imageUrl={require('../Assets/Images/noor.png')}
                  tags={['Monthly Challenge', 'Fitness']}
                  time='3:00 - 4:00 PM'
                  date='23 July 2024'
                  />
                </ScrollView>

                <SectionHeader title="Our Trainer" onPress={()=>{navigation.navigate('AllTrainers')}} />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                />
            </View>
            {/* <CustomButton onPress={()=>{navigation.navigate('Memberships')}}/> */}
            {/* <CustomButton onPress={()=>{navigation.navigate('AllEvents')}}/> */}
        </ScreenWrapper>
    );
  }
}

export default Discover