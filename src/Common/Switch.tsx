import React,{ Component } from "react";
import { Animated, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface SwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
    disabled?: boolean;
    trackColor?: { false: string; true: string };
    thumbColor?: string;
    style?: ViewStyle;
}

interface SwitchState {
    switchAnim: Animated.Value;
}

class Switch extends Component<SwitchProps, SwitchState>{
    static defaultProps = {
        disabled: false,
        trackColor: { false: '#767577', true: '#81b0ff' },
        thumbColor: '#f4f3f4',
    };

    constructor(props: SwitchProps){
        super(props);
        this.state = {
            switchAnim: new Animated.Value(props.value ? 1 : 0),
        };
    }

    componentDidUpdate(prevProps: SwitchProps) {
        if (prevProps.value !== this.props.value) {
            this.animateSwitch(this.props.value);
        }
    }

    animateSwitch = (value: boolean) => {
        Animated.timing(this.state.switchAnim, {
            toValue: value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }

    toggleSwitch = () => {
        if (this.props.disabled) return;
        const newValue = !this.props.value;
        this.props.onValueChange(newValue);
        this.animateSwitch(newValue);
    }

    render() {
        const { switchAnim } = this.state;
        const { trackColor, thumbColor, style } = this.props;

        const interpolatedBackgroundColor = switchAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [trackColor!.false, trackColor!.true],
        });

        const interpolatedThumbPosition = switchAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [3, 27], // Adjust these values based on your thumb size and track width
        });

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.toggleSwitch}
                style={[styles.switchContainer, style]}
            >
                <Animated.View
                    style={[
                        styles.track,
                        { backgroundColor: interpolatedBackgroundColor },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.thumb,
                        { backgroundColor: thumbColor, transform: [{ translateX: interpolatedThumbPosition }] },
                    ]}
                />
            </TouchableOpacity>
        );
    }
}

export default Switch;

const styles = StyleSheet.create({
    switchContainer: {
        width: 48,
        height: 22,
        justifyContent: 'center',
    },
    track: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        position: 'absolute',
    },
    thumb: {
        width: 18,
        height: 18,
        borderRadius: 9,
        position: 'absolute',
        // top: 2,
    },
})