import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import CustomTabs from '../../Common/CustomTabs'
import { NavProps } from '../../types';
import MiniMetricsCard from './Components/MiniMetricsCard';

export class Metrics extends Component<NavProps> {
  render() {
    const metrics = [
      {
        title: 'Weight',
        number: 81.2,
        status: 'High',
      },
      {
        title: 'BMI',
        number: 31.2,
        status: 'High',
      },
      {
        title: 'Body Fat',
        number: 81.2,
        status: 'High',
      },
      {
        title: 'Water',
        number: 31.2,
        status: 'High',
        statusColor: 'med',
      },
      {
        title: 'Muscle mass',
        number: 81.2,
        status: 'High',
      },
      {
        title: 'Bone mass',
        number: 31.2,
        status: 'Excellent',
        statusColor: 'low',
      },
      {
        title: 'bmr',
        number: 81.2,
        status: 'High',
      },
      {
        title: 'visceral fat',
        number: 31.2,
        status: 'High',
        statusColor: 'med',
      },
      {
        title: 'Bone mass',
        number: 81.2,
        status: 'High',
      },
      {
        title: 'Body mass',
        number: 31.2,
        status: 'High',
        statusColor: 'med',
      },
    ]
    const tabs = [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <>
          <FlatList
          data={metrics}
          numColumns={2}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <MiniMetricsCard
                title={item.title}
                number={item.number}
                status={item.status}
                statusColor={(item.statusColor ?? 'high') as 'low' | 'med' | 'high'}
              />
            </View>
          )}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.columnWrapper}
        />
          </>
        )
      },
      {
        key: 'weekly',
        label: 'Weekly',
        content: (
          <></>
        )
      },
      {
        key: 'monthly',
        label: 'Monthly',
        content: (
          <></>
        )
      },
      {
        key: 'yearly',
        label: 'Yearly',
        content: (
          <></>
        )
      },
    ];
    return (
      <ScreenWrapper title='Metrics' childrenContainerStyle={{padding: 0, gap: 0}}>
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flex: 1,}}> */}
          <CustomTabs styleType='underline' tabs={tabs} tabBarStyle={{paddingHorizontal: 0}} />
        {/* </ScrollView> */}
      </ScreenWrapper>
    )
  }
}

export default Metrics

const styles = StyleSheet.create({
  listContainer: {
    gap: 9,
    paddingLeft: 25,
    paddingRight: 23,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    gap: 11,
  },
  cardContainer: {
    flex: 1,
  },
});
