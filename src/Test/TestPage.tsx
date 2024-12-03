import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomTextInput from '../Common/CustomTextInput';
import ModalDropdown from '../Common/ModalDropdown';
import Dropdown from '../Common/Dropdown';
// import ModalDropdown from '../Common/ModalDropdown';

interface AppState {
    selectedOption: string;
}

export class TestPage extends Component<{}, AppState>{
    constructor(props: {}){
        super(props);
        this.state = {
            selectedOption: '',
        };
    }

    handleValueChange = (value: string) => {
        this.setState({selectedOption: value});
    };

    render() {
        const {selectedOption} = this.state;
        const options = ['Option1', 'Option2', 'Option3', 'Option4'];
        return (
        <View style={styles.container}>
            <CustomTextInput label='UserName' placeholder='Enter your username' variant="rounded" value="" onChangeText={(text) => console.log(text)} />
            <ModalDropdown
                options={options}
                selectedValue={selectedOption}
                onValueChange={this.handleValueChange}
            />
            {selectedOption ? (
                <Text style={styles.selectedText}>
                    You selected: {selectedOption}
                </Text>
            ) : (
                <Text style={styles.placeholderText}>Please select an option</Text>
            )}
            <View style={{marginHorizontal: 10}}>
                <Dropdown
                    options={options}
                    selectedValue={this.state.selectedOption}
                    onValueChange={this.handleValueChange}
                />
                <Text>Hello</Text>
            </View>
        </View>
        )
    }
}

export default TestPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    selectedText: {
        marginTop: 20,
        fontSize: 16,
        color: 'green',
    },
    placeholderText: {
        marginTop: 20,
        fontSize: 16,
        color: '#888',
    },
})