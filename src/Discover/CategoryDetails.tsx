import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
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
        const galleryImages = [
            "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]
        const tabs = [
            {
                key: 'about',
                label: "About",
                content: (
                    <View style={styles.tabContainer}>
                        <Text style={styles.aboutText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. 

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </Text>
                    
                    </View>
                )
            },
            {
                key: 'trainers',
                label: 'Trainers',
                content: (
                    <View>
                       <Text>Hello</Text>
                    </View>
                )
            },
            {
                key: 'gallery',
                label: "Gallery",
                content: (
                    <View style={styles.galleryContainer}>
                        <Text style={styles.galleryText}>Gallery <Text style={styles.imagesCount}>({galleryImages.length})</Text></Text>
                        <View style={styles.galleryImagesContainer}>
                            {galleryImages.map((image, index) => {
                               return <Image key={index} source={{uri: image}} style={styles.galleryImage}/>
                            })}
                        </View>
                    </View>
                )
            },
            {
                key: 'review',
                label: "Review",
                content: (
                    <View>
                        <Text>Great</Text>
                    </View>
                )
            },
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
                        tabBarStyle={{paddingHorizontal: 0}}
                        styleType='underline'
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
    },
    tabContainer: {
        paddingHorizontal: 22,
        paddingBottom: 13
    },
    aboutText: {
        color: '#797979',
        textAlign: 'justify',
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
    galleryContainer: {
        paddingHorizontal: 24,
        gap: 11,
    },
    galleryText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 600,
    },
    imagesCount: {
        color: "#0165FC",
        fontFamily: "Inter",
        fontWeight: 600,
        letterSpacing: -0.3,
    },
    galleryImagesContainer: {
        flexDirection: 'row',
        columnGap: 16,
        rowGap: 14,
        flexWrap: 'wrap'
    },
    galleryImage: {
        width: 155,
        height: 162,
        borderRadius: 7,
    }

})