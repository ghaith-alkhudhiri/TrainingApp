import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import DirectIcon from '../Assets/Icons/DirectIcon';
import NotificationBingIcon from '../Assets/Icons/NotificationBingIcon';
import { NavProps } from '../types';
import DownArrow from '../Assets/Icons/DownArrow';

export class Header extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    const username = 'User';
    const branch = 'Al Dammam';
    const country = 'SA';
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text>Hi {username}</Text>
            <View style={{flexDirection: 'row', gap: 5}}>
                <Text style={styles.branchText}>{branch}, {country}</Text>
                <View style={{alignSelf: 'baseline'}}>
                    <DownArrow color='#292D32' width={13} height={13} />
                </View>
            </View>
        </View>
        <View style={styles.iconsContainer}>
            <Pressable style={styles.iconContainer} onPress={()=>{navigation.navigate('Inbox')}}>
                <DirectIcon />
            </Pressable>
            <Pressable style={styles.iconContainer} onPress={()=>{navigation.navigate('Notification')}}>
                <NotificationBingIcon />
            </Pressable>
        </View>
      </View>
    )
  }
}

export default Header;

const styles = StyleSheet.create({
    iconContainer: {
        borderRadius: 34,
        backgroundColor: '#EAF2FF',
        padding: 5,

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    branchText: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 17.5,
    },
    welcomeContainer: {
        gap: 10,
    }

})