import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomButton from '../Common/CustomButton';
import ShareIcon from '../Assets/Icons/ShareIcon';
import CustomTabs from '../Common/CustomTabs';
import LineDividier from '../Common/LineDivider';
import CarIcon from '../Assets/Icons/CarIcon';
import ShirtIcon from '../Assets/Icons/ShirtIcon';
import ChildStroller from '../Assets/Icons/ChildStroller';
import SwimIcon from '../Assets/Icons/SwimIcon';
import WifiIcon from '../Assets/Icons/WifiIcon';
import CafeIcon from '../Assets/Icons/CafeIcon';
import LockerIcon from '../Assets/Icons/LockerIcon';
import ShowerHead from '../Assets/Icons/ShowerHead';
import InfoCard from '../Classes/InfoCard';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Google Map Container Style
const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 25.276987, // Replace with the actual latitude
    lng: 55.296249, // Replace with the actual longitude
};

function MapComponent(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCTbjKtgndrHSoFzipZpk1NuoW0QxBgV3s'
    });

    if (!isLoaded) {
        return <Text>Loading Map...</Text>;
    }

    return (
    <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
    />
    );
}

class AboutGym extends Component {
    render() {
        const facilities = [
            {
                icon: <CarIcon />,
                label: "Car Parking",
                value: "",
            },
            {
                icon: <ShirtIcon />,
                label: "Change Room",
                value: "",
            },
            {
                icon: <ChildStroller />,
                label: "Child Area",
                value: "",
            },
            {
                icon: <SwimIcon />,
                label: "Jacuzzi",
                value: "",
            },
            {
                icon: <WifiIcon />,
                label: "Wi-Fi",
                value: "",
            },
            {
                icon: <CafeIcon />,
                label: "Cafe",
                value: "",
            },
            {
                icon: <LockerIcon />,
                label: "Locker",
                value: "",
            },
            {
                icon: <ShowerHead />,
                label: "Shower",
                value: "",
            }
        ];

        const tabs = [
            {
                key: "About",
                label: "About",
                content: (
                    <View style={styles.aboutContainer}>
                        <Text style={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae mi tristique, laoreet nibh sed, aliquet arcu. Read more</Text>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Facilities</Text>
                            <LineDividier />
                            <View style={styles.facilitiesContainer}>
                                {facilities.map((facility, index) => (
                                    <View style={styles.infoCard}>
                                        <InfoCard key={index} icon={facility.icon} value={facility.value} label={facility.label} />
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Address</Text>
                            <LineDividier />
                            <Text style={styles.locationDetailsText}>Location details</Text>
                            <View style={styles.mapContainer}>
                                <MapComponent />
                            </View>
                        </View>
                    </View>
                )
            },
            {
                key: "Trainers",
                label: "Trainers",
                content: (
                    <View>
                        <Text>Trainers</Text>
                    </View>
                )
            },
            {
                key: "Gallery",
                label: "Gallery",
                content: (
                    <View>
                        <Text>Gallery</Text>
                    </View>
                )
            },
            {
                key: "Review",
                label: "Review",
                content: (
                    <View>
                        <Text>Review</Text>
                    </View>
                )
            }
        ]
        return (
            <ScreenWrapper 
                heroImage
                childrenContainerStyle={{paddingHorizontal: 0}}
                rightElement={<CustomButton 
                    styleType='rounded' 
                    icon={<ShareIcon />}
                    onPress={() => console.log("Share Button")}    
                    
                />
            }
            heroImagesUrls={["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8fHww", "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg="]}
            >
                <View style={styles.gymInfo}>
                    <Text style={styles.gymNameText}>GymName</Text>
                    <Text style={styles.gymLocationText}>Location of gym</Text>
                </View>
                <CustomTabs
                    tabs={tabs}
                    styleType='underline'
                    tabBarStyle={{paddingHorizontal: 0}}
                    containerStyle={{gap: 0}}
                />
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
    gymInfo: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        gap: 5,
    },
    gymNameText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 18,
        fontWeight: 600,
    },
    gymLocationText: {
        color: "#000",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 17,
    },
    aboutContainer: {
        paddingVertical: 16,
        paddingHorizontal: 23,
        gap: 19
    },
    aboutText: {
        color: "#797979",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
    facilitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
    },
    infoCard: {
        width: '22%',
    },
    sectionTitle: {
        color: "#000",
        fontFamily: "Inter",
        fontWeight: 600
    },
    section: {

    },
    locationDetailsText: {
        color: "#797979",
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 18,
    },
    mapContainer: {
        width: "100%",
        height: 300,
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
    }
});

export default AboutGym;