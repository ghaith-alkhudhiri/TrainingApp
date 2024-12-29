import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper';
import ShareIcon from '../Assets/Icons/ShareIcon';
import CustomTabs from '../Common/CustomTabs';
import SearchInput from '../Common/SearchInput';
import ReviewItem from '../Discover/Components/ReviewItem'
import SelectableItem from '../Common/SelectableItem';
import { NavProps } from '../types';
import theme from '../Constants/theme';
import CustomRadioButton from '../Common/CustomRadioButton';

interface State {
  selectedOption: string | null;
  showFullText: boolean;
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

export class ProductPage extends Component<NavProps, State> {
    constructor(props: any){
        super(props);

        this.state = {
          selectedOption: null,
          showFullText: false,
        }
    }

    handleSelect = (option: string) => {
        this.setState({
            selectedOption: option
        });
    }

    render() {
        const { selectedOption, showFullText } = this.state;
        const handleReadMore = () => {
          this.setState({ showFullText: !showFullText });
        };
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
        
        return (
        <ScreenWrapper 
            heroImage
            heroImageStyle={{height: 327}}
            heroImagesUrls={[
              require('../Assets/Images/item.jpg'),
              require('../Assets/Images/item.jpg'),
              require('../Assets/Images/item.jpg'),
              require('../Assets/Images/item.jpg'),
            ]} 
            floatingBtn 
            floatingBtnProps={[{label: "Add to Cart", onPress: ()=>{}}]}
            rightElement={<ShareBtn />}
            childrenContainerStyle={{gap: 24}}
            floatingObject={{label: 'Total Price', price: '200 RS'}}
            floatingBtnLayout= 'row'
            floatingBtnContainer={{gap: 55}}
            >
              <View style={styles.container}>
                <Text style={styles.title}>Two set</Text>
                <Text style={[styles.title, styles.subTitle]}>Sport Ware</Text>

                <View style={{gap: 23, paddingTop: 24}}>
                  <View style={{gap: 8}}>
                    <Text style={styles.title}>Product Details</Text>
                    <View style={{height: 1, backgroundColor: '#E1E1E1'}} />
                      <Text style={{
                        color: '#797979',
                        fontFamily: theme.font,
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 18,
                      }}>
                          {showFullText
                            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu."
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu.".substring(0, 100) + '...'}
                            <Text style={{
                              color: theme.primary,
                              fontFamily: theme.font,
                              fontSize: 14,
                              fontWeight: '500',
                              lineHeight: 18,
                              textDecorationLine: 'underline',
                              }} onPress={handleReadMore}>
                              {showFullText ? " Read less" : " Read more"}
                            </Text>
                      </Text>
                  </View>

                  <View style={{gap: 19}}>
                    <Text style={styles.title}>Select Size</Text>
                    <CustomRadioButton 
                      SegmentedControl 
                      options={[
                        { label: 'S', value: 'Small' }, 
                        { label: 'M', value: 'Medium' }, 
                        { label: 'L', value: 'Large' } 
                      ]} 
                      selectedOption={'Medium'} 
                      onOptionSelect={()=>{}} layout='row' 
                    />
                  </View>

                  <View style={{gap: 19}}>
                    <Text style={styles.title}>Select Color</Text>
                    <CustomRadioButton 
                      Swatch 
                      options={[
                        { label: 'pink', value: 'pink' }, 
                        { label: 'blue', value: 'blue' }, 
                        { label: 'darkblue', value: 'darkblue' }, 
                        { label: 'red', value: 'red' }, 
                      ]} 
                      selectedOption={'pink'} 
                      onOptionSelect={()=>{}} layout='row' 
                    />
                  </View>
                </View>
              </View>

              {/* Review Section */}
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
        </ScreenWrapper>
        )
  }
}

export default ProductPage;

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
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    title: {
      color: '#000',
      fontFamily: theme.font,
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3,
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 17,
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