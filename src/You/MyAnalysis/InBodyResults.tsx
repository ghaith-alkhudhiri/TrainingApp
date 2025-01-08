import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { Component } from 'react';
import ScreenWrapper from '../../Layout/ScreenWrapper';
import CustomTabs from '../../Common/CustomTabs';
import { NavProps } from '../../types';
import InBodyMeasurement from './Components/InBodyMeasurement';
import RightChevron from '../../Assets/Icons/RightChevron';
import theme from '../../Constants/theme';
import BackArrowIcon from '../../Assets/Icons/BackArrow';

interface State {
    selectedMeasurement: string | null
    activeTab: 'monthly' | 'yearly';
}

export class InBodyResults extends Component<NavProps, State> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            selectedMeasurement: null,
            activeTab: 'monthly',
        };
    }

    handleItemPress = (title: string) => {
        this.setState({ selectedMeasurement: title });
    };

    handleGoBack = () => {
        this.setState({ selectedMeasurement: null });
    };

    handleTabChange = (tabKey: string) => {
        this.setState({ activeTab: tabKey as 'monthly' | 'yearly', selectedMeasurement: null });
    };    
    
  render() {
    const { selectedMeasurement, activeTab } = this.state;

    const monthly = [
        { title: 'May Measurement' },
        { title: 'April Measurement' },
        { title: 'March Measurement' },
    ];

    const yearly = [
        { title: '2024 Measurement' },
        { title: '2023 Measurement' },
    ];

    const currentList = activeTab === 'monthly' ? monthly : yearly;

    const renderListItems = (
        <View>
          {currentList.map((item, index) => (
            <Pressable
              key={index}
              style={styles.listItem}
              onPress={() => this.handleItemPress(item.title)}
            >
              <View style={styles.listContainer}>
                <Text style={styles.listText}>{item.title}</Text>
              </View>
              <RightChevron fill="#0165FC" />
            </Pressable>
          ))}
        </View>
    );

    const renderInBodyMeasurement = (
        <View>
          <Pressable onPress={this.handleGoBack} style={{paddingHorizontal: 24, marginBottom: 5}}>
            <BackArrowIcon />
          </Pressable>
          <InBodyMeasurement />
        </View>
    );  

    const tabs = [
      {
        key: 'overview',
        label: 'Overview',
        content: <InBodyMeasurement />,
      },
      {
        key: 'monthly',
        label: 'Monthly',
        content: selectedMeasurement ? renderInBodyMeasurement : renderListItems,
      },
      {
        key: 'yearly',
        label: 'Yearly',
        content: selectedMeasurement ? renderInBodyMeasurement : renderListItems,
      },
    ];

    return (
      <ScreenWrapper title="InBody Results" childrenContainerStyle={{ padding: 0 }}>
        <CustomTabs styleType="underline" tabs={tabs} tabBarStyle={{ paddingHorizontal: 0 }} onTabChange={this.handleTabChange} />
      </ScreenWrapper>
    );
  }
}

export default InBodyResults;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderColor: "#EDEDED",
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    listText: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 14,
        lineHeight: 17,
    },
})