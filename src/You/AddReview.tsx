import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import theme from '../Constants/theme'
import Star from '../Assets/Icons/Star'
import CustomTextInput from '../Common/CustomTextInput'
import { NavProps } from '../types'
import { Image } from 'react-native'

interface State {
  rating: number;
}

export class AddReview extends Component<NavProps, State> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleStarPress = (index: number) => {
    this.setState({ rating: index + 1 });
  };

  render() {
    const {rating} = this.state;
    console.log(rating);
    const {item} = this.props.route.params;
    
    return (
      <ScreenWrapper 
        {...(item.title && item.type ? { heroImage: true, heroImagesUrls: [], childrenContainerStyle: {gap: 20, marginTop: 27} } : {childrenContainerStyle: {gap: 20}})} 
      floatingBtn floatingBtnProps={[{label: 'Submit', onPress: ()=> {this.props.navigation.navigate('success', {title: 'Added Successfully', description: 'Your review on your class has been added successfully!'})}}]}
      >
        {(item.title && item.type) && (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.info}>{item.type}</Text>
          </View>
        )}
        {item.items && (
          <View style={[styles.row, {gap: 12}]}>
              <Image source={item.items[0].images[0] || {uri : 'https://via.placeholder.com/150'}} 
              style={{
                  width: 88,
                  aspectRatio: 1,
                  borderRadius: 7,
              }}
              resizeMode='cover'
              />
              <View>
                  <Text style={styles.title}>{item.items[0].title}</Text>
                  <Text style={styles.subTitle}>Size: {item.items[0].size} | Color: {item.items[0].color}</Text>
                  <Text style={styles.title}>{item.items[0].price} RS</Text>
              </View>
          </View>
        )}
        <View style={styles.divider} />
        <View style={{gap: 10}}>
          <Text style={styles.subTitle}>Your rating of the class </Text>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            {[...Array(5)].map((_, index) => (
              <Pressable key={index} onPress={() => this.handleStarPress(index)}>
                <Star filled={index < rating} width={28} height={28} />
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{gap: 10}}>
          <Text style={styles.subTitle}>Add your review</Text>
          <CustomTextInput placeholder={'Write your review'} inputContainerStyle={{paddingBottom: 100}} />
        </View>
        {item.items && (
          <Pressable onPress={()=>{}}>
            <Text style={{
              color: theme.primary,
              fontFamily: theme.font,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 17.5,
            }}>Add photos</Text>
          </Pressable>
      )}
      </ScreenWrapper>
    )
  }
}

export default AddReview

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: -0.3,
  },
  info:{
    color: '#000',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F3F3',
  },
  subTitle: {
    color: '#000',
    fontFamily: theme.font,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 17.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})