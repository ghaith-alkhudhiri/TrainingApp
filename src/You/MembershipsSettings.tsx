import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MembershipsSettingsProps {}

interface MembershipsSettingsState {}

class MembershipsSettings extends Component<MembershipsSettingsProps, MembershipsSettingsState> {
    constructor(props: MembershipsSettingsProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Memberships Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MembershipsSettings;