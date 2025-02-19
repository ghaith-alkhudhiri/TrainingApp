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
import UpcomingClasses from '../Home/UpcomingClasses'
import HathaYoga from '../Assets/Icons/HathaYoga'
import LyengarYoga from '../Assets/Icons/LyengarYoga'
import VinyasaYoga from '../Assets/Icons/VinyasaYoga'
import YinYoga from '../Assets/Icons/YinYoga'
import CategoryCard from './CategoryCard'

export class Discover extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    const categoriesList = [
      {
          icon: <HathaYoga />,
          title: "Hatha Yoga",
      },
      {
          icon: <VinyasaYoga />,
          title: "Vinyasa Yoga",
      },
      {
          icon: <YinYoga />,
          title: "Yin Yoga"
      },
      {
          icon: <LyengarYoga />,
          title: "lyengar yoga",
      },
    ]
    return (
        <ScreenWrapper withoutHeader={true}>
            {/* <View style={{paddingHorizontal: 14, gap: 17}}> */}
                <Header navigation={navigation} route={route} />
                <SearchInput />
                <SectionHeader title="Categories" onPress={()=>{this.props.navigation.navigate("Categories")}} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  {categoriesList.map((category, index) => (
                      <CategoryCard key={index} icon={category.icon} title={category.title} onPress={()=>{this.props.navigation.navigate("CategoryDetails")}}/>
                  ))}
                </View>
                <UpcomingClasses navigation={navigation} route={route} />
                <MembershipsCard navigation={navigation} route={route}/>
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

                <SectionHeader title="Our Trainer" onPress={()=>{navigation.navigate('AllTrainers')}} />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                navigation={navigation}
                route={route}
                />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                navigation={navigation}
                route={route}
                />
                <PersonalTrainerCard 
                name="Noor M. Ali"
                imageUrl={require('../Assets/Images/noor.png')}
                tags={['Hatha yoga', 'Yin yoga']}
                position="Yoga Trainer"
                rating={4.5}
                reviews={23}
                navigation={navigation}
                route={route}
                />
            {/* </View> */}
            {/* <CustomButton onPress={()=>{navigation.navigate('Memberships')}}/> */}
            {/* <CustomButton onPress={()=>{navigation.navigate('AllEvents')}}/> */}
        </ScreenWrapper>
    );
  }
}

export default Discover