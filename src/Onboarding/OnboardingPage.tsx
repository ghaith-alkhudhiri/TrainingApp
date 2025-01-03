// import { Dimensions, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
// import React, { Component } from 'react'
// import onboarding1 from '../Assets/Images/Onboarding1.png';
// import onboarding2 from '../Assets/Images/Onboarding2.png';
// import onboarding3 from '../Assets/Images/Onboarding3.png';
// import { FlatList } from 'react-native-gesture-handler';
// import NavigationControls from './NavigationControls';

// interface OnboardingScreenData {
//     id: string;
//     image: any;
//     title: string;
//     description: string;
// }

// interface State {
//     currentIndex: number;
// }

// interface Props {
//     onComplete: any;
// }

// const onboardingData: OnboardingScreenData[] = [
//     {
//         id: '1',
//         image: onboarding1,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
//     },
//     {
//         id: '2',
//         image: onboarding2,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
//     },
//     {
//         id: '3',
//         image: onboarding3,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
//     },
// ];

// export class OnboardingPage extends Component<Props, State> {
//     flatListRef = React.createRef<FlatList>();
//     constructor(props: any){
//         super(props);
//         this.state = {
//             currentIndex: 0,
//         }
//     }

//     handleScroll = (event) => {
//         const contentOffsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(contentOffsetX / Dimensions.get('window').width);
//         this.setState({ currentIndex: index }, () => {
//             if (this.state.currentIndex === onboardingData.length - 1) {
//                 // Trigger the onComplete function when the last onboarding screen is reached
//                 this.props.onComplete();
//             }
//         });
//     }

//     handleNext = () => {
//         const { currentIndex } = this.state;
//         if(currentIndex < onboardingData.length - 1){
//             const newIndex = currentIndex + 1;
//             this.setState({ currentIndex: newIndex });
//             this.flatListRef.current?.scrollToIndex({ index: newIndex, animated: true})
//         }else {
//             this.props.onComplete();
//         }
//     }

//     handleBack = ()=> {
//         const { currentIndex } = this.state;
//         if(currentIndex > 0){
//             const newIndex = currentIndex - 1;
//             this.setState({  currentIndex: newIndex});
//             this.flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
//         }
//     }

//     renderItem = ({item}) => (
//         <View style={styles.screen}>
//             <ImageBackground source={item.image} style={styles.image} resizeMode="cover">
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </View>
//             </ImageBackground>
//         </View>
//     )
    
//     render() {
//         const {currentIndex} = this.state;
//         return (
//         <View style={styles.container}>
//             <FlatList
//                 ref={this.flatListRef}
//                 data={onboardingData}
//                 renderItem={this.renderItem}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 pagingEnabled
//                 scrollEnabled={false}
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={this.handleScroll}
//             />
//             <NavigationControls
//                 currentIndex={currentIndex}
//                 totalSteps={onboardingData.length}
//                 onBack={this.handleBack}
//                 onNext={this.handleNext}
//             />
        
//         </View>
//         )
//     }
// }

// export default OnboardingPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     screen: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'flex-end', // Position text at the bottom
//     },
//     textContainer: {
//         padding: 20,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: For better text visibility
//         borderRadius: 10,
//         margin: 10,
//     },
//     title: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     description: {
//         color: 'white',
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 10,
//     },
//     indicatorContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'red',
//         marginBottom: 20,
//     },
//     indicator: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: 'gray',
//         marginHorizontal: 5,
//     },
//     activeIndicator: {
//         backgroundColor: 'white',
//     },
// })

// import React, { useState, useRef } from 'react';
// import { FlatList, Dimensions, ImageBackground, StyleSheet, Text, View, Pressable } from 'react-native';
// import onboarding1 from '../Assets/Images/Onboarding1.png';
// import onboarding2 from '../Assets/Images/Onboarding2.png';
// import onboarding3 from '../Assets/Images/Onboarding3.png';
// import NavigationControls from './NavigationControls'; // Assuming NavigationControls is separated

// const onboardingData = [
//     {
//         id: '1',
//         image: onboarding1,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
//     },
//     {
//         id: '2',
//         image: onboarding2,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
//     },
//     {
//         id: '3',
//         image: onboarding3,
//         title: 'Finding the Best Pilates Classes for You',
//         description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
//     },
// ];

// interface Props {
//     onComplete: () => void;
// }

// const OnboardingPage: React.FC<Props> = ({ onComplete }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const flatListRef = useRef<FlatList>(null);

//     console.log("flatListRef", flatListRef);

//     const handleNext = () => {
//         const newIndex = currentIndex < onboardingData.length - 1 ? currentIndex + 1 : currentIndex;
//         if (newIndex !== currentIndex) {
//             setCurrentIndex(newIndex);
//             flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
//         } else {
//             onComplete(); // Trigger onComplete when the last screen is reached
//         }
//     };

//     const handleBack = () => {
//         const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
//         if (newIndex !== currentIndex) {
//             setCurrentIndex(newIndex);
//             flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
//         }
//     };

//     const handleScroll = (event) => {
//         const contentOffsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(contentOffsetX / Dimensions.get('window').width);
//         setCurrentIndex(index);
//     };
    

