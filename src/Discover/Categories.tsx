import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import HathaYoga from '../Assets/Icons/HathaYoga'
import VinyasaYoga from '../Assets/Icons/VinyasaYoga'
import YinYoga from '../Assets/Icons/YinYoga'
import LyengarYoga from '../Assets/Icons/LyengarYoga'
import CategoryCard from './CategoryCard'

interface Props {
    navigation: any;
}

export class Categories extends Component<Props> {
    navigateToCategoryDetails = () => {
        this.props.navigation.navigate("CategoryDetails");
    }
  render() {
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
        {
            icon: <LyengarYoga />,
            title: "lyengar yoga",
        },
        {
            icon: <LyengarYoga />,
            title: "lyengar yoga",
        },
        {
            icon: <LyengarYoga />,
            title: "lyengar yoga",
        },
        {
            icon: <LyengarYoga />,
            title: "lyengar yoga",
        },
        {
            icon: <VinyasaYoga />,
            title: "Vinyasa Yoga",
        },
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
      <ScreenWrapper title="Categories">
        <View style={styles.container}>
            {categoriesList.map((category, index) => (
                <CategoryCard icon={category.icon} title={category.title} onPress={this.navigateToCategoryDetails}/>
            ))}
        </View>
      </ScreenWrapper>
    )
  }
}

export default Categories;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignContent: 'center',
        gap: 20,
    }
});