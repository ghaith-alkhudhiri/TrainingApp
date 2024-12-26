import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import RightArrow from '../Assets/Icons/RightArrow';
import RightArrowIcon from '../Assets/Icons/RightArrowIcon';
import LeftArrowIcon from '../Assets/Icons/LeftArrowIcon';
import theme from '../Constants/theme';

interface NavigationControlsProps {
    currentIndex: number;
    totalSteps: number;
    stepsStyle ?: 'normal' | 'numbered' | 'expanded' | 'wave';
    buttonStyle ?: 'circular' | 'square';
    onBack: () => void;
    onNext: () => void;
}

const NavigationControls= ({ currentIndex, totalSteps, stepsStyle = 'normal', buttonStyle = 'circular', onBack, onNext }: NavigationControlsProps) => {
    const buttonStyles = [
        styles.button,
        buttonStyle === 'circular' && styles.circularButton,
        buttonStyle === 'square' && styles.squareButton,
    ]

    const renderSteps = (index: number) => {
        let isActiveIndex = index === currentIndex;

        switch(stepsStyle){
            case 'normal':
                return (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            isActiveIndex && styles.activeIndicator,
                        ]}
                    />
                );
            case 'numbered':
                return (
                    <View key={index}
                        style={[
                            styles.indicator,
                            isActiveIndex && styles.activeIndicatorContainer,
                        ]}
                    >
                        {isActiveIndex && (
                            <Text style={styles.activeNumberedText}>{index + 1}</Text>
                        )}
                    </View>
                );
            case 'expanded':
                return (
                    <View 
                        key={index}
                        style={
                            [
                                styles.expandedIndicator,
                                isActiveIndex && styles.activeExpandedIndicator
                            ]
                        }
                    />
                );
            case 'wave':
                return (
                    <View 
                        key={index}
                        style={
                            [
                                styles.waveIndicator,
                                isActiveIndex && styles.activeWaveIndicator
                            ]
                        }

                    />
                );
            default:
                return null;
        }
    }
    return (
        <View style={styles.navigationContainer}>
            <Pressable
                style={[...buttonStyles, styles.backBtn, currentIndex === 0 && styles.disabledButton]}
                onPress={onBack}
                disabled={currentIndex === 0}
            >
                <LeftArrowIcon />
            </Pressable>

            <View style={[styles.indicatorContainer, (stepsStyle === 'expanded' || stepsStyle === 'wave') && {gap: 5}]}>
                {Array.from({ length: totalSteps }).map((_, index) => renderSteps(index))}
            </View>

            <Pressable
                style={[...buttonStyles]}
                onPress={onNext}
                // disabled={currentIndex === totalSteps - 1}
            >
                <RightArrowIcon fill={"#FFF"} />

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
    },
    circularButton: {
        borderRadius: 73,
    },
    squareButton: {
        
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
        backgroundColor: '#EAF2FF',
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: theme.primary,
    },
    activeIndicatorContainer: {
        width: 35,
        height: 36,
        paddingVertical: 4,
        paddingHorizontal: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 27,
        backgroundColor: theme.primary
    },
    activeNumberedText: {
        color: "#FFF",
        fontFamily: 'Poppins',
        fontWeight: 500,
        lineHeight: 20,
        fontSize: 20,
    },
    expandedIndicator: {
        width: 30,
        height: 10,
        backgroundColor: '#EAF2FF',
        borderRadius: 5,
    },
    activeExpandedIndicator: {
        width: 60,
        backgroundColor: theme.primary,
    },
    waveIndicator: {
        width: 4,
        height: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 6,
    },
    activeWaveIndicator: {
        width: 6,
        height: 22,
        borderRadius: 6,
        backgroundColor: theme.primary
    }
});