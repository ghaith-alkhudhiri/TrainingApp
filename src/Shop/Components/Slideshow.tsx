import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native';
import theme from '../../Constants/theme';

const { width } = Dimensions.get('window');

interface SlideshowProps {
    images: string[];
}

interface SlideshowState {
    currentIndex: number;
}

class Slideshow extends Component<SlideshowProps, SlideshowState> {
    scrollRef: React.RefObject<ScrollView>;
    autoScroll: NodeJS.Timeout | undefined;

    constructor(props: SlideshowProps) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
        this.scrollRef = React.createRef<ScrollView>();
    }

    componentDidMount() {
        this.startAutoScroll();
    }

    componentWillUnmount() {
        clearInterval(this.autoScroll);
    }

    startAutoScroll = () => {
        this.autoScroll = setInterval(() => {
            this.setState(
                prevState => ({
                    currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
                }),
                () => {
                    this.scrollRef.current?.scrollTo({
                        x: this.state.currentIndex * width,
                        animated: true,
                    });
                }
            );
        }, 3000);
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    ref={this.scrollRef}
                >
                    {this.props.images.map((image, index) => (
                        <Image key={index} source={{ uri: image }} style={styles.image} />
                    ))}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {this.props.images.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                index === this.state.currentIndex ? styles.activeIndicator : null,
                            ]}
                        />
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width,
        height: 175,
        borderRadius: 13,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        gap: 8,
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#D9D9D9',
        // marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: theme.primary,
    },
});

export default Slideshow;