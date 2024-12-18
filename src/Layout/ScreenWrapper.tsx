    import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
    import React, { Component, ReactNode } from 'react'
    import ScreenHeader from './ScreenHeader';
    import If from '../Common/If';
    import { NavProps } from '../types';
    import withNavProps from '../Navigation/WithNavProps';
    import { isAndroid, isIOS, isWeb } from '../Utils/PlatformUtil';
    import CustomButton from '../Common/CustomButton';

    interface Props {
        children: any;
        withoutHeader: boolean;
        title?: string;
        rightElement?: ReactNode;
        navigation?: any;
        floatingBtn?: boolean;
        floatingBtnProps?: {
            label: string;
            onPress: () => void;
        }
        heroImage?: boolean;
        heroImagesUrls?: string[];
        scrollContainerStyle?: ViewStyle;
        childrenContainerStyle: object;
    }

    interface State {
        screenHeight: number;
        selectedHeroImage: string;
    }

    type WrapperProps = NavProps & Props;

    export class ScreenWrapper extends Component<WrapperProps, State> {
        static defaultProps  = {
            withoutHeader: false,
        }
        constructor(props: WrapperProps){
            super(props);
            this.state = {
                screenHeight: Dimensions.get('window').height,
                selectedHeroImage: props.heroImagesUrls?.[0] || 'https://images.unsplash.com/photo-1534096210335-a3b961613bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        }
        componentDidMount() {
            Dimensions.addEventListener('change', this.handleDimensionsChange);
        }
        
        // componentWillUnmount() {
        //     Dimensions.removeEventListener('change', this.handleDimensionsChange);
        // }

        handleDimensionsChange = (dimensions: { window: { height: number } }) => {
            this.setState({ screenHeight: dimensions.window.height });
        };

        handleImageSelect = (imageUri: string) => {
            this.setState({ selectedHeroImage: imageUri})
        }
        
        render() {
            const {screenHeight, selectedHeroImage} = this.state;
            const { withoutHeader, title, rightElement, navigation,childrenContainerStyle, floatingBtn, floatingBtnProps, heroImage, heroImagesUrls, scrollContainerStyle} = this.props;
            console.log('Screen height', screenHeight);
            return (
                <View style={[styles.wrapper, {maxHeight: screenHeight}]}>
                    <ScrollView style={[scrollContainerStyle ? scrollContainerStyle :  styles.innerContainer, floatingBtn && {marginBottom: 80}, heroImage && {paddingHorizontal: 0, paddingTop: 0}]}>
                        <If condition={heroImage}>
                            <ImageBackground
                                source={{uri: selectedHeroImage }}
                                resizeMode='cover'
                                style={styles.heroImageBackground}
                            >
                                <ScreenHeader
                                    navigation={this.props.navigation} 
                                    route={this.props.route} 
                                    backEnabled={true} 
                                    title={title} 
                                    rightElement={rightElement}
                                    backContainerStyle={{left: 25}}
                                    rightContainerStyle={{right: 25}}
                                />
                                    {heroImagesUrls &&  heroImagesUrls.length > 1 && (
                                        <View style={styles.imageSelectorContainer}>
                                            {heroImagesUrls.map((heroImage) => (
                                                <Pressable 
                                                    key={heroImage} 
                                                    style={styles.heroImageContainer}
                                                    onPress={() => this.handleImageSelect(heroImage)}
                                                    >
                                                    <Image source={{uri: heroImage}} style={styles.heroImage} resizeMode='cover' />
                                                </Pressable>
                                            ))}
                                        </View>
                                    )}
                            </ImageBackground>
                        </If>
                        <If condition={!heroImage}>
                            <If condition={!withoutHeader}>
                                <ScreenHeader
                                    navigation={this.props.navigation} 
                                    route={this.props.route} 
                                    backEnabled={true} 
                                    title={title} 
                                    rightElement={rightElement} 
                                />
                            </If>
                        </If>
                        <View style={[styles.childrenContainer, childrenContainerStyle]}>
                            {this.props.children}
                        </View>
                    </ScrollView>
                    <If condition={floatingBtn}>
                        <View style={[styles.floatingButtonContainer, isWeb ? null : {paddingBottom: 29}]}>
                            {/* <Pressable style={[styles.floatingButton]} onPress={() => console.log('Floating button pressed')}>
                                <Text style={styles.buttonText}>+</Text>
                            </Pressable> */}
                            <CustomButton 
                                label={floatingBtnProps?.label || 'Default Label' } 
                                onPress={floatingBtnProps?.onPress || (() => console.log("Button pressed"))} 
                                />
                        </View>
                    </If>
                </View>
            )
        }
    }

    export default withNavProps(ScreenWrapper);

    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: '#FFFFFF'
        },
        innerContainer: {
            // flexGrow: 1,
            paddingHorizontal: 10,
            paddingTop: 5,
            paddingBottom: 40,
        },
        childrenContainer: {
            gap: 22,
        },
        floatingButtonContainer: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            borderTopLeftRadius: 13,
            borderTopRightRadius: 13,
            paddingHorizontal: 24,
            paddingVertical: 18,
            borderWidth: 1,
            borderColor: '#E2E8F0',
            backgroundColor: '#FFFFFF',
            shadowColor: '#F1F5F9',
            shadowOffset: { width: 0, height: -3},
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 5,
        },
        floatingButton: {
            backgroundColor: '#007AFF',
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
        },
        heroImageBackground: {
            height: 225,
            width: '100%'
        },
        buttonText: {
            color: '#FFFFFF',
            fontSize: 24,
            fontWeight: 'bold'
        },
        imageSelectorContainer: {
            position: 'absolute',
            bottom: 20,
            // left: 24,
            // right: 28,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 6,
            gap: 4,
            backgroundColor: '#FCFCFC',
            alignSelf: 'center',
            borderRadius: 11,
        },
        heroImageContainer: {
            width: 49,
            height: 49,
            borderRadius: 7,
        },
        heroImage: {
            width: '100%',
            height: '100%',
            borderRadius: 7,
        }
    })