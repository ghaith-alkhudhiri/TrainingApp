import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import DirectIcon from '../Assets/Icons/DirectIcon';
import NotificationBingIcon from '../Assets/Icons/NotificationBingIcon';
import { NavProps } from '../types';

export class Header extends Component<NavProps> {
  render() {
    const {navigation, route} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
            <Text>Hi User</Text>
            <View>
                <Text style={styles.branchText}>Al Dammam, SA</Text>
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
        marginBottom: 16,
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
        gap: 7,
    }

})