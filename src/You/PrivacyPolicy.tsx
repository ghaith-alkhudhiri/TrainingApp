import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';

class PrivacyPolicy extends Component {
    render() {
        const privacyData = [
            {
                title: "Types data we collect",
                text: "We collect data in the following ways: Data you provide us. This includes your email address, and any other information you provide us.",
            },
            {
                title: "Use of your personal data",
                text: "We use your personal data to: Provide our service to you. This includes for example registering your account; providing you with other products and services that you have requested; providing you with promotional items at your request and communicating with you in relation to those products and services; communicating and interacting with you; and notifying you of changes to any services.",
            },
            {
                title: "Disclosure of your personal data",
                text: "disclosure for legal reasons. We may disclose your personal data if required by law or if we, as a company, reasonably believe that disclosure is necessary to protect our company’s rights and/or to comply with a judicial proceeding, court order or legal process. However, we will do what we can to ensure that your privacy rights continue to be protected.",
            },
            {
                title: "Membership Policy",
                text: "Membership is required to access our services. When you register and become a member, you agree to provide accurate and complete information about yourself. If you provide any information that is inaccurate, not current, or incomplete, or if we have reasonable grounds to suspect that such information is inaccurate, not current, or incomplete, we may suspend or terminate your membership and refuse any and all current or future use of our services.",
            },
            {
                title: "Membership Policy",
                text: "Membership is required to access our services. When you register and become a member, you agree to provide accurate and complete information about yourself. If you provide any information that is inaccurate, not current, or incomplete, or if we have reasonable grounds to suspect that such information is inaccurate, not current, or incomplete, we may suspend or terminate your membership and refuse any and all current or future use of our services.",
            },
            {
                title: "Membership Policy",
                text: "Membership is required to access our services. When you register and become a member, you agree to provide accurate and complete information about yourself. If you provide any information that is inaccurate, not current, or incomplete, or if we have reasonable grounds to suspect that such information is inaccurate, not current, or incomplete, we may suspend or terminate your membership and refuse any and all current or future use of our services.",
            },
            {
                title: "Membership Policy",
                text: "Membership is required to access our services. When you register and become a member, you agree to provide accurate and complete information about yourself. If you provide any information that is inaccurate, not current, or incomplete, or if we have reasonable grounds to suspect that such information is inaccurate, not current, or incomplete, we may suspend or terminate your membership and refuse any and all current or future use of our services.",
            },
        ]
        return (
            <ScreenWrapper title="Privacy Policy">
                <View style={styles.container}>
                    {privacyData.map((data, index) => (
                        <View style={styles.privacySectionContainer} key={index}>
                            <Text style={styles.header}>{data.title}</Text>
                            <Text style={styles.text}>{data.text}</Text>
                        </View>
                    ))}
                </View>
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        gap: 16,
    },
    privacySectionContainer: {
        gap: 9
    },
    header: {
        fontSize: 15,
        color: "#0165FC",
        fontFamily: "Inter",
        fontWeight: 'bold',
        lineHeight: 18.75,
    },
    text: {
        color: "#797979",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: 18,
    },
});

export default PrivacyPolicy;