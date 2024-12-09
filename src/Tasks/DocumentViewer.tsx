import { Component } from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import React from "react";
interface DocumentViewerProps {
    pdfUrl: string;
}

class DocumentViewer extends Component<DocumentViewerProps>{
    render(){
        const {pdfUrl} = this.props;

        return (
            <WebView
                style={styles.webview}
                source={{uri: pdfUrl}}
                startInLoadingState={true}
                javaScriptEnabled={true}
                scalesPageToFit={true}
            />
        )
    }
}

const styles = StyleSheet.create({
    webview: {
        flex: 1,
    },
});

export default DocumentViewer;