import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import RightArrow from '../Assets/Icons/RightArrow';
import RightArrowIcon from '../Assets/Icons/RightArrowIcon';
import LeftArrowIcon from '../Assets/Icons/LeftArrowIcon';
import theme from '../Constants/theme';

interface NavigationControlsProps {
    currentIndex: number;
    totalSteps: number;
    onBack: () => void;
    onNext: () => void;
}

const NavigationControls= ({ currentIndex, totalSteps, onBack, onNext }: NavigationControlsProps) => {
    return (
        <View style={styles.navigationContainer}>
            <Pressable
                style={[styles.button, styles.backBtn, currentIndex === 0 && styles.disabledButton]}
                onPress={onBack}
                disabled={currentIndex === 0}
            >
                <LeftArrowIcon />
            </Pressable>

            <View style={styles.indicatorContainer}>
                {Array.from({ length: totalSteps }).map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>

            <Pressable
                style={[styles.button, currentIndex === totalSteps - 1 && styles.disabledButton]}
                onPress={onNext}
                disabled={currentIndex === totalSteps - 1}
            >
                <RightArrowIcon />

            </Pressable>
        </View>
    );
};

export default NavigationControls;

const styles = StyleSheet.create({
    navigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        width: '100%',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: theme.primary,
        paddingVertical: 16,
        height: 46,
        paddingHorizontal: 15,
        borderRadius: 73,
    },
    backBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.primary
    },
    disabledButton: {
        backgroundColor: 'gray',
        opacity: 0
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: 'white',
    },
});