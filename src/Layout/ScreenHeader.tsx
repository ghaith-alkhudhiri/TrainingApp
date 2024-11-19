import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component, ReactNode } from 'react'
import BackArrowIcon from '../Assets/Icons/BackArrow';
import If from '../Common/If';

interface Props {
    backEnabled: boolean;
    title?: string;
    rightElement?: ReactNode;
}

export class ScreenHeader extends Component<Props> {
    handleBackPress = () => {
        // this.props.navigate(-1);
      };
    render() {
        const {backEnabled, title, rightElement} = this.props;
        return (
        <View style={styles.container}>
            
            <View style={styles.titleContainer}>
                <If condition={!!title}>
                    <Text style={styles.title}>{title}</Text>
                </If>
            </View>
            <Pressable style={styles.backContainer} onPress={this.handleBackPress}>
                <If condition={backEnabled}>
                    <BackArrowIcon width={20} height={20} color="#1E232C" />
                </If>
            </Pressable>
                {/* <View style={{ width: 41 }} /> */}
            <View style={[styles.rightContainer]}>
                <If condition={!!rightElement}>
                    {rightElement}
                </If>
            </View>
        </View>
        )
    }
}

export default ScreenHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        position: 'relative'
    },
    backContainer: {
        width: 41,
        height: 41,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E8ECF4',
        backgroundColor: '#FFF',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        left: 0,

    },
    titleContainer: {
        flex: 1,
        height: 41,
        zIndex: 5,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E232C',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        zIndex: 10,
        columnGap: 50,
    }
});