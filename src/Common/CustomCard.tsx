import { Image, Pressable, StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native';
import React, { Component } from 'react';

interface CustomCardProps {
    imageURL?: string;
    title: string;
    description?: string;
    actionBtnText: string;
    onPress: () => void;
    actionBtnStyle?: ViewStyle;
    actionBtnTextStyle?: TextStyle;
}

export class CustomCard extends Component<CustomCardProps> {
  static defaultProps = {
    imageURL: 'https://via.placeholder.com/150',
    description: '',
    actionBtnStyle: {},
    actionBtnTextStyle: {},
  }

  render() {
    const { imageURL, title, description, actionBtnText, onPress, actionBtnStyle, actionBtnTextStyle } = this.props;
    return (
      <View style={styles.card}>
        <Image 
          source={{ uri: imageURL }}
          style={styles.image}
          resizeMode='cover'
        />
        <Text style={styles.title}>{title}</Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
        <View style={styles.BtnContainer}>
          <Pressable onPress={onPress} style={[styles.actionBtn, actionBtnStyle]}>
            <Text style={[styles.actionBtnText, actionBtnTextStyle]}>{actionBtnText}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  actionBtn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionBtnText: {
    color: 'white',
    fontSize: 13,
  },
  BtnContainer: {
    marginTop: 'auto',
  },
});