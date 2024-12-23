// import React, { Component } from 'react';
// import { Modal, View, StyleSheet, TouchableOpacity, ViewStyle, Pressable, Animated, Dimensions, Easing } from 'react-native';
// import CloseIcon from '../Assets/Icons/CloseIcon';


// const { height } = Dimensions.get('window');

// interface Props {
//     visible: boolean;
//     onClose: () => void;
//     children: React.ReactNode;
//     containerStyle?: ViewStyle;
//     closeIcon?: React.ReactNode;
//     overlayStyle?: ViewStyle;
// }

// interface State {
//     fadeAnim: Animated.Value;
//     slideAnim: Animated.Value;
// }

// class CustomBottomSheet extends Component<Props> {


//     render() {
//         const { visible, onClose, children, containerStyle, closeIcon, overlayStyle } = this.props;

//         return (
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={visible}
//                 onRequestClose={onClose}
//             >
//                 <View style={[styles.overlay, overlayStyle]}>
//                     <TouchableOpacity style={styles.overlayTouchable} onPress={onClose} />
//                     <View style={[styles.container, containerStyle]}>
//                         <Pressable onPress={onClose} style={styles.closeIconContainer}>
//                             {closeIcon || <CloseIcon />}
//                         </Pressable>
//                         {children}
//                     </View>
//                 </View>
//             </Modal>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     overlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',
//     },
//     overlayTouchable: {
//         flex: 1,
//     },
//     container: {
//         // flex: 1,
//         backgroundColor: 'white',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         paddingVertical: 22,
//         paddingHorizontal: 25,
//     },
//     closeIconContainer: {
//         alignSelf: 'flex-end'
//     }
// });

// export default CustomBottomSheet;

