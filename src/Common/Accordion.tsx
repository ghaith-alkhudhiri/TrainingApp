// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, LayoutChangeEvent } from 'react-native';
// import LineDividier from './LineDivider';
// import Icon from 'react-native-vector-icons/Ionicons';

// interface AccordionItem {
//     title: string;
//     content: string;
// }

// interface AccordionProps {
//     items: AccordionItem[];
// }

// interface AccordionState {
//     activeIndex: number | null;
//     animationValue: Animated.Value;
//     contentHeights: number[];
// }

// class Accordion extends Component<AccordionProps, AccordionState> {
//     constructor(props: AccordionProps) {
//         super(props);
//         this.state = {
//             activeIndex: null,
//             animationValue: new Animated.Value(0),
//             contentHeights: props.items.map(() => 0),
//         };
//     }

//     handleClick = (index: number) => {
//         const { activeIndex, animationValue, contentHeights } = this.state;
//         const isActive = activeIndex === index;
//         const height = contentHeights[index];

//         Animated.timing(animationValue, {
//             toValue: isActive ? 0 : height,
//             duration: 300,
//             easing: Easing.ease,
//             useNativeDriver: false,
//         }).start();

//         this.setState((prevState) => ({
//             activeIndex: isActive ? null : index,
//         }));
//     };

//     setContentHeight = (index: number, event: LayoutChangeEvent) => {
//         const { height } = event.nativeEvent.layout;
//         this.setState((prevState) => {
//             const contentHeights = [...prevState.contentHeights];
//             contentHeights[index] = height;
//             return { contentHeights };
//         })
//     }

//     render() {
//         const { items } = this.props;
//         const { activeIndex, animationValue, contentHeights } = this.state;

//         return (
//             <View style={styles.accordion}>
//                 {items.map((item, index) => {
//                     const height = activeIndex === index ? animationValue : new Animated.Value(0);

//                     return <View key={index} style={styles.accordionItem}>
//                         <TouchableOpacity style={[styles.accordionTitleContainer, activeIndex === index && styles.expandedAccordionTitleContainer]} onPress={() => this.handleClick(index)}>
//                             <Text style={[
//                                 styles.accordionTitle
//                              ]}>{item.title}</Text>
//                             <Icon
//                                 name={activeIndex === index ? 'chevron-up' : 'chevron-down'}
//                                 size={20}
//                                 color='#000'
//                                 style={styles.chevronIcon}
//                             />
//                         </TouchableOpacity>
//                         {activeIndex === index && (
//                             <>
//                                 <LineDividier containerStyle={{paddingHorizontal: 12}} />
//                                 <View style={[styles.accordionContent]}>
//                                     <Text style={[styles.contentText]}>{item.content}</Text>
//                                 </View>
//                             </>
//                         )}
//                     </View>
//                 })}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     accordion: {
//         // Add your styles here
//         gap: 10,
//         flex: 1,
//         marginHorizontal: 12,
//     },
//     accordionItem: {
//         // Add your styles here
//         width: '100%',
//         // backgroundColor: 'red',
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: '#EDEDED',
//         backgroundColor: '#FFFFFF'
//     },
//     accordionTitle: {
//         // Add your styles here
//         color: '#000',
//         fontFamily: 'Inter',
//         fontSize: 12,
//         fontWeight: 500,
//         lineHeight: 17,
//     },
//     accordionTitleContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 12,
//         paddingVertical: 13,
//     },
//     accordionContent: {
//         // Add your styles here
//         paddingHorizontal: 12,
//         paddingBottom: 13,
//     },
//     expandedAccordionTitleContainer: {
//         paddingBottom: 0
//     },
//     contentText: {
//         color: '#797979',
//         fontFamily: 'Inter',
//         fontSize: 12,
//         fontWeight: 400,
//         lineHeight: 18,
//     },
//     chevronIcon: {

//     }
// });

// export default Accordion;


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, LayoutChangeEvent } from 'react-native';
import LineDividier from './LineDivider';
import Icon from 'react-native-vector-icons/Ionicons';

interface AccordionItem {
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
}

interface AccordionState {
    activeIndex: number | null;
    animationValue: Animated.Value;
    contentHeights: number[];
}

class Accordion extends Component<AccordionProps, AccordionState> {
    constructor(props: AccordionProps) {
        super(props);
        this.state = {
            activeIndex: null,
            animationValue: new Animated.Value(0),
            contentHeights: props.items.map(() => 0),
        };
    }

    handleClick = (index: number) => {
        const { activeIndex, animationValue, contentHeights } = this.state;
        const isActive = activeIndex === index;
        const height = contentHeights[index];

        Animated.timing(animationValue, {
            toValue: isActive ? 0 : height,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();

        this.setState({
            activeIndex: isActive ? null : index,
        });
    };

    setContentHeight = (index: number, event: LayoutChangeEvent) => {
        const { height } = event.nativeEvent.layout;
        this.setState((prevState) => {
            const contentHeights = [...prevState.contentHeights];
            contentHeights[index] = height;
            return { contentHeights };
        });
    };

    render() {
        const { items } = this.props;
        const { activeIndex, animationValue, contentHeights } = this.state;

        return (
            <View style={styles.accordion}>
                {items.map((item, index) => {
                    const height = activeIndex === index ? animationValue : new Animated.Value(0);

                    return (
                        <View key={index} style={styles.accordionItem}>
                            <TouchableOpacity style={[styles.accordionTitleContainer, activeIndex === index && styles.expandedAccordionTitleContainer]} onPress={() => this.handleClick(index)}>
                                <Text style={[styles.accordionTitle]}>{item.title}</Text>
                                <Icon
                                    name={activeIndex === index ? 'chevron-up' : 'chevron-down'}
                                    size={20}
                                    color='#000'
                                    style={styles.chevronIcon}
                                />
                            </TouchableOpacity>
                            <Animated.View style={{ height, overflow: 'hidden' }}>
                                <View onLayout={(event) => this.setContentHeight(index, event)}>
                                    <LineDividier containerStyle={{ paddingHorizontal: 12 }} />
                                    <View style={[styles.accordionContent]}>
                                        <Text style={[styles.contentText]}>{item.content}</Text>
                                    </View>
                                </View>
                            </Animated.View>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    accordion: {
        gap: 10,
        flex: 1,
        marginHorizontal: 12,
    },
    accordionItem: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#EDEDED',
        backgroundColor: '#FFFFFF'
    },
    accordionTitle: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 17,
    },
    accordionTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 13,
    },
    accordionContent: {
        paddingHorizontal: 12,
        paddingBottom: 13,
    },
    expandedAccordionTitleContainer: {
        paddingBottom: 0
    },
    contentText: {
        color: '#797979',
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
    },
    chevronIcon: {
        marginLeft: 10,
    }
});

export default Accordion;