import { Text, Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import CustomButton from '../Common/CustomButton';
import CustomModal, { Action } from '../Common/CustomModal';
import theme from '../Constants/theme';

const { height } = Dimensions.get('window');

interface Props {
    navigate: any;
}

interface State {
    modalVisible: boolean;
}

export class MemberPrerequisite extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
    }
    goToWelcomeScreen = () => {
        const {navigate} = this.props;
        navigate('/welcome');
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
                <CustomButton label="Yes, I am" onPress={this.goToWelcomeScreen} buttonStyle={styles.stretchedBtn} />
                <CustomButton label="No, I am not" onPress={() => {this.setState({modalVisible: true})}} buttonStyle={styles.outlineBtn} textStyle={styles.outlineBtnText} />
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
    stretchedBtn: {
        alignSelf: 'stretch',
    },
    loginText: {
        color: '#0961F5',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 22,
        textDecorationLine: 'underline',
        cursor: 'pointer',
    },
    outlineBtn: {
        backgroundColor: 'white',
        borderColor: '#0961F5',
        borderWidth: 1,
        alignSelf: 'stretch',
    },
    outlineBtnText: {
        color: '#0961F5',
    }
})