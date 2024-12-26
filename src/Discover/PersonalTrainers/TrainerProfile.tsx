import { Image, Share, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper';
import InfoCard from '../../Classes/InfoCard';
import { NavProps } from '../../types';
import ShareIcon from '../../Assets/Icons/ShareIcon';
import theme from '../../Constants/theme';
import Dropdown from '../../Common/Dropdown';
import CustomRadioButton from '../../Common/CustomRadioButton';
import LevelIcon from '../../Assets/Icons/LevelIcon';
import PriceIcon from '../../Assets/Icons/PriceIcon';
import RatingIcon from '../../Assets/Icons/RatingIcon';
import SeatsIcon from '../../Assets/Icons/SeatsIcon';
import ReviewSection from '../../Common/ReviewSection';
import DatePickerInput from '../../Common/DatePickerInput';

interface Props {
    route: {
        params: {
            imageUrl: string;
            name: string;
            tags?: string[];
            rating: number;
            reviews: number;
            position: string;
        };
      };
}

interface State {
    showFullText: boolean;
    currentStep: number;
}

type ProfileProps = Props & NavProps;

export class TrainerProfile extends Component<ProfileProps, State> {
    constructor(props: ProfileProps) {
        super(props);
    
        this.state = {
          showFullText: false,
          currentStep: 1,
        };
      }
    
    handleNextPress = () => {
        const { currentStep } = this.state;

        if (currentStep < 2) {
            this.setState({ currentStep: currentStep + 1 });
        } else {
            console.log('Form submitted:', this.state);
        }
    };
    
    renderStep = () => {
    const { name, imageUrl, tags, rating, reviews, position } = this.props.route.params;
    const { currentStep, showFullText } = this.state;
    const infoCards = [
        {
            icon: <LevelIcon />,
            value: "Expert",
            label: "Train"
        },
        {
            icon: <SeatsIcon />,
            value: "2",
            label: "Years Exp."
        },
        {
            icon: <RatingIcon />,
            value: "4.5",
            label: "Rating"
        },
        {
            icon: <PriceIcon />,
            value: "200",
            label: 'Review'
        }
        
    ];
    const handleReadMore = () => {
        this.setState({ showFullText: !showFullText });
    };

    if (currentStep === 1) {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>{name}</Text>
                    <Text style={styles.categoryText}>{position}</Text>
                </View>
                <View>
                    <View style={styles.infoContainer}>
                        {infoCards.map((infoCard, index) => (
                            <InfoCard key={index} icon={infoCard.icon} value={infoCard.value} label={infoCard.label} />
                        ))}
                    </View>
                    <View style={{gap: 8, marginTop: 13}}>
                        <Text style={{color: '#000',
                            fontFamily: theme.primary,
                            fontSize: 18,
                            fontWeight: '600',
                            letterSpacing: -0.3,
                            }}>About</Text>
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
                    <View style={{marginTop: 23}}>
                        <View style={{gap: 8}}>
                            <Text style={{color: '#000',
                                fontFamily: theme.primary,
                                fontSize: 18,
                                fontWeight: '600',
                                letterSpacing: -0.3,
                                }}>Working hours</Text>
                            <View style={{height: 1, backgroundColor: '#E1E1E1'}} />
                            <View style={{gap: 10}}>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Sunday</Text>
                                    <Text style={styles.agendaTime}>00:00 - 00:00</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Monday</Text>
                                    <Text style={styles.agendaTime}>00:00 - 00:00</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Tuesday</Text>
                                    <Text style={styles.agendaTime}>00:00 - 00:00</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Wednesday</Text>
                                    <Text style={styles.agendaTime}>00:00 - 00:00</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Thursday</Text>
                                    <Text style={styles.agendaTime}>00:00 - 00:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: 23}}>
                        <Text style={{color: '#000',
                                fontFamily: theme.primary,
                                fontSize: 18,
                                fontWeight: '600',
                                letterSpacing: -0.3,
                                }}>Reviews</Text>
                        <ReviewSection />
                    </View>
                </View>
            </View>
            )
      } else if (currentStep === 2) {
        return(
            <View style={{gap: 20}}>
                <View style={{gap: 14}}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>{name}</Text>
                        <Text style={styles.categoryText}>{tags.join(', ')}</Text>
                    </View>
                    <View style={{height: 1, backgroundColor: '#E7EFFF'}} />
                    <Text style={{
                        color: '#7F7F7F',
                        fontFamily: theme.font,
                        fontSize: 14,
                        fontWeight: '400',
                        lineHeight: 17.5,
                        textTransform: 'uppercase'
                    }}>Appointment Details</Text>
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Start Date</Text>
                    <DatePickerInput onDateChange={()=>{}} />
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Time</Text>
                    <CustomRadioButton SegmentedControl options={[{ label: '7:00  PM', value: '7:00  PM' }, { label: '7:30  PM', value: '7:30  PM' }, { label: '8:00  PM', value: '8:00  PM' }]} selectedOption={'7:00  PM'} onOptionSelect={()=>{}} layout='row' />
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Select Duration</Text>
                    <Dropdown options={['30 minutes', '45 minutes', '1 hour']} selectedValue='30 minutes' onValueChange={()=>{}} />
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Select Person</Text>
                    <Dropdown options={['Myself', 'Person 2', 'Person 3']} selectedValue='Myself' onValueChange={()=>{}} />
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Select Package</Text>
                    <CustomRadioButton options={[{ label: '1 Session', value: '1 Session' }, { label: '5 Session', value: '5 Session' }]} selectedOption={'1 Session'} onOptionSelect={()=>{}} subInfo={[['20 RS', '/30 mins'], ['200 RS', '/30 mins']]} />
                </View>
            </View>
        )
      }
    }

    render() {
        const { currentStep } = this.state;
        const isLastStep = currentStep === 2;

        return (
            <ScreenWrapper profileImage profileImageUrl={this.props.route.params.imageUrl} heroImage heroImagesUrls={['https://snworksceo.imgix.net/cav/8d443aec-2090-4e9e-8793-6b95d830d89f.sized-1000x1000.JPG?w=1000']} floatingBtn floatingBtnProps={[{
                label: isLastStep ? 'Next' : 'Next',
                onPress: this.handleNextPress
            }]} rightElement={
                <View style={{padding: 10, borderRadius: 57,borderWidth: 1, borderColor: '#E6E6E6', backgroundColor: '#FFF'}}>
                <ShareIcon/>
                </View>
            } childrenContainerStyle={{paddingHorizontal: 24}}>
                {this.renderStep()}
            </ScreenWrapper>
        );
    }
}
    export default TrainerProfile;
    
    const styles = StyleSheet.create({
        headerContainer: {
            gap: 2,
            marginTop: 24,
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleText: {
            color: '#000',
            fontFamily: 'Inter',
            fontSize: 18,
            fontWeight: 600,
        },
        categoryText: {
            color: '#797979',
            fontFamily: 'Inter',
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 9
        },
        infoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 36,
            alignItems: 'center',
            marginTop: 24,
        },
        agendaContainer: {
            gap: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        agendaTitle:{
            color: '#797979',
            fontFamily: theme.font,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 18,
        },
        agendaTime:{
            color: '#000',
            fontFamily: theme.font,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 18,
        },
    });