import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ClassesSettings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Classes Settings</Text>
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

export default ClassesSettings;