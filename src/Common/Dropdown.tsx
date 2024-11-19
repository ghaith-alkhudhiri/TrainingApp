import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface DropdownProps {
  options: string[];
  selectedValue?: string;
  onValueChange: (value: string) => void;
}

interface DropdownState {
  isOpen: boolean;
  selectedValue: string;
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isOpen: false,
      selectedValue: props.selectedValue || '',
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  selectOption = (value: string) => {
    this.setState({ selectedValue: value, isOpen: false });
    this.props.onValueChange(value);
  };

  render() {
    const { options } = this.props;
    const { isOpen, selectedValue } = this.state;

    return (
      <View>
        <TouchableOpacity onPress={this.toggleDropdown} style={styles.selected}>
          <Text>{selectedValue || 'Select an option'}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={isOpen}
          animationType="fade"
          onRequestClose={this.toggleDropdown}
        >
          <TouchableOpacity style={styles.modalOverlay} onPress={this.toggleDropdown}>
            <View style={styles.modalContent}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => this.selectOption(option)}
                  style={styles.option}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Dropdown;
