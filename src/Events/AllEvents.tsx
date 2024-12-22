import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import { FlatList } from 'react-native'
import { NavProps } from '../types'
import Search from '../Assets/Icons/Search'
import FilterSet from '../Common/FilterSet'
import EventCard from './EventCard'

interface Event {
  id: string;
  imageUrl: string;
  title: string;
  tags: string[];
  time: string;
  date: string;
  CTA?: string;
}

interface State {
  events: Event[];
  loading: boolean;
}

export class AllEvents extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);

    this.state = {
      events: [],
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
    const sampleEvents: Event[] = [
      {
        id: '1',
        title: 'Weight loss of the month',
        imageUrl: require('../Assets/Images/noor.png'),
        tags: ['Monthly Challenge', 'Fitness'],
        time: '3:00 - 4:00 PM',
        date: '23 July 2024',
      },
      {
        id: '2',
        title: 'Studio Family',
        imageUrl: require('../Assets/Images/noor.png'),
        tags: ['Monthly Challenge', 'Fitness'],
        time: '3:00 - 4:00 PM',
        date: '23 July 2024',
      },
      {
        id: '3',
        title: 'Studio Family',
        imageUrl: require('../Assets/Images/noor.png'),
        tags: ['Monthly Challenge', 'Fitness'],
        time: '3:00 - 4:00 PM',
        date: '23 July 2024',
      },
    ];
      this.setState({events: sampleEvents, loading: false});
    })
  }

  renderPlanCard = ({ item }: { item: Event }) => {
    return (
      <EventCard
        title={item.title}
        imageUrl={item.imageUrl}
        tags={item.tags}
        time={item.time}
        date={item.date}
        CTA={item.CTA}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      );
    }
    return (
      <ScreenWrapper title='Event' rightElement={
        <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
          <Search/>
        </View>
      }>
        <FilterSet filters={['Filters', 'Price', 'Level']} />
          <FlatList 
          data={this.state.events} 
          keyExtractor={(item) => item.id}
          renderItem={this.renderPlanCard}
          contentContainerStyle={{gap: 10,}}
          />
      </ScreenWrapper>
    )
  }
}

export default AllEvents

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
})