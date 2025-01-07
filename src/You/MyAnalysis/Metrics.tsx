import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper'
import CustomTabs from '../../Common/CustomTabs'

export class Metrics extends Component {
  render() {
    const tabs = [
      {
        key: 'overview',
        label: 'Overview',
        content: (
          <></>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flex: 1}}>
          <CustomTabs styleType='underline' tabs={tabs} tabBarStyle={{paddingHorizontal: 0}} />
        </ScrollView>
      </ScreenWrapper>
    )
  }
}

export default Metrics