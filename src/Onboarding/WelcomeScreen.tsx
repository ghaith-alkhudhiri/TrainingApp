import { Text, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import CustomButton from '../Common/CustomButton';
import { NavProps } from '../types';

const { height } = Dimensions.get('window');

interface Props {
    onComplete: ()=>{}
}

type WelcomeProps = Props & NavProps;
export class WelcomeScreen extends Component<WelcomeProps> {
    goToLogin = () => {
        // this.props.onComplete(); //remove
        console.log("Navigate to Login Page");
        this.props.navigation.navigate('Login');
    }

    render() {
    return (
      <View style={[styles.container]}>
        <Image
            source={require('../Assets/Images/welcome_bg.png')}
            style={styles.image}
            resizeMode='contain'
        />
        <View style={styles.overlay}>
            <View style={styles.welcomeOuterContainer}>
                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.title}>Finding the Best Pilates Classes for You</Text>
                    <Text style={styles.description}>App to search and discover the most suitable place for you to stay.</Text>
                </View>
                <CustomButton label="Let's Get Started" onPress={this.goToLogin} buttonStyle={styles.strechedBtn} />
                <Text style={styles.haveAccountText}>Already have an account? 
                    <TouchableOpacity onPress={this.goToLogin} style={styles.loginText}>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        backgroundColor: '#F8F8F8',
        minHeight: height
    },
    image: {
        width: 240,
        height: 489.365,
        position: 'absolute'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 345,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -23},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        paddingHorizontal: 24,
        paddingTop: 19
    },
    welcomeOuterContainer: {
        gap: 24,
        alignItems: 'center'
    },
    welcomeTextContainer: {
        gap: 24,
    },
    title: {
        color: '#1E1E1E',
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 600,
    },
    description: {
        color: '#797979',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 400,
    },
    haveAccountText: {
        color: '#242424',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 22,
    },
    strechedBtn: {
        alignSelf: 'stretch',
    },
    loginText: {
        color: '#0961F5',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 22,
        textDecorationLine: 'underline',
        cursor: 'pointer',
    }
})