import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { Component, ReactNode } from 'react'
import theme from '../Constants/theme';

interface CustomTabsProps {
    tabs: { key: string; label: string; content: ReactNode}[];
    containerStyle?: ViewStyle;
    tabBarStyle?:ViewStyle;
    tabStyle?:ViewStyle;
    activeTabStyle?:ViewStyle;
    tabTextStyle?:TextStyle;
    activeTabTextStyle?:TextStyle;
    tabContentStyle?:ViewStyle;
    styleType?: 'large' | 'small';
}

interface CustomTabsState {
    activeTab: string;
}

export class CustomTabs extends Component<CustomTabsProps, CustomTabsState> {

    static defaultProps = {
        styleType: 'large',
    };
    
    constructor(props: CustomTabsProps){
        super(props);
        this.state = {
            activeTab: props.tabs[0].key,
        };
    }

    setActiveTab = (key: string) => {
        this.setState({activeTab: key});
    }


    render() {
        const { tabs, containerStyle, tabBarStyle, tabStyle, activeTabStyle, tabTextStyle, activeTabTextStyle, tabContentStyle, styleType} = this.props;
        const { activeTab } = this.state;
        const activeContent = tabs.find(tab => tab.key === activeTab)?.content;

        const isLarge = styleType === 'large';
        const appliedStyles = isLarge ? largeStyles : smallStyles;

        return (
        <View style={[appliedStyles.container, containerStyle]}>
            <View style={[appliedStyles.tabBar, tabBarStyle]}>
                {tabs.map(tab => (
                    <Pressable
                        key={tab.key}
                        onPress={() => this.setActiveTab(tab.key)}
                        style={StyleSheet.flatten([
                            appliedStyles.tab,
                            tabStyle,
                            activeTab === tab.key && StyleSheet.flatten([appliedStyles.activeTab, activeTabStyle]),
                        ])}
                    >
                        <Text style={StyleSheet.flatten([
                            appliedStyles.tabText,
                            tabTextStyle,
                            activeTab === tab.key && StyleSheet.flatten([appliedStyles.activeTabText, activeTabTextStyle]),
                        ])}>{tab.label}</Text>
                    </Pressable>
                ))}
            </View>
            <View style={appliedStyles.tabContent}>
                {activeContent}
            </View>
        </View>
        )
    }
}

export default CustomTabs;

const largeStyles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        gap: 18,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#F1F4F8',
        padding: 4,
        borderRadius: 10,
        gap: 13,
    },
    tab: {
        paddingHorizontal: 55,
        paddingVertical: 11,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    activeTab: {
        backgroundColor: '#FFF',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: -2, height: -1},
        shadowOpacity: 0.03,
        shadowRadius: 4,
        elevation: 2,

    },
    activeTabText: {
        color: '#404B52',
    },
    tabText: {
        color: '#000',
        fontSize: 14,
    },
    tabContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const smallStyles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 22,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        padding: 2,
        borderRadius: 8,
        gap: 6,
    },
    tab: {
        borderRadius: 5,
        paddingHorizontal: 25,
        paddingVertical: 6,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#F1F5F9',
        width: 'auto',
        flex: 1,
    },
    activeTab: {
        backgroundColor: theme.primary,
        borderRadius: 5,
        width: 'auto',
        flex: 1,
    },
    activeTabText: {
        color: '#F1F5F9',
        fontWeight: '600',
        lineHeight: 17.5,
    },
    tabText: {
        color: theme.primary,
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: '400',
        lineHeight: 17,
    },
    tabContent: {
        flex: 1,
    },
})