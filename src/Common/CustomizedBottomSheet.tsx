import React, { Component } from "react";
import { Sheet } from 'react-modal-sheet';
import { Pressable, StyleSheet, Text, View } from "react-native";
import LineDividier from "./LineDivider";
import { Image } from "react-native";
interface BottomSheetOption {
    icon?: any;
    image?: any;
    imageDimensions?: any;
    title: string;
    onPress: any;
}

interface BottomSheetComponentProps {
    isVisible: boolean;
    options: BottomSheetOption[];
    onClose: () => void;
}

class CustomizedBottomSheet extends Component<BottomSheetComponentProps>{
    render(){
        const {isVisible, options, onClose} = this.props

        return (
            <Sheet
                isOpen={isVisible}
                rootId="root"
                onClose={onClose}
                detent="content-height"
            >
                <Sheet.Container style={styles.container}>
                    <Sheet.Header />
                    <Sheet.Content>
                        <View style={styles.content}>
                            {options.map((option, index) => (
                                <Pressable key={index} onPress={option.onPress}>
                                    <View style={styles.listItem}>
                                        {option.icon && option.icon}
                                        {option.image && (
                                            <Image
                                                source={option.image}
                                                style={[styles.image, option.imageDimensions]}
                                                resizeMode="cover"
                                            />
                                        )}
                                        <Text style={styles.listItemTitle}>{option.title}</Text>
                                    </View>
                                    <LineDividier />
                                </Pressable>
                            ))}
                        </View>
                    </Sheet.Content>
                </Sheet.Container>
                <Sheet.Backdrop onTap={onClose} />
            </Sheet>
        )
    }
}

export default CustomizedBottomSheet;

const styles = StyleSheet.create({
    container: {
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    content: {
        paddingHorizontal: 25,
        paddingBottom: 22,
    },
    listItem: {
        flexDirection: 'row',
        gap: 23,
        paddingVertical: 2,
        alignItems: 'center',
    },
    listItemTitle: {
        color: "#4B4949",
        fontFamily: "Inter",
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    },
    image: {
        width: 35,
        height: 35,
    }
})