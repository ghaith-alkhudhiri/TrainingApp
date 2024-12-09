import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ScreenWrapper from '../Layout/ScreenWrapper'
import DocumentIcon from '../Assets/Icons/DocumentIcon';
import { FileOpener } from '@capawesome-team/capacitor-file-opener';
import { isWeb } from '../Utils/PlatformUtil';


interface Props {
  navigation: any;
  route: any;
}

export class DocumentPage extends Component<Props> {
  viewDocument = async (url: string) => {
    try {
      if (isWeb) {
        // For web, create a Blob URL
      
        window.open(url, '_blank');
      } else {
        // For mobile, use FileOpene
        console.log("Inside mobile", url);
        await FileOpener.openFile({
          path: url,
        });
      }
    } catch (error) {
      console.error('Error opening file', error);
    }
  }
  render() {
    const { route } = this.props;
    const {title, description, document } = route.params;

    return (
      <ScreenWrapper title="Useful Document">
        <Pressable style={styles.container} onPress={() => this.viewDocument(document)}>
          <DocumentIcon />
          <View style={styles.documentInfoContainer}>
            <Text style={styles.documentTitle}>{title}</Text>
            <Text style={styles.documentDescription}>{description}</Text>
          </View>
        </Pressable>
      </ScreenWrapper>
    )
  }
}

export default DocumentPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    alignItems: 'center',
    backgroundColor: '#FFF',
    shadowColor: 'rgba(0,39,138,0.10)',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 7.3,
    elevation: 7,
  },
  documentInfoContainer: {
    
  },
  documentTitle: {
    color: '#000',
    fontFamily: "Inter",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 18.75,
  },
  documentDescription: {
    color: '#ABABAB',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 12.5,
  }

});