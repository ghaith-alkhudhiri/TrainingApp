import { Component } from "react";
import { Linking, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import MobileNumberInput from "./Components/MobileNumberInput";
import AuthenticationManager from "../Managers/AuthenticationManager";
import CustomButton from "../Common/CustomButton";
import ScreenWrapper from "../Layout/ScreenWrapper";
import CustomTabs from "../Common/CustomTabs";

import {auth, isSignInWithEmailLink} from '../firebase';
import SocialMediaBtn from "./Components/SocialMediaBtn";
import MicrosoftIcon from "../Assets/Icons/MicrosoftIcon";
import GoogleIcon from "../Assets/Icons/GoogleIcon";
import AppleIcon from "../Assets/Icons/AppleIcon";
import LineDividier from "../Common/LineDivider";
interface Props {
    navigation: any;
}

interface LoginPageState {
    phoneNumber: any;
    verificationCode: any;
    email: string;
    loginLoading: boolean;
    loginError: string;
    infoMsg: string;
    initialLoading: boolean;
    initialError: string;
}

export default class LoginPage extends Component<Props, LoginPageState>{
    constructor(props: any){
        super(props);
        this.state = {
            phoneNumber: '',
            verificationCode: '',
            email: '',
            loginLoading: false,
            loginError: '',
            infoMsg: '',
            initialLoading: false,
            initialError: '',
        }
    }

    handlePhoneNumberChange = (phoneNumber: string) => {
        this.setState({phoneNumber});
    }

    handleSignInWithPhone = async () => {
        console.log("HandleSignInHasBeenCalled");
        await AuthenticationManager.signInWithPhoneNumber(this.state.phoneNumber);
        // this.props.navigate('/otp-verification');
        this.props.navigation.navigate('otp-verification');
        
    };

    handleEmailSignIn = async () => {
        const { email } = this.state;
        this.setState({ loginLoading: true });
        try {
            const result = await AuthenticationManager.signInWithEmail(email, {
                url: 'http://localhost:3000/login',
                handleCodeInApp: true,
            });
            this.setState({
                loginLoading: false,
                loginError: '',
                infoMsg: result.message,
            });
        } catch (err: any) {
            this.setState({
                loginLoading: false,
                loginError: err.message,
            });
        }
    }

    handleGoogleSignIn = async () => {
        try {
            const result = await AuthenticationManager.signInWithGooglePopup();
            console.log('Logged in user:', result.user);
        }catch(error){
            console.error('Error logging in', error);
        }
    };

    handleMicrosoftSignIn = async () => {
        try {
          const result = await AuthenticationManager.signInWithMicrosoftPopup();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
    };

    handleAppleSignIn = async () => {
        try {
            const result = await AuthenticationManager.signInWithApplePopup();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    completeEmailSignIn = async (url: string) => {
        const { navigation } = this.props;
        this.setState({ initialLoading: true });
        try {
            const result = await AuthenticationManager.completeSignInWithEmailLink(url);
            this.setState({
                initialLoading: false,
                initialError: '',
            });
            navigation.navigate('MainApp');
        } catch (err: any) {
            this.setState({
                initialLoading: false,
                initialError: err.message,
            });
            navigation.navigate('Login');
        }

        
    }

    async componentDidMount() {
        const {navigation} = this.props;

        auth.onAuthStateChanged((user) => {
            if(user){
                navigation.navigate('MainApp');
            }else {
                Linking.getInitialURL().then((url) => {
                    if(url && isSignInWithEmailLink(auth, url)){
                        console.log("Complete email sign in called", url);
                        this.completeEmailSignIn(url);
                    }else {
                        console.log('Enter email and sign in');
                    }
                }).catch(err => {
                    console.error('Error fetching initial URL', err);
                })
            }
        });

        try {
            const result = await AuthenticationManager.handleRedirectResult();
            if (result) {
                console.log('Redirected user', result.user);
            }
        } catch (error) {
            console.error('Error handling redirect', error);
        }
    }

    render(){
        const { email, loginLoading, loginError, infoMsg, initialLoading, initialError } = this.state;
        console.log("Auth", auth.currentUser)
        const tabs = [
            {
                key: 'phone',
                label: 'Phone',
                content: (
                    <View style={styles.mobileNumberContainerStyle}>
                        <MobileNumberInput onPhoneNumberChange={this.handlePhoneNumberChange} />
                        <CustomButton label='Register' onPress={this.handleSignInWithPhone} />
                    </View>
                ),   
            },
            {
                key: 'email',
                label: 'Email',
                content: (
                    <View>
                        {initialLoading ? (
                        <Text style={styles.successText}>Loading...</Text>
                        ) : (
                        <>
                            {initialError ? (
                            <Text style={styles.errorText}>{initialError}</Text>
                            ) : (
                            <>
                                {auth.currentUser ? (
                                <Text style={styles.successText}>Please wait...</Text>
                                ) : (
                                <View>
                                    <TextInput style={styles.input}
                                    placeholder="Enter email"
                                    value={email}
                                    onChangeText={(text) => this.setState({ email: text })}
                                    />
                                    <Pressable onPress={this.handleEmailSignIn}>
                                    {loginLoading ? (
                                        <Text style={styles.successText}>Logging you in</Text>
                                    ) : (
                                        <Text style={styles.button}>Login</Text>
                                    )}
                                    </Pressable>
                                    {loginError !== '' && <Text style={styles.errorText}>{loginError}</Text>}
                                    {infoMsg !== '' && <Text style={styles.successText}>{infoMsg}</Text>}
                                </View>
                                )}
                            </>
                            )}
                        </>
                        )}
                    </View>
                ),
            }
        ];

        return (
            <ScreenWrapper>
                <View style={styles.registerTextContainer}>
                    <Text style={styles.registerText}>Hello! Register to get started</Text>
                </View>
                <View style={styles.contentContainer}>
                    <CustomTabs tabs={tabs} />
                    <div id="sign-in-button"></div>
                    <View style={styles.socialProvidersContainer}>
                        <LineDividier text='Or Login with' />
                        <View style={styles.socialProviderCardContainer}>
                            <SocialMediaBtn icon={<MicrosoftIcon />} onPress={this.handleMicrosoftSignIn} />
                            <SocialMediaBtn icon={<GoogleIcon />} onPress={this.handleGoogleSignIn} />
                            <SocialMediaBtn icon={<AppleIcon />} onPress={this.handleAppleSignIn} />
                        </View>
                    </View>
                </View>
            </ScreenWrapper>
        )


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'yellow',
        paddingHorizontal: 20
    },
    registerTextContainer: {
        width: 280,
        marginBottom: 37,
    },
    registerText: {
        fontSize: 27,
        fontWeight: 600,
        lineHeight: 32.68,
    },
    mobileNumberContainerStyle: {
        flex: 1,
        width: '100%',
        gap: 18,
    },
    contentContainer: {
        gap: 205
    },
    socialProvidersContainer: {
        gap: 22,
    },
    socialProviderCardContainer: {
        flexDirection: 'row',
        gap: 8,
        flex: 1,
    },
    form: {
        padding: 15,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        gap: 10,
      },
      input: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10,
        width: 250,
      },
      label: {
        fontSize: 20,
        fontWeight: 'bold',
        
      },
      button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: 'white',
        borderRadius: 10,
      },
      errorText: {
        backgroundColor: '#FFCCCB',
        color: 'red',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
      },
      successText: {
        backgroundColor: 'lightgreen',
        color: 'green',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 5,
      }
})