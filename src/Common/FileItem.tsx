import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import DocumentTextIcon from '../Assets/Icons/DocumentTextIcon';
import TrashIcon from '../Assets/Icons/TrashIcon';

interface FileItemProps {
    file: any;
    onOpenFile: (file: any) => void;
    onRemoveFile: () => void;
}

export class FileItem extends Component<FileItemProps> {
  render() {
    const {file, onOpenFile, onRemoveFile} = this.props;
    return (
        <View style={styles.fileItemContainer}>
            <View style={styles.fileInfoContainer}>
                <DocumentTextIcon />
                <Pressable onPress={() => onOpenFile(file)} style={styles.fileItem}>
                    <Text style={styles.fileName}>{file.name.length > 80 ? file.name.substring(0, 80) + '...' : file.name}</Text>
                    <Text>200 KB</Text>
                </Pressable>
                <Pressable onPress={onRemoveFile} style={styles.removeButton}>
                    <TrashIcon />
                </Pressable>
            </View>
        </View>
    )
  }
}

export default FileItem;

const styles = StyleSheet.create({
    fileItemContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#CACACA',
        borderWidth: 1,
        padding: 16,
        borderRadius: 6,
        width: '100%',
      },
      fileInfoContainer: {
        flexDirection: 'row',
        gap: 12,
      },
      fileItem: {
        flex: 1,
      },
      fileName: {
        color: '#2c3e50',
        fontSize: 14,
      },
      removeButton: {
        // borderRadius: 5,
        // padding: 5,
      },
      removeButtonText: {
      },

});