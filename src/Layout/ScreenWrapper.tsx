    import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native'
    import React, { Component, ReactNode } from 'react'
    import ScreenHeader from './ScreenHeader';
    import If from '../Common/If';
    import { NavProps } from '../types';
    import withNavProps from '../Navigation/WithNavProps';
    import { isAndroid, isIOS, isWeb } from '../Utils/PlatformUtil';
    import CustomButton from '../Common/CustomButton';
import theme from '../Constants/theme';


    interface FloatingButtonProps {
        label: string;
        onPress: () => void;
        type?: 'normal' | 'secondary' | 'outline' | 'disabled';
    }

    interface Props {
        children: any;
        withoutHeader: boolean;
        title?: string;
        rightElement?: ReactNode;
        navigation?: any;
        floatingBtn?: boolean;
        floatingBtnLayout?: "row" | "column";
        fullScreenChildren: boolean;
        floatingBtnRowGap?: number;
        floatingBtnColumnGap?: number;
        floatingBtnProps?: FloatingButtonProps[];
        heroImage?: boolean;
        headerContainerStyle?: ViewStyle;
        heroImagesUrls?: string[];
        scrollContainerStyle?: ViewStyle;
        childrenContainerStyle: object;
        scrollViewContainerStyle?: ViewStyle;
        //     secondaryFloatingBtn?: boolean;
        // secondaryFloatingBtnProps?: {
        //     label: string;
        //     onPress: () => void;
        // }
        profileImage?: boolean;
        profileImageUrl?: string;
        heroImageStyle?: ViewStyle;
        floatingObject?: {
            label: string;
            price: string;
        };
        floatingBtnContainer?: ViewStyle;
}

    interface State {
        screenHeight: number;
        selectedHeroImage: string;
        floatingButtonHeight: number;
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
                floatingButtonHeight: 0,
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
            const {screenHeight, selectedHeroImage, floatingButtonHeight} = this.state;
            const { 
                withoutHeader,
                title,
                rightElement,
                fullScreenChildren,
                navigation,
                childrenContainerStyle,
                floatingBtn,
                floatingBtnLayout = 'column',
                floatingBtnRowGap = 10,
                floatingBtnColumnGap = 10,
                floatingBtnProps,
                heroImage,
                heroImagesUrls,
                scrollContainerStyle,
                scrollViewContainerStyle,
                headerContainerStyle,
                heroImageStyle,
                floatingObject,
                floatingBtnContainer,
            } = this.props;

            const ContainerComponent = fullScreenChildren ? View : ScrollView
            // console.log('Screen height', screenHeight);
            return (
                <View style={[styles.wrapper, {maxHeight: screenHeight}]}>
                    <ContainerComponent style={[scrollContainerStyle ? scrollContainerStyle :  styles.innerContainer, {paddingBottom: floatingButtonHeight, marginBottom: 10}, heroImage && {paddingHorizontal: 0, paddingTop: 0}, scrollViewContainerStyle]}>
                        <If condition={heroImage}>
                            <ImageBackground
                                source={{uri: selectedHeroImage }}
                                resizeMode='cover'
                                style={[styles.heroImageBackground, heroImageStyle]}
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

                                <If condition={this.props.profileImage}>
                                    <View style={{ position: 'absolute', bottom: -200, left: '50%', transform: [{ translateX: '-50%' }], zIndex: 1 }}>
                                        <Image source={{ uri: this.props.profileImageUrl }} style={{ width: 125, height: 117, borderRadius: 14, borderWidth: 6, borderColor: '#FFF', }} resizeMode='cover' />
                                    </View>
                                </If>    
                                    {heroImagesUrls &&  heroImagesUrls.length > 1 && (
                                        <View style={styles.imageSelectorContainer}>
                                            {heroImagesUrls.map((heroImage, index) => (
                                                <Pressable 
                                                    key={`${heroImage}-${index}`} 
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
                                <View style={[styles.headerContainer, headerContainerStyle]}>
                                    <ScreenHeader
                                        navigation={this.props.navigation} 
                                        route={this.props.route} 
                                        backEnabled={true} 
                                        title={title} 
                                        rightElement={rightElement} 
                                    />
                                </View>
                            </If>
                        </If>
                        <View style={[styles.childrenContainer, childrenContainerStyle,
                            this.props.profileImage ? {paddingTop: 30} : null
                        ]}>
                            {this.props.children}
                        </View>
                    </ContainerComponent>
                    <If condition={floatingBtn}>
                        <View style={[
                        styles.floatingButtonContainer,
                        floatingBtnLayout === 'row' ? styles.rowLayout : styles.columnLayout,
                        {rowGap: floatingBtnRowGap, columnGap: floatingBtnColumnGap},
                        isWeb ? null : {paddingBottom: 29},
                        floatingBtnContainer
                        ]}
                        onLayout={(event) => {
                            const {height} = event.nativeEvent.layout;
                            this.setState({floatingButtonHeight: height});
                        }}
                        >
                            {/* <Pressable style={[styles.floatingButton]} onPress={() => console.log('Floating button pressed')}>
                                <Text style={styles.buttonText}>+</Text>
                            </Pressable> */}
                        
                        {/* <CustomButton 
                                label={floatingBtnProps?.label || 'Default Label' } 
                                onPress={floatingBtnProps?.onPress || (() => console.log("Button pressed"))} 
                                /> */}
                        {floatingObject &&
                            <View>
                                <Text style={{
                                    color: '#000',
                                    fontFamily: theme.font,
                                    fontSize: 14,
                                    fontWeight: 400,
                                    lineHeight: 17,
                                }}>{floatingObject.label}</Text>
                                <Text style={{
                                    color: '#000',
                                    fontFamily: theme.font,
                                    fontSize: 18,
                                    fontWeight: 600,
                                    letterSpacing: -0.3,
                                }}>{floatingObject.price}</Text>
                            </View>
                        }
                        {floatingBtn && floatingBtnProps.length > 0 && floatingBtnProps.map((btn, index) => (
                            <CustomButton
                                key={index}
                                label={btn.label}
                                onPress={btn.onPress}
                                styleType={btn.type}
                            />
                        ))}
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
            paddingHorizontal: 0,
            paddingTop: 5,
            paddingBottom: 40,
        },
        childrenContainer: {
            gap: 22,
            paddingHorizontal: 24,
        },
        headerContainer: {
            paddingHorizontal: 24,
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
        rowLayout: {
            flexDirection: 'row',
        },
        columnLayout: {
            flexDirection: 'column',
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