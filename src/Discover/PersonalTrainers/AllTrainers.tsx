import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import { FlatList } from 'react-native'
import { NavProps } from '../../types'
import Search from '../../Assets/Icons/Search'
import FilterSet from '../../Common/FilterSet'
import PersonalTrainerCard from './PersonalTrainerCard'

interface PT {
  id: string;
  imageUrl: string;
  name: string;
  tags?: string[];
  rating: number;
  reviews: number;
  position: string;
}

interface State {
  PTs: PT[];
  loading: boolean;
}

export class AllTrainers extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);

    this.state = {
      PTs: [],
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
    const samplePTs: PT[] = [
      {
        id: '1',
        name: 'Noor M. Ali',
        imageUrl: require('../../Assets/Images/noor.png'),
        tags: ['Hatha yoga', 'Yin yoga'],
        position: 'Yoga Trainer',
        rating: 4.5,
        reviews: 23,
      },
      {
        id: '2',
        name: 'Maryam Moh’d',
        imageUrl: require('../../Assets/Images/noor.png'),
        tags: ['Hatha yoga', 'Yin yoga'],
        position: 'Yoga Trainer',
        rating: 4.5,
        reviews: 23,
      },
      {
        id: '3',
        name: 'Maryam Moh’d',
        imageUrl: require('../../Assets/Images/noor.png'),
        tags: ['Hatha yoga', 'Yin yoga'],
        position: 'Yoga Trainer',
        rating: 4.5,
        reviews: 23,
      },
    ];
      this.setState({PTs: samplePTs, loading: false});
    })
  }

  renderPTCard = ({ item }: { item: PT }) => {
    return (
        <PersonalTrainerCard 
        name={item.name}
        imageUrl={item.imageUrl}
        tags={item.tags}
        rating={item.rating}
        reviews={item.reviews}
        position={item.position}
        navigation={this.props.navigation}
        route={this.props.route}
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
      <ScreenWrapper title='Our Trainer' rightElement={
        <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
          <Search/>
        </View>
      }>
        <FilterSet filters={['Filters', 'Price', 'Level']} />
          <FlatList 
          data={this.state.PTs} 
          keyExtractor={(item) => item.id}
          renderItem={this.renderPTCard}
          contentContainerStyle={{gap: 17,}}
          />
      </ScreenWrapper>
    )
  }
}

export default AllTrainers

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