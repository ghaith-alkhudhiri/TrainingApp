import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

interface State {
    notificationsEnabled: boolean;
}

class Settings extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            notificationsEnabled: false,
        };
    }

    toggleNotifications = () => {
        this.setState({ notificationsEnabled: !this.state.notificationsEnabled });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Settings</Text>
                <View style={styles.setting}>
                    <Text style={styles.settingText}>Enable Notifications</Text>
                    <Switch
                        value={this.state.notificationsEnabled}
                        onValueChange={this.toggleNotifications}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    setting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    settingText: {
        fontSize: 18,
    },
});

export default Settings;