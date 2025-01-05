import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import SearchInput from '../Common/SearchInput';
import CustomTabs from '../Common/CustomTabs';
import Accordion from '../Common/Accordion';

class HelpCenter extends Component {
    render() {
        const all = [
            {
                title: "What's Refund Policy?",
                content: (
                    <Text style={styles.accordionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis reiciendis corrupti mollitia itaque facere voluptas laudantium molestiae tempora qui suscipit neque laborum fuga adipisci consequatur, reprehenderit ducimus ea dolorem officiis.</Text>
                )
            },
            {
                title: "How to cancel my subscription?",
                content: (
                    <Text style={styles.accordionText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa facere id nisi, omnis sed tenetur minima nulla possimus amet. Nulla corporis quis optio quae eligendi soluta ullam saepe quia?
                    </Text>
                )
            },
            {
                title: "How to reset my password?",
                content: (
                    <Text style={styles.accordionText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates earum inventore repudiandae fuga consequatur possimus est soluta quos commodi adipisci voluptas, voluptatem voluptatum eius, harum expedita deserunt beatae fugiat!
                    </Text>
                )
            },
            {
                title: "How to enable reminders?",
                content: (
                    <Text style={styles.accordionText}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet delectus asperiores dolores nam repudiandae blanditiis nostrum natus illum ipsum et, totam quam alias voluptatum obcaecati molestiae! Quisquam eligendi officiis aliquam!
                    </Text>
                )
            },
            {
                title: "How to add family member?",
                content: (
                    <Text style={styles.accordionText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis aspernatur, quibusdam numquam expedita facilis molestiae, quos architecto maxime voluptatibus dolor dolores assumenda nostrum rerum eveniet sunt minima totam reiciendis eligendi!</Text>
                )
            },
            {
                title: "How to book class?",
                content: (
                    <Text style={styles.accordionText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam similique ab alias impedit magni, reiciendis distinctio, odit odio laborum est, consequuntur neque nemo architecto asperiores. Saepe cum eos doloribus tempore.</Text>
                )
            },
            {
                title: "Can I delete my account?",
                content: (
                    <Text style={styles.accordionText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At tenetur architecto officia sequi labore non praesentium temporibus, minima ducimus nihil iure voluptates officiis molestiae iusto reprehenderit vel placeat est eveniet.</Text>
                )
            },
            {
                title: "How can I change the language",
                content: (
                    <Text style={styles.accordionText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae nisi porro aliquam similique, excepturi iusto nihil, unde nemo quis molestiae quos, illo mollitia quaerat necessitatibus dolor qui ipsum magnam consequuntur.</Text>
                )
            }
        ]
        const tabs = [
                    {
                        key: 'all',
                        label: "All",
                        content: (
                            <Accordion items={all} />
                        )
                    },
                    {
                        key: 'general',
                        label: 'General',
                        content: (
                            <View>
                               <Text>Hello</Text>
                            </View>
                        )
                    },
                    {
                        key: 'services',
                        label: "Services",
                        content: (
                            <View>
                                
                            </View>
                        )
                    },
                    {
                        key: 'account',
                        label: "Account",
                        content: (
                            <View>
                                
                            </View>
                        )
                    },
                ];
        return (
            <ScreenWrapper title="Help Center" childrenContainerStyle={{paddingHorizontal: 0}}>
                <View style={styles.searchContainer}>
                    <SearchInput placeholder='Search Classes, Trainer'/>
                </View>
                <CustomTabs tabs={tabs} styleType='underline' tabBarStyle={{paddingHorizontal: 0}} />
            </ScreenWrapper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    searchContainer: {
        paddingHorizontal: 24,
    },
    accordionText: {
        color: "#797979",
        fontFamily: "Inter",
        fontWeight: 400,
        lineHeight: 18,
    }
});

export default HelpCenter;