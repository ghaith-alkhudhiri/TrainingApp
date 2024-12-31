import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import Accordion from '../Common/Accordion';
import CustomerServiceLine from '../Assets/Icons/CustomerServiceLine';
import WhatsappIcon from '../Assets/Icons/WhatsappIcon';
import GlobalIcon from '../Assets/Icons/GlobalIcon';
import TiktokIcon from '../Assets/Icons/TiktokIcon';
import InstagramIcon from '../Assets/Icons/InstagramIcon';
import TwitterIcon from '../Assets/Icons/TwitterIcon';

class ContactUs extends Component {
    render() {
        const items = [
            {
                title: "Customer Service",
                content: (
                    <Text>
                        +966 12 345 6789
                    </Text>
                ),
                icon: <CustomerServiceLine />
            },
            {
                title: "WhatsApp",
                content: (
                <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/966123456789')}>
                    <Text style={styles.linkText}>Chat with us on WhatsApp</Text>
                </TouchableOpacity>
                ),
                icon: <WhatsappIcon />
            },
            {
                title: "Website",
                content: (
                    <Text>
                        https://ghaith.com
                    </Text>
                ),
                icon: <GlobalIcon />
            },
            {
                title: "TikTok",
                content: (
                    <Text>
                        https://www.tiktok.com/@username
                    </Text>
                ),
                icon: <TiktokIcon />
            },
            {
                title: "Instagram",
                content: (
                    <Text>
                        https://www.instagram.com/@username
                    </Text>
                ),
                icon: <InstagramIcon />
            },
            {
                title: "Twitter",
                content: (
                    <Text>
                        https://www.twitter.com/@username
                    </Text>
                ),
                icon: <TwitterIcon />
            }
        ]
        return (
            <ScreenWrapper title="Contact us">
                <Accordion items={items} />
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
    },
    linkText: {
        color: "#797979",
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 18
    }
});

export default ContactUs;