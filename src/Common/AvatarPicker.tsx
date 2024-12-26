import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { Component } from 'react'
// import PersonIcon from '../../assets/icons/PersonIcon';
// import PenIcon from '../../assets/icons/PenIcon';
import { Camera, CameraResultType, CameraSource} from '@capacitor/camera'
import PersonIcon from '../Assets/Icons/PersonIcon';
import PenIcon from '../Assets/Icons/PenIcon';

interface AvatarPickerProps {
    containerStyle?: ViewStyle;
    editContainerStyle?: ViewStyle;
    isPicker?: boolean;
    imageUri?: string;
}

interface AvatarPickerState {
    selectedImage: string | undefined;
}

export class AvatarPicker extends Component<AvatarPickerProps, AvatarPickerState> {
    constructor(props: any){
        super(props);
        this.state = {
            selectedImage: undefined,
        };
    }

    handlePickImage = async () => {
        try {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.Uri,
                source: 'PHOTOS' as CameraSource,
                quality: 100,
            });
            this.setState({ selectedImage: image.webPath})
        } catch (error) {
            console.error(error);
        }
    }
  render() {
    const {containerStyle, editContainerStyle, imageUri, isPicker} = this.props;
    const { selectedImage} = this.state;
    const displayImage = isPicker ? selectedImage: imageUri;
    return (
      <View style={[styles.container, containerStyle]}>
        {displayImage ? (
            <Image source={{uri: displayImage}} style={styles.image} />
        ): (
            <PersonIcon />
        )}
        {isPicker && (
            <TouchableOpacity style={[styles.editContainer, editContainerStyle]} onPress={this.handlePickImage}>
                <PenIcon />
            </TouchableOpacity>
        )}
      </View>
    )
  }
}

export default AvatarPicker;

const styles = StyleSheet.create({
    container: {
        width: 121,
        height: 121,
        borderRadius: 60.5,
        backgroundColor: '#DBEAFE',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    editContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#246BFD',
        padding: 10,
        borderRadius: 50,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 60.5,
    }
})