// ************************************************************

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import {
//     Modal,
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     Animated,
//     Easing,
//     Dimensions,
//     ViewStyle,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const { height } = Dimensions.get('window');

// interface Props {
//     visible: boolean;
//     onClose: () => void;
//     children: React.ReactNode;
//     containerStyle?: ViewStyle;
//     closeIcon?: React.ReactNode;
//     overlayStyle?: ViewStyle;
// }

// const CustomBottomSheet: React.FC<Props> = ({
//     visible,
//     onClose,
//     children,
//     containerStyle,
//     closeIcon,
//     overlayStyle,
// }) => {
//     const fadeAnim = useRef(new Animated.Value(0)).current;
//     const slideAnim = useRef(new Animated.Value(height)).current;
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [isVisible, setIsVisible] = useState(visible);

//     const openAnimation = useCallback(() => {
//         setIsAnimating(true);
//         Animated.parallel([
//             Animated.timing(fadeAnim, {
//                 toValue: 1,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//             Animated.timing(slideAnim, {
//                 toValue: 0,
//                 duration: 300,
//                 easing: Easing.out(Easing.ease),
//                 useNativeDriver: true,
//             }),
//         ]).start(() => setIsAnimating(false));
//     }, [fadeAnim, slideAnim]);

//     const closeAnimation = useCallback(() => {
//         setIsAnimating(true);
//         Animated.parallel([
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 300,
//                 useNativeDriver: true,
//             }),
//             Animated.timing(slideAnim, {
//                 toValue: height,
//                 duration: 300,
//                 easing: Easing.in(Easing.ease),
//                 useNativeDriver: true,
//             }),
//         ]).start(() => {
//             setIsAnimating(false);
//             setIsVisible(false);
//             onClose();
//         });
//     }, [fadeAnim, slideAnim, onClose]);

//     useEffect(() => {
//         if (visible && !isVisible) {
//             setIsVisible(true);
//         } else if (!visible && isVisible && !isAnimating) {
//             closeAnimation();
//         }
//     }, [visible, isVisible, isAnimating, closeAnimation]);

//     useEffect(() => {
//         if (visible) {
//             openAnimation();
//         }
//     }, [isVisible, openAnimation, visible]);

//     const handleOverlayPress = () => {
//         if (!isAnimating) {
//             closeAnimation();
//         }
//     };

//     if (!isVisible) {
//         return null;
//     }

//     return (
//         <Modal
//             transparent
//             visible={isVisible}
//             animationType="none"
//             onRequestClose={closeAnimation} // Proper handling of Modal close
//         >
//             <Animated.View style={[styles.overlay, overlayStyle, { opacity: fadeAnim }]}>
//                 <TouchableOpacity style={styles.overlayTouchable} onPress={handleOverlayPress} />
//             </Animated.View>
//             <Animated.View
//                 style={[
//                     styles.container,
//                     containerStyle,
//                     { transform: [{ translateY: slideAnim }] },
//                 ]}
//             >
//                 <TouchableOpacity onPress={closeAnimation} style={styles.closeIconContainer}>
//                     {closeIcon || <Icon name="close" size={24} color="black" />}
//                 </TouchableOpacity>
//                 {children}
//             </Animated.View>
//         </Modal>
//     );
// };

// const styles = StyleSheet.create({
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     overlayTouchable: {
//         flex: 1,
//     },
//     container: {
//         position: 'absolute',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         backgroundColor: 'white',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         paddingVertical: 22,
//         paddingHorizontal: 25,
//     },
//     closeIconContainer: {
//         alignSelf: 'flex-end',
//     },
// });

// export default CustomBottomSheet;


import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef, useCallback } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    Dimensions,
    ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

interface Props {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    containerStyle?: ViewStyle;
    closeIcon?: React.ReactNode;
    overlayStyle?: ViewStyle;
}

const CustomBottomSheet = forwardRef(({
    visible,
    onClose,
    children,
    containerStyle,
    closeIcon,
    overlayStyle,
}: Props, ref) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(height)).current;
    const [isAnimating, setIsAnimating] = useState(false);
    const [isVisible, setIsVisible] = useState(visible);

    const openAnimation = useCallback(() => {
        setIsAnimating(true);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start(() => setIsAnimating(false));
    }, [fadeAnim, slideAnim]);

    const closeAnimation = useCallback(() => {
        setIsAnimating(true);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: height,
                duration: 300,
                easing: Easing.in(Easing.ease),
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsAnimating(false);
            setIsVisible(false);
            onClose();
        });
    }, [fadeAnim, slideAnim, onClose]);

    useImperativeHandle(ref, () => ({
        closeAnimation,
    }));

    useEffect(() => {
        if (visible && !isVisible) {
            setIsVisible(true);
        } else if (!visible && isVisible && !isAnimating) {
            closeAnimation();
        }
    }, [visible, isVisible, isAnimating, closeAnimation]);

    useEffect(() => {
        if (visible) {
            openAnimation();
        }
    }, [isVisible, openAnimation, visible]);

    const handleOverlayPress = () => {
        if (!isAnimating) {
            closeAnimation();
        }
    };

    if (!isVisible) {
        return null;
    }

    return (
        <Modal
            transparent
            visible={isVisible}
            animationType="none"
            onRequestClose={closeAnimation} // Proper handling of Modal close
        >
            <Animated.View style={[styles.overlay, overlayStyle, { opacity: fadeAnim }]}>
                <TouchableOpacity style={styles.overlayTouchable} onPress={handleOverlayPress} />
            </Animated.View>
            <Animated.View
                style={[
                    styles.container,
                    containerStyle,
                    { transform: [{ translateY: slideAnim }] },
                ]}
            >
                <TouchableOpacity onPress={closeAnimation} style={styles.closeIconContainer}>
                    {closeIcon || <Icon name="close" size={24} color="black" />}
                </TouchableOpacity>
                {children}
            </Animated.View>
        </Modal>
    );
});

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    overlayTouchable: {
        flex: 1,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 22,
        paddingHorizontal: 25,
    },
    closeIconContainer: {
        alignSelf: 'flex-end',
    },
});

export default CustomBottomSheet;