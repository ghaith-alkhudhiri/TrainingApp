import { Share, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../../Layout/ScreenWrapper';
import ClassSections from '../../Classes/ClassSections';
import InfoCard from '../../Classes/InfoCard';
import CalendarIcon from '../../Assets/Icons/CalendarIcon';
import ClockIcon from '../../Assets/Icons/ClockIcon';
import LocationIcon from '../../Assets/Icons/LocationIcon';
import StopWatchFilled from '../../Assets/Icons/StopWatchFilled';
import { NavProps } from '../../types';
import ShareIcon from '../../Assets/Icons/ShareIcon';
import theme from '../../Constants/theme';
import Dropdown from '../../Common/Dropdown';
import CustomRadioButton from '../../Common/CustomRadioButton';

interface Props {
    route: {
        params: {
          imageUrl: string;
          title: string;
          tags: string[];
          time: string;
          date: string;
          CTA?: string;
        };
      };
}

interface State {
    showFullText: boolean;
    currentStep: number;
}

type DetailsProps = Props & NavProps;

export class EventDetails extends Component<DetailsProps, State> {
    constructor(props: DetailsProps) {
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
            // Handle form submission here
            console.log('Form submitted:', this.state);
            // this.props.navigation.navigate('Review');      
        }
    };
    
    renderStep = () => {
    const { imageUrl, title, tags, time, date, CTA } = this.props.route.params;
    const { currentStep, showFullText } = this.state;
    const infoCards = [
        {
            icon: <CalendarIcon height={24} width={24} filled />,
            value: "24th",
            label: "June"
        },
        {
            icon: <ClockIcon width={34} height={33} />,
            value: "4:00",
            label: "PM"
        },
        {
            icon: <StopWatchFilled />,
            value: "2",
            label: "Hour"
        },
        {
            icon: <LocationIcon />,
            value: "Bahrain",
            label: 'Manama'
        }
        
    ];
    const handleReadMore = () => {
        this.setState({ showFullText: !showFullText });
    };

    if (currentStep === 1) {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.categoryText}>{tags.join(', ')}</Text>
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
                            }}>About the event</Text>
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
                                }}>Event Agenda</Text>
                            <View style={{height: 1, backgroundColor: '#E1E1E1'}} />
                            <View style={{gap: 10}}>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Registration</Text>
                                    <Text style={styles.agendaTime}>04:00 - 04:30</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Sharing Results</Text>
                                    <Text style={styles.agendaTime}>04:30 - 05:30</Text>
                                </View>
                                <View style={styles.agendaContainer}>
                                    <Text style={styles.agendaTitle}>Giveaways and rewords</Text>
                                    <Text style={styles.agendaTime}>05:30 - 06:00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            )
      } else if (currentStep === 2) {
        return(
            <View style={{gap: 20}}>
                <View style={{gap: 14}}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>{title}</Text>
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
                    }}>Event Details</Text>
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
                    }}>Select Group</Text>
                    <CustomRadioButton SegmentedControl options={[{ label: 'Group A', value: 'Group A' }, { label: 'Group B', value: 'Group B' }]} selectedOption={'Group A'} onOptionSelect={()=>{}} layout='row' />
                </View>
                <View style={{gap: 19}}>
                    <Text style={{
                        color: '#000',
                        fontFamily: theme.font,
                        fontSize: 18,
                        fontWeight: '600',
                        letterSpacing: -0.3,
                    }}>Tickets</Text>
                    <CustomRadioButton options={[{ label: 'Regular Seat', value: 'Regular Seat' }, { label: 'VIP Seat', value: 'VIP Seat' }]} selectedOption={'Regular Seat'} onOptionSelect={()=>{}} subInfo={[['100 RS', '20 seats left'], ['500 RS', '10 seats left']]} />
                </View>
            </View>
        )
      }
    }

    render() {
        const { currentStep } = this.state;
        const isLastStep = currentStep === 2;
        const { imageUrl, title, tags, time, date, CTA } = this.props.route.params;

        return (
            <ScreenWrapper heroImage heroImagesUrls={[imageUrl]} floatingBtn floatingBtnProps={[{
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
    export default EventDetails;
    
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