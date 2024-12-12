import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import CustomTabs from '../../Common/CustomTabs'
import PlanCard from './Components/PlanCard'
import SearchIcon from '../../Assets/Icons/SearchIcon'
import { FlatList } from 'react-native'
import { NavProps } from '../../types'
import Search from '../../Assets/Icons/Search'

interface Plan {
  id: string;
  title: string;
  features: string[];
  price: number;
  userState: 'noMembership' | 'withMembership' | 'visitor';
  tag?: string;
}

interface State {
  plans: Plan[];
  loading: boolean;
}

export class MembershipScreen extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);

    this.state = {
      plans: [],
      loading: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const samplePlans: Plan[] = [
        {
          id: '1',
          title: 'Gymname Basic',
          price: 200,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'withMembership',
        },
        {
          id: '2',
          title: 'Gymname gold',
          price: 2000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'withMembership',
        },
        {
          id: '3',
          title: 'Gymname Premium',
          price: 5000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'withMembership',
        },
        {
          id: '4',
          title: 'Gymname Basic',
          price: 200,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'noMembership',
        },
        {
          id: '5',
          title: 'Gymname gold',
          price: 2000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'noMembership',
        },
        {
          id: '6',
          title: 'Gymname Premium',
          price: 5000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'noMembership',
        },
        {
          id: '7',
          title: 'Gymname Basic',
          price: 200,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'visitor',
        },
        {
          id: '8',
          title: 'Gymname gold',
          price: 2000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'visitor',
        },
        {
          id: '9',
          title: 'Gymname Premium',
          price: 5000,
          features: ['Feature information one', 'Feature information two', 'Feature information three'],
          userState: 'visitor',
        },
      ];
      this.setState({plans: samplePlans, loading: false});
    })
  }

  renderPlanCard = ({ item }: { item: Plan }) => {
    return (
      <PlanCard
        title={item.title}
        features={item.features}
        price={item.price}
        userState={item.userState}
        // currentPlan={item.userState === 'withMembership' ? item.title : undefined}
        currentPlan={'Gymname Basic'}
        tag={item.tag}
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
      <ScreenWrapper title='Membership' rightElement={
        <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6',}}>
          <Search/>
        </View>
      }>
          <CustomTabs styleType='small' tabs={[
            {key: '1', label: 'Filters ˅', content: null,},
            {key: '2', label: 'Price ˅', content: null,},
            {key: '3', label: 'Level ˅', content: null,},
          ]} />
          <FlatList 
          data={this.state.plans} 
          keyExtractor={(item) => item.id}
          renderItem={this.renderPlanCard}
          contentContainerStyle={{gap: 15,}}
          />
      </ScreenWrapper>
    )
  }
}

export default MembershipScreen

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