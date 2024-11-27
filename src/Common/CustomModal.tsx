import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, ScrollView } from 'react-native';

export interface Action {
    text: string;
    onPress: () => void;
    style: 'primary' | 'secondary' | 'outline';
}
  

interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children?: React.ReactNode;
    actions: Action[];
    closeIcon?: React.ReactNode;
    animationType?: 'none' | 'slide' | 'fade';
    options?: string[];
    onSelectOption?: (option: string) => void;
}

interface CustomModalState {
    visible: boolean;
}

class CustomModal extends React.Component<CustomModalProps, CustomModalState> {
    constructor(props: CustomModalProps) {
        super(props);
        this.state = {
        visible: props.visible,
        };
    }

    componentDidUpdate(prevProps: CustomModalProps) {
        if (prevProps.visible !== this.props.visible) {
        this.setState({ visible: this.props.visible });
        }
    }

    render() {
        const { onClose, title, description, children, actions, closeIcon, animationType, options, onSelectOption } = this.props;
        const { visible } = this.state;

        return (
            <Modal
                transparent
                animationType={animationType ? animationType : "none"}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                  <View>
                    <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
                    {closeIcon ? closeIcon : <Text style={styles.defaultCloseIcon}>✕</Text>}
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.title}>{title}</Text>
                    {description && <Text style={styles.description}>{description}</Text>}
                    {options && (
                      <ScrollView style={styles.optionsContainer}>
                        {options.map((option, index) => (
                          <TouchableOpacity key={index} onPress={() => onSelectOption?.(option)} style={styles.option}>
                            <Text style={styles.optionText}>{option}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    )}
                    {children}
                    <View style={styles.actionsContainer}>
                    {actions.map((action, index) => (
                        <TouchableOpacity
                        key={index}
                        onPress={action.onPress}
                        style={[
                            styles.button,
                            action.style === 'primary' && styles.primaryButton,
                            action.style === 'secondary' && styles.secondaryButton,
                            action.style === 'outline' && styles.outlineButton,
                        ]}
                        >
                        <Text
                            style={[
                            styles.buttonText,
                            action.style === 'outline' && styles.outlineButtonText,
                            ]}
                        >
                            {action.text}
                        </Text>
                        </TouchableOpacity>
                    ))}
                    </View>
                  </View>
                </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    paddingVertical: 15,
    paddingHorizontal: 21,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    gap: 13,
  },
  closeIcon: {
    alignSelf: 'flex-end'
  },
  defaultCloseIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A7A7A7',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: -0.3,
    fontFamily: 'Inter',
  },
  description: {
    fontSize: 13,
    marginTop: 5,
    textAlign: 'justify',
    color: '#797979',
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Inter',
  },
  optionsContainer: {
    maxHeight: 200,
    marginBottom: 20,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  optionText: {
    fontSize: 16,
    fontFamily: 'Inter',
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: 13,
    gap: 9,
  },
  button: {
    paddingVertical: 11,
    borderRadius: 7,
  },
  primaryButton: {
    backgroundColor: '#246BFD',
    flex: 1,
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: '#8E8E8E',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderColor: '#246BFD',
    borderWidth: 2,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F4F6F9',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.3,
    fontFamily: 'Inter',
  },
  outlineButtonText: {
    color: '#246BFD',
  },
});

export default CustomModal;