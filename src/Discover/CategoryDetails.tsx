import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper';
import ShareIcon from '../Assets/Icons/ShareIcon';
import CustomTabs from '../Common/CustomTabs';

export class ShareBtn extends Component {
    render(){
        return (
            <Pressable style={styles.shareBtnContainer} onPress={() => console.log("Share btn clicked")}>
                <ShareIcon />
            </Pressable>
        )
    }
}

export class CategoryDetails extends Component {
    render() {
        const tabs = [
            {
                key: 'tabAll',
                label: "All",
                content: (
                    <View>
                        <Text>welcome</Text>
                    
                    </View>
                )
            },
            {
                key: 'tabOpen',
                label: 'Open',
                content: (
                    <View>
                       <Text>Hello</Text>
                    </View>
                )
            },
            {
                key: 'tabClosed',
                label: "Closed",
                content: (
                    <View>
                        <Text>Great</Text>
                    </View>
                )
            }
        ];
        return (
        <ScreenWrapper 
            heroImage 
            heroImageUrl="https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" floatingBtn 
            floatingBtnProps={{label: "View Classes", onPress: () => {}}}
            rightElement={<ShareBtn />}
            >
                <View style={styles.container}>
                    <Text style={styles.title}>Vinyasa Yoga</Text>
                    <CustomTabs 
                        tabs={tabs}
                        styleType='small'
                    />
                </View>
        </ScreenWrapper>
        )
  }
}

export default CategoryDetails;

const styles = StyleSheet.create({
    shareBtnContainer: {
        width: 40,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 33,
    },
    container: {

    },
    title: {
        color: '#000',
        fontFamily: "Inter",
        fontWeight: 600,
        paddingTop: 16,
        paddingHorizontal: 24,
    }

})