//     const renderItem = ({ item }) => (
//         <View style={styles.screen}>
//             <ImageBackground source={item.image} style={styles.image} resizeMode="cover">
//                 <View style={styles.textContainer}>
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </View>
//             </ImageBackground>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ref={flatListRef}
//                 data={onboardingData}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 onScroll={handleScroll}
//                 scrollEnabled={false} // Disable manual scrolling
//             />
//             <NavigationControls
//                 currentIndex={currentIndex}
//                 totalSteps={onboardingData.length}
//                 onBack={handleBack}
//                 onNext={handleNext}
//             />
//         </View>
//     );
// };

// export default OnboardingPage;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     screen: {
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'flex-end', // Position text at the bottom
//     },
//     textContainer: {
//         padding: 20,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: For better text visibility
//         borderRadius: 10,
//         margin: 10,
//     },
//     title: {
//         color: 'white',
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     description: {
//         color: 'white',
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 10,
//     },
// });


import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, Pressable, Platform, FlatList } from 'react-native';
import onboarding1 from '../Assets/Images/Onboarding1.png';
import onboarding2 from '../Assets/Images/Onboarding2.png';
import onboarding3 from '../Assets/Images/Onboarding3.png';
import NavigationControls from './NavigationControls'; // Assuming NavigationControls is separated
import { NavProps } from '../types';
import theme from '../Constants/theme';

const onboardingData = [
    {
        id: '1',
        image: require('../Assets/Images/Onboarding1.png'),
        title: 'Finding the Best Pilates Classes for You',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        transparent: false,
    },
    {
        id: '2',
        image: require('../Assets/Images/Onboarding2.png'),
        title: 'Finding the Best Pilates Classes for You',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        transparent: false,
    },
    {
        id: '3',
        image: require('../Assets/Images/Onboarding3.png'),
        title: 'Finding the Best Pilates Classes for You',
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        transparent: false,
    },
];

interface Props {
    onComplete: () => void;
}

type OnboardingProps = Props & NavProps;

const OnboardingPage = ({ onComplete, navigation, route }: OnboardingProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('MemberPrerequisite');
            // onComplete(); // Trigger onComplete when the last screen is reached
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const renderOnboardingScreen = () => {
        const currentScreen = onboardingData[currentIndex];
        return (
            <View style={styles.screen}>
                <View style={styles.skipContainer}>
                    <Text style={[styles.skipText, currentIndex === onboardingData.length -1 && styles.skipTextGray]}>Skip</Text>
                </View>
                {currentScreen.transparent ? (
                    <ImageBackground source={currentScreen.image} style={styles.image} resizeMode="cover">
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{currentScreen.title}</Text>
                            <Text style={styles.description}>{currentScreen.description}</Text>
                        </View>
                    </ImageBackground>
                ): (
                    <>
                        <ImageBackground source={currentScreen.image} style={styles.image} resizeMode="cover">
                           
                        </ImageBackground>
                        <View style={styles.infoWrapper}>
                            <View style={styles.infoContainer}>
                                <Text style={[styles.title, styles.infoTitle]}>
                                    Finding the{' '}
                                    <Text style={styles.highlight}>Best Pilates Classes</Text>{' '}
                                    for You
                                </Text>
                                <Text style={[styles.description, styles.infoDescription]}>
                                    {currentScreen.description}
                                </Text>
                            </View>
                        </View>
                    </>
                )}
                
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {Platform.OS === 'web' ? (
                // Web-specific rendering
                <>
                    {renderOnboardingScreen()}
                    <NavigationControls
                        currentIndex={currentIndex}
                        totalSteps={onboardingData.length}
                        buttonStyle={'circular'}
                        stepsStyle={'normal'}
                        onBack={handleBack}
                        onNext={handleNext}
                    />
                </>
            ) : (
                // Retain FlatList for mobile
                <View style={styles.container}>
                    <FlatList
                        data={onboardingData}
                        renderItem={({ item }) => (
                            <View style={styles.screen}>
                                <ImageBackground source={item.image} style={styles.image} resizeMode="cover">
                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description}>{item.description}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEnabled={false} // Disable manual scrolling
                    />
                    <NavigationControls
                        currentIndex={currentIndex}
                        totalSteps={onboardingData.length}
                        buttonStyle={'circular'}
                        onBack={handleBack}
                        onNext={handleNext}
                    />
                </View>
            )}
        </View>
    );
};

export default OnboardingPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    skipContainer: {
        zIndex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 27,
        marginTop: 56,
    },
    skipText: {
        color: theme.primary,
        fontSize: 14,
        fontWeight: 500,
        fontFamily: theme.font,
    },
    skipTextGray: {
        color: '#92918C',
    },    
    image: {
        flex: 1,
        justifyContent: 'center', // Position text at the bottom
        position: 'relative',
        bottom: 280,
    },
    bottomContainer: {
        // position: "relative",
        backgroundColor: 'white',
        height: 400,
       
    },
    textContainer: {
        padding: 20,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: For better text visibility
        borderRadius: 10,
        margin: 10,
        position: 'absolute',
        top: 650,
    },
    infoWrapper: {
        height: 300,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 1,
    },
    infoContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 28,
        paddingHorizontal: 31,
    },
    infoTitle: {
        color: '#242424',
        fontFamily: theme.font,
    },
    highlight: {
        color: theme.primary,
        fontFamily: theme.font,
    },    
    title: {
        color: '#E2E8F0',
        fontSize: 27,
        fontFamily: theme.font,
        fontWeight: '600',
        textAlign: 'center',
        width: 300,
    },
    infoDescription: {
        color: '#797979',
        fontFamily: theme.font,
    },
    description: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 24,
        fontFamily: theme.font,
        fontWeight: '400',
        width: 350,
        lineHeight: 17,
    },
});