import { Image, ImageBackground, Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'
import { NavProps } from '../types';

interface Props {
    heroImagesUrls?: string[];
    heroImageStyle?: ViewStyle;
}


interface State {
    selectedHeroImage: string;
}

type HeroImageProps = NavProps & Props;

export class HeroImage extends Component<HeroImageProps, State> {
    constructor(props: HeroImageProps) {
        super(props);
        this.state = {
            selectedHeroImage: props.heroImagesUrls?.[0] || 'https://images.unsplash.com/photo-1534096210335-a3b961613bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        };
    }

    handleImageSelect = (imageUri: string) => {
        this.setState({ selectedHeroImage: imageUri})
    }

  render() {
    const {selectedHeroImage} = this.state;
    const {heroImagesUrls, heroImageStyle} = this.props;
    return (
      <View>
        <ImageBackground
            source={{uri: selectedHeroImage }}
            resizeMode='cover'
            style={[styles.heroImageBackground, heroImageStyle]}
        >
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
      </View>
    )
  }
}

export default HeroImage

const styles = StyleSheet.create({
    heroImageBackground: {
        height: 225,
        width: '100%'
    },
    imageSelectorContainer: {
        position: 'absolute',
        bottom: 20,
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