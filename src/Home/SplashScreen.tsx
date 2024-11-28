import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const { height } = Dimensions.get('window');

class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { height }]}>
        <View style={styles.centeredContent}>
          <Image source={require('../Assets/Images/TamarranLogo.png')} style={styles.image} resizeMode='contain' />
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.title}>Powered by</Text>
          <Image source={require('../Assets/Images/TamarranLogo2.png')} style={styles.image2} resizeMode='contain' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
    position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 103,
    height: 103,
  },
  image2: {
    width: 103,
    height: 65,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;