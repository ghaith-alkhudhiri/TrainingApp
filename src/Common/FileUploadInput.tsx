import { Platform, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react';
import {FilePicker, PickFilesResult, PickFilesOptions} from '@capawesome/capacitor-file-picker'
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
// import FileUploadIcon from '../../assets/icons/FileUploadIcon';
import FileItem from './FileItem';
import FileUploadIcon from '../Assets/Icons/FileUploadIcon';
interface FileUploadInputProps {
    onFileSelected: (files: PickFilesResult['files']) => void;
}

interface FileUploadInputState {
  selectedFiles: PickFilesResult['files'];
}

export class FileUploadInput extends Component<FileUploadInputProps, FileUploadInputState> {

  constructor(props: FileUploadInputProps){
    super(props);
    this.state = {
      selectedFiles: [],
    }
  }
    
  pickFiles = async () => {
      try {
          const options: PickFilesOptions = {
              types: ['image/*', 'application/pdf'],
          }
          const result = await FilePicker.pickFiles(options);
          this.setState({selectedFiles: result.files});
          this.props.onFileSelected(result.files);
      } catch (error) {
          console.error('Error picking files', error);
      }
  }

  openFile = async (file: any) => {
    try {
      if(Platform.OS === 'web'){
        if(file.blob){
          const url = URL.createObjectURL(file.blob);
          window.open(url, '_blank');
        }else {
          console.error('No blob available for file');
        }
      }else {
        if(file.path){
          await FileOpener.openFile({
            path: file.path,
          });
        }else  {
          console.error('No path available for file');
        }
      }
      
    } catch (error) {
      console.error('Error opening file', error);
    }
  }

  removeFile = (index: number) => {
    const { selectedFiles } = this.state;
    selectedFiles.splice(index, 1);
    this.setState({selectedFiles});
    this.props.onFileSelected(selectedFiles);
  }

  render() {
    return (
        <View style={styles.container}>
            {this.state.selectedFiles.length === 0 && (
              <Pressable onPress={this.pickFiles} style={styles.button}>
                {/* <Text style={styles.buttonText}>Pick Files</Text> */}
                <View style={styles.btnContentContainer}>
                  <View style={styles.uploadIconContainer}>
                    <FileUploadIcon />
                  </View>
                  <View style={styles.uploadGuide}>
                    <Text><Text style={styles.clickToUpload}>Click to Upload</Text> <Text style={styles.dragAndDrop}>or drag and drop</Text></Text>
                    <Text>(Max. File size: 25 MB)</Text>
                  </View>
                </View>
              </Pressable>
            )}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.fileList}>
              {this.state.selectedFiles.map((file, index) => (
                // <View key={index} style={styles.fileItemContainer}>
                //   <Pressable onPress={() => this.openFile(file)} style={styles.fileItem}>
                //     <Text style={styles.fileName}>{file.name.length > 15 ? file.name.substring(0, 15) + '...' : file.name}</Text>
                //   </Pressable>
                //   <Pressable onPress={() => this.removeFile(index)} style={styles.removeButton}>
                //     <Text style={styles.removeButtonText}>X</Text>
                //   </Pressable>
                // </View>
                <FileItem
                  key={index}
                  file={file}
                  onOpenFile={this.openFile}
                  onRemoveFile={() => this.removeFile(index)}
                />
              ))}
            </ScrollView>
        </View>

    )
  }
}

export default FileUploadInput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        borderRadius: 6,
        width: '100%',
        borderWidth: 1,
        borderColor: '#CACACA',
        borderStyle: 'dashed'
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
      },
      fileList: {
        flex: 1,
        alignItems: 'stretch',
        gap: 10,
      },
      fileItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10,
        borderRadius: 5,
      },
      fileItem: {
        flex: 1,
      },
      fileName: {
        color: '#2c3e50',
        fontSize: 14,
        maxWidth: 150
      },
      removeButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 5,
        padding: 5,
      },
      removeButtonText: {
        color: '#ffffff',
        fontSize: 12,
      },
      btnContentContainer: {
        gap: 12,
        alignItems: 'center'
      },
      uploadIconContainer: {
        height: 44,
        width: 44,
        padding: 9,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#F5F5F5',
        borderRadius: 50,
      },
      uploadGuide: {
        alignItems: 'center',
        gap: 4,
      },
      clickToUpload: {
        color: '#246BFD',
        fontSize: 16,
        fontWeight: 500,
      },
      dragAndDrop: {
        color: '#353535',
        fontSize: 16,
        fontWeight: 400,
      }
})