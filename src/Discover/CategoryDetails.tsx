import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper';
import ShareIcon from '../Assets/Icons/ShareIcon';
import CustomTabs from '../Common/CustomTabs';
import SearchInput from '../Common/SearchInput';
import ReviewItem from './Components/ReviewItem';
import SelectableItem from '../Common/SelectableItem';

interface Props {
    navigation: any;
}

interface State {
    selectedOption: string | null;
}

export class ShareBtn extends Component {
    render(){
        return (
            <Pressable style={styles.shareBtnContainer} onPress={() => console.log("Share btn clicked")}>
                <ShareIcon />
            </Pressable>
        )
    }
}

export class CategoryDetails extends Component<Props, State> {
    constructor(props: any){
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    handleSelect = (option: string) => {
        this.setState({
            selectedOption: option
        });
    }

    navigateToClasses = () => {
        this.props.navigation.navigate("Classes");
    }

    render() {
        const { selectedOption } = this.state;
        const galleryImages = [
            "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]


        const reviews = [
            {
                senderUserName: "Ghaith Alkhudhiri",
                rating: 3,
                content: "The service was okay, but there's room for improvement.",
                timestamp: "2 weeks ago"
            },
            {
                senderUserName: "Ali Salman",
                rating: 5,
                content: "Amazing experience! Highly recommended.",
                timestamp: "3 weeks ago",
            },
            {
                senderUserName: "Fatima Yusuf",
                rating: 4,
                content: "Good overall, but the process could be faster.",
                timestamp: "1 week ago",
            },
            {
                senderUserName: "Ahmed Jamal",
                rating: 2,
                content: "Not satisfied with the quality of service.",
                timestamp: '1 year ago'
            },
            {
                senderUserName: "Noor Ali",
                rating: 5,
                content: "Excellent! The team was very professional.",
                timestamp: '2 years ago',
            },
            {
                senderUserName: "Sarah Ibrahim",
                rating: 1,
                content: "Very disappointed. Will not use this service again.",
                timestamp: '3 years ago',
            },
            {
                senderUserName: "Hassan Mohammed",
                rating: 4,
                content: "Great service but a bit expensive.",
                timestamp: '2 minutes ago',
            },
            {
                senderUserName: "Mariam Abdullah",
                rating: 3,
                content: "It was average. Nothing exceptional.",
                timestamp: '1 minute ago'
            },
            {
                senderUserName: "Omar Khalid",
                rating: 5,
                content: "Outstanding service and quick response!"
            },
            {
                senderUserName: "Layla Nasser",
                rating: 2,
                content: "Service was slow, and staff were unresponsive."
            }
        ];
        
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
                    <View style={styles.reviewContainer}>
                        <View style={styles.reviewControlsContainer}>
                            <View style={styles.reviewHeaderContainer}>
                                <Text style={styles.reviewTitle}>Reviews</Text>
                                <Pressable style={styles.addReviewBtn} onPress={() => console.log("Add Review Pressed")}>
                                    <Text style={styles.addReviewText}>Add Review</Text>
                                </Pressable>
                            </View>
                            <SearchInput
                                placeholder='Search in Reviews'
                                containerStyle={{borderRadius: 11, borderWidth: 1, borderColor: '#E9E9E9', backgroundColor: '#FFF'}}
                                onChangeText={(text) => console.log("Search: ", text)}
                                onFocus={() => console.log('Input focused')}
                            />
                            <View style={styles.filterOptionsContainer}>
                                {['All', "Latest", "Oldest"].map((label, index) => (
                                    <SelectableItem
                                        key={label}
                                        label={label}
                                        isSelected={selectedOption === label}
                                        onPress={() => this.handleSelect(label)}
                                    />
                                ))}
                            </View>
                        </View>
                        <View style={styles.reviewsContainer}>
                            {reviews.map((review, index) => (
                                <ReviewItem key={index} name={review.senderUserName} rating={review.rating} reviewMsg={review.content} timestamp={review.timestamp} />

                            ))}
                        </View>
                    </View>
                )
            },
        ];
        return (
        <ScreenWrapper 
            heroImage 
            heroImagesUrls={[
                "https://plus.unsplash.com/premium_photo-1669446008800-9a124b0fd3a2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://plus.unsplash.com/premium_photo-1683133543401-edc31ed41140?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]} floatingBtn 
            floatingBtnProps={{label: "View Classes", onPress: this.navigateToClasses}}
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
    },
    reviewContainer: {
        gap: 16,
    },
    reviewControlsContainer: {
        gap: 11,
        paddingHorizontal: 24,
    },
    reviewTitle: {
        color: '#000',
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 600,
    },
    addReviewBtn: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    addReviewText: {
        color: '#0165FC',
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 17,
    },
    reviewHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewsContainer: {
    },
    filterOptionsContainer: {
        flexDirection: 'row',
        gap: 6,
    }

})