import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import theme from '../../../Constants/theme'

interface Props {
    icon: React.ReactElement<any>;
    number: number;
    unit: string;
}

export class InfoCard extends Component<Props> {
  render() {
    const {icon, number, unit} = this.props;
    // Clone the icon and pass the styles.icon style
    const styledIcon = React.cloneElement(icon, {
        style: [styles.icon, icon.props.style], // Merge existing styles with styles.icon
        fill: theme.primary, // Ensure color is passed for SVG icons
      });
    return (
      <View style={styles.container}>
        <View>
            {styledIcon}
        </View>
        <View>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    )
  }
}

export default InfoCard

const styles = StyleSheet.create({
    container: {
        width: 98,
        paddingVertical: 17,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11,
        borderWidth: 1,
        borderColor:'#EEEEEF',
        shadowColor: 'rgba(0, 39, 138, 0.10)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 7,
        elevation: 5,
        gap: 8,
    },
    icon: {
        width: 20,
        height: 20,
        color: theme.primary,
    },
    number: {
        color: '#000',
        fontFamily: theme.font,
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 18.75,
    },
    unit: {
        color: '#8B8B8B',
        textAlign: 'center',
        fontFamily: theme.font,
        fontSize: 11,
        fontWeight: 300,
        lineHeight: 17,
    },
})