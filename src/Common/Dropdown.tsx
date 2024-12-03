import React, { Component } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
interface dropdownProps {
    options: string[];
    selectedValue?: string;
    label?: string;
    onValueChange: (value: string) => void;
}

interface dropdownState {
    isOpen: boolean;
    selectedValue: string;
    animatedHeight: Animated.Value;
}
class Dropdown extends Component<dropdownProps, dropdownState>{
    constructor(props: dropdownProps){
        super(props);
        this.state = {
            isOpen: false,
            selectedValue: props.selectedValue || '',
            animatedHeight: new Animated.Value(0),
        };
    }

    toggleDropdown = () => {
        const { isOpen, animatedHeight } = this.state;
        const { options } = this.props;

        if(isOpen){
            Animated.timing(animatedHeight, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
            }).start();
        }else {
            Animated.timing(animatedHeight, {
                toValue: options.length * 40, // Adjust based on your option height
                duration: 300,
                useNativeDriver: false,
            }).start();
        }
        this.setState({isOpen: !isOpen});
    };

    selectOption = (value: string) => {
        this.setState({ selectedValue: value, isOpen: false});
        this.props.onValueChange(value);
        this.toggleDropdown();
    };

    render(){
        const { options, label } = this.props;
        const { isOpen, selectedValue, animatedHeight} = this.state;

        return (
            <View style={[styles.container]}>
                <Pressable onPress={this.toggleDropdown} style={styles.selected}>
                    <View 
                        style={[styles.selectedContent, 
                        isOpen && styles.selectedElement, 
                        isOpen && styles.openedSelectedContent
                        ]}>
                            <Text style={styles.selectedText}>{selectedValue || label}</Text>
                            <Icon
                                name={isOpen ? 'chevron-down' : 'chevron-up'}
                                size={24}
                                color="#000"
                        />
                    </View>
                </Pressable>
                <Animated.View style={[styles.dropdown, !isOpen ? styles.closedDropdown : styles.openedDropdown, {height: animatedHeight}]}>
                    {options.map((option, index) => (
                        <Pressable
                            key={index}
                            onPress={() => this.selectOption(option)}
                            style={styles.option}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </Pressable>
                    ))}
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: '#fff',
        overflow: 'hidden',
      },
      selected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      },
      selectedContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 11,
        paddingHorizontal: 18,
        borderWidth: 1.3,
        borderColor: '#B8BBC2',
        borderRadius: 8,
        backgroundColor: '#FFF',
        alignItems: 'center',
        width: '100%',
      },
      openedSelectedContent: {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      },
      selectedElement: {
        borderColor: "#215AFF",
        // borderWidth: 0
      },
      selectedText: {
        fontSize: 16,
        color: '#313144',
        fontFamily: "Inter",
        fontWeight: 500,
        lineHeight: 17,
      },
      dropdown: {
        overflow: 'hidden',
        borderWidth: 1.3,
        borderColor: '#ccc',
        borderRadius: 8,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        backgroundColor: '#FFF'
      },
      closedDropdown: {
        borderWidth: 0
      },
      openedDropdown: {

      },
      option: {
        paddingHorizontal: 24,
        paddingVertical: 11,
        // borderBottomWidth: 1,
        // borderBottomColor: '#ccc',
      },
      optionText: {
        color: '#313144',
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: 500,
        lineHeight: 17
      }
});

export default Dropdown;