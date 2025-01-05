import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import Switch from '../Common/Switch';

interface Section {
    title: string;
    content: {
        setting: string;
        enabled: boolean;
    }[];
}

interface State {
    sections: Section[];
}

class NotificationsSettings extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            sections: [
                {
                    title: "Common",
                    content: [
                        { setting: "General Notification", enabled: true },
                        { setting: "Sound", enabled: true },
                        { setting: "Vibrate", enabled: false },
                    ],
                },
                {
                    title: "System & services update",
                    content: [
                        { setting: "App updates", enabled: false },
                        { setting: "Bill Reminder", enabled: true },
                        { setting: "Promotion", enabled: false },
                        { setting: "Discount Available", enabled: true },
                        { setting: "Payment Request", enabled: true },
                    ],
                },
                {
                    title: "Others",
                    content: [
                        { setting: "New Classes Available", enabled: false },
                        { setting: "New Event Available", enabled: true },
                    ],
                },
            ],
        };
    }

    toggleSwitch = (sectionIndex: number, settingIndex: number) => {
        this.setState((prevState) => {
            // Create a deep copy of sections
            const updatedSections = prevState.sections.map((section, sIndex) => {
                if (sIndex === sectionIndex) {
                    return {
                        ...section,
                        content: section.content.map((setting, cIndex) => {
                            if (cIndex === settingIndex) {
                                return {
                                    ...setting,
                                    enabled: !setting.enabled,
                                };
                            }
                            return setting;
                        }),
                    };
                }
                return section;
            });
    
            return { sections: updatedSections };
        });
    };

    render() {
        const { sections } = this.state;
        // const sections = [
        //     {
        //         title: "Common",
        //         content: [
        //             {
        //                 setting: "General Notification",
        //                 enabled: true,
        //             },
        //             {
        //                 setting: "Sound",
        //                 enabled: true,
        //             },
        //             {
        //                 setting: "Vibrate",
        //                 enabled: false,
        //             }
        //         ]
        //     },
        //     {
        //         title: "System & services update",
        //         content: [
        //             {
        //                 setting: "App updates",
        //                 enabled: false,
        //             },
        //             {
        //                 setting: "Bill Reminder",
        //                 enabled: true,
        //             },
        //             {
        //                 setting: "Promotion",
        //                 enabled: false,
        //             },
        //             {
        //                 setting: "Discount Available",
        //                 enabled: true,
        //             },
        //             {
        //                 setting: "Payment Request",
        //                 enabled: true,
        //             }
        //         ]
        //     },
        //     {
        //         title: "Others",
        //         content: [
        //             {
        //                 setting: "New Classes Available",
        //                 enabled: false,
        //             },
        //             {
        //                 setting: "New Event Available",
        //                 enabled: true,
        //             }
        //         ]
        //     }
        // ]
        return (
            <ScreenWrapper title="Notification Settings">
                {sections.map((section, sectionIndex) => (
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>{section.title}</Text>
                            {section.content.map((setting, settingIndex) => (
                                <View key={settingIndex} style={styles.settingContainer}>
                                    <Text>{setting.setting}</Text>
                                    <Switch
                                        value={setting.enabled}
                                        onValueChange={() => this.toggleSwitch(sectionIndex, settingIndex)}
                                    />
                                </View>
                            ))}
                    </View>
                ))}
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    sectionTitle: {
        color: "#000",
        fontFamily: "Inter",
        fontWeight: 600,
        lineHeight: 18.75,
    },
    sectionContainer: {
        gap: 27,
    },
    settingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default NotificationsSettings;