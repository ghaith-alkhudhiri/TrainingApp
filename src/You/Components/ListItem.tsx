import React, { Component } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import RightChevron from '../../Assets/Icons/RightChevron';

interface ListItemProps {
    icon: React.ReactNode;
    title: string;
    screen: string;
    navigation: any;
    onPress?: any;
}

class ListItem extends Component<ListItemProps> {
    handlePress = () => {
        const { navigation, screen, onPress } = this.props;
        if(onPress){
            onPress();
        }else if(screen){
            navigation.navigate(screen);
        }
    };

    render() {
        const { icon, title } = this.props;
        return (
            <Pressable style={styles.listItem} onPress={this.handlePress}>
                <View style={styles.contentContainer}>
                    {icon}
                    <Text style={styles.text}>{title}</Text>
                </View>
                <RightChevron fill={"#0165FC"} />
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 13,
        borderBottomWidth: 1,
        borderColor: "#EDEDED",
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    text: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 14,
        lineHeight: 17,
    },
});

export default ListItem;