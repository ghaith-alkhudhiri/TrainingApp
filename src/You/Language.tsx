import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomRadioButton from '../Common/CustomRadioButton';

interface Props {}

interface State {
    language: string;
}

class Language extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            language: 'English'
        };
    }

    render() {
        return (
            <ScreenWrapper title="Language" style={styles.container}>
                <CustomRadioButton 
                    options={[
                        { label: "Arabic", value: "ar" },
                        { label: "English", value: "en" },
                    ]}
                    optionStyle={{ justifyContent: 'space-between', flexDirection: "row-reverse", paddingVertical: 10, paddingHorizontal: 16, }}
                    selectedOption={this.state.language}
                    onOptionSelect={(language) => this.setState({ language })}
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
    },
    text: {
        fontSize: 20,
    },
});

export default Language;