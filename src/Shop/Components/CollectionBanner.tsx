import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import theme from '../../Constants/theme'
import RightArrow from '../../Assets/Icons/RightArrow'
import { StyleSheet } from 'react-native'

export class CollectionBanner extends Component {
  render() {
    return (
    //   <View style={{width: '100%', height: 156, borderRadius: 10, backgroundColor: 'red', flexDirection: 'row',}}>
    //     <View style={{gap: 8}}>
    //         <Text style={{
    //             color: '#141718',
    //             fontFamily: theme.font,
    //             fontSize: 28,
    //             fontWeight: '500',
    //             lineHeight: 34,
    //             letterSpacing: -0.6,
    //         }}>Active Ware</Text>
    //         <View style={{gap: 4, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#1E1E1E', width: 88}}>
    //             <Text style={{
    //                 color: '#1E1E1E',
    //                 fontFamily: theme.font,
    //                 fontSize: 14,
    //                 fontWeight: '500',
    //                 lineHeight: 24,
    //             }}>Collection</Text>
    //             <RightArrow color='#1E1E1E' />
    //         </View>
    //     </View>
    //     <Image source={require('../../Assets/Images/image29.png')} 
    //     style={{
    //         width: 160,
    //         height: 156,
    //         borderRadius: 10,
    //     }} />
    //   </View>
        <TouchableOpacity style={styles.cardContainer}>
          <View>
            <Text style={styles.title}>Active Ware</Text>
            <Text style={styles.subtitle}>Collection →</Text>
          </View>
          <Image
            source={require('../../Assets/Images/image29.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%', height: 156, borderRadius: 10, backgroundColor: 'red', flexDirection: 'row',
      justifyContent: 'space-between',
    //   padding: 16,
    //   margin: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: '#000',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '400',
      color: '#797979',
      marginTop: 4,
    },
    image: {
      width: 170,
      height: 160,
      borderRadius: 8,
    },
  });
  

export default CollectionBanner