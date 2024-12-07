import { Text, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import CustomButton from '../Common/CustomButton';
import CustomModal, { Action } from '../Common/CustomModal';
import theme from '../Constants/theme';
import { NavProps } from '../types';

const { height } = Dimensions.get('window');

interface State {
    modalVisible: boolean;
}
export class MemberPrerequisite extends Component<NavProps, State> {
    constructor(props: NavProps) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }
    goToWelcomeScreen = () => {
        this.props.navigation.navigate('WelcomeScreen');
    }

    render() {
        const actions: Action[] = [
            {
              text: 'Okay',
              onPress: () => this.setState({modalVisible: false}),
              style: 'primary',
            },
            {
              text: 'Our Gym Location',
              onPress: () => this.setState({modalVisible: false}),
              style: 'outline',
            },
          ];        
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
                    <Text style={styles.title}>Are you a <Text style={{color: theme.primary}}>member</Text>{"\n"}of our gym</Text>
                    <Text style={styles.description}>You must be member in our gym so you can use our app! </Text>
                </View>
                <View style={[styles.stretchedBtn, {gap: 15}]}>
                    <CustomButton label="Yes, I am" onPress={this.goToWelcomeScreen} buttonStyle={styles.stretchedBtn} />
                    <CustomButton label="No, I am not" onPress={() => {this.setState({modalVisible: true})}} buttonStyle={styles.outlineBtn} textStyle={styles.outlineBtnText} />
                </View>
                <CustomModal
                    visible={this.state.modalVisible}
                    onClose={() => this.setState({modalVisible: false})}
                    title="We're Sorry"
                    description="You must be a member of our gym before using our app! visit our closest branch and Join our family now!"
                    actions={actions}
                    animationType='slide'
                >
                </CustomModal>
            </View>
        </View>
      </View>
    )
  }
}

export default MemberPrerequisite;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        backgroundColor: '#F8F8F8',
        minHeight: height,
    },
    image: {
        width: 240,
        height: 489.365,
        position: 'absolute',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 345,
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
        paddingHorizontal: 24,
        paddingTop: 24,
        gap: 24, // Consistent spacing between elements
    },
    welcomeOuterContainer: {
        alignItems: 'center',
        gap: 24, // Consistent spacing between text and buttons
    },
    welcomeTextContainer: {
        gap: 24, // Ensure consistent spacing between title and description
        alignItems: 'center', // Center-align the text
    },
    title: {
        color: '#1E1E1E',
        textAlign: 'center',
        fontSize: 27,
        fontWeight: '600', // Ensure bold title
    },
    description: {
        color: '#797979',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
    },
    stretchedBtn: {
        alignSelf: 'stretch', // Stretch buttons to fill width
    },
    outlineBtn: {
        backgroundColor: 'white',
        borderColor: '#0961F5',
        borderWidth: 1,
        alignSelf: 'stretch',
        borderRadius: 8, // Add button rounding for a modern look
    },
    outlineBtnText: {
        color: '#0961F5',
    },
});
