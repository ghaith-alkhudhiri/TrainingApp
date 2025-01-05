import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ScreenWrapper from '../Layout/ScreenWrapper';
import CustomRadioButton from '../Common/CustomRadioButton';
import CustomTextInput from '../Common/CustomTextInput';

interface Props {}
interface State {
    isDeleting: boolean;
    selectedReason: string;
}

class DeleteAccountForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isDeleting: false,
            selectedReason: '',
        };
    }

    handleDeleteAccount = () => {
        const { selectedReason } = this.state;

        if(!selectedReason){
            alert("Please select a reason before deleting your account.");
            return;
        }

        this.setState({ isDeleting: true });
        // Add your delete account logic here
        console.log("Deleting account for reason: ", selectedReason);
    };

    handleOptionSelect = (option: string) => {
        this.setState({ selectedReason: option });
    }

    render() {
        const {isDeleting, selectedReason} = this.state;
        return (
            <ScreenWrapper title="Delete Account" style={styles.container} floatingBtn floatingBtnProps={[{label: "Next", onPress: () => console.log("Next")}]}>
                <View style={styles.formControlContainer}>
                    <Text style={styles.text}>Please select the reason for deleting account</Text>
                    <CustomRadioButton
                        options={[
                            { label: "Illness Or Injury", value: "illness" },
                            { label: "Personal Reasons", value: "personalReasons" },
                            { label: "Family Emergency", value: "familyEmergency" },
                            { label: "Other", value: "other" }, 
                        ]}
                        selectedOption={selectedReason}
                        onOptionSelect={this.handleOptionSelect}
                    />
                </View>
                <View style={styles.formControlContainer}>
                    <Text style={styles.text}>Write "DELETE" to proceed With the deletion</Text>
                    <CustomTextInput placeholder="Write DELETE" />
                </View>
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
    text: {
        fontSize: 14,
        fontWeight: 600,
        color: "#000",
        fontFamily: "Inter",
    },
    formControlContainer: {
        gap: 10,
    }
});

export default DeleteAccountForm;