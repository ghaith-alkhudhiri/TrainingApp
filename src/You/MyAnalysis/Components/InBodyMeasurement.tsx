import { Text, View,ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import theme from '../../../Constants/theme';

export class InBodyMeasurement extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.overviewContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
          <Text style={{
            color: '#000',
            fontFamily: theme.font,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: -0.3,
          }}>Recent</Text>
          <Text style={{
            color: '#1E1E1E',
            fontFamily: theme.font,
            fontSize: 12,
            fontWeight: '500',
            lineHeight: 15,
          }}>6th June,2024</Text>
        </View>
        <View style={{height: 1, backgroundColor: '#E1E1E1', marginBottom: 8}} />
        {/* In Body Measurement Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>In Body Measurement</Text>
          {[
            { label: 'Weight (Kg)', value: '81.5 Kg' },
            { label: 'Left Arm (cm)', value: '32 cm' },
            { label: 'Right Arm (cm)', value: '32 cm' },
            { label: 'Waist (cm)', value: '32 cm' },
            { label: 'Left Thigh (cm)', value: '32 cm' },
            { label: 'Right Thigh (cm)', value: '32 cm' },
            { label: 'Left Biceps (cm)', value: '32 cm' },
            { label: 'Right Biceps (cm)', value: '32 cm' },
            { label: 'Neck (cm)', value: '32 cm' },
            { label: 'Right Calf (cm)', value: '32 cm' },
            { label: 'Left Calf (cm)', value: '32 cm' },
          ].map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Body Composition Analysis Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Body Composition Analysis</Text>
          {[
            { label: 'Total Body Water (L)', value: '3.5 L' },
            { label: 'Proteins (Kg)', value: '32 Kg' },
            { label: 'Minerals (Kg)', value: '32 Kg' },
          ].map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Muscle Fat Analysis Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Muscle Fat Analysis</Text>
          {[
            { label: 'Skeletal Muscle Mass / SMM (Kg)', value: '32 Kg' },
            { label: 'Body Fat Mass (Kg)', value: '32 Kg' },
          ].map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Obesity Analysis Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Obesity Analysis</Text>
          {[
            { label: 'Body Mass Index / BMI (Kg/m2)', value: '18.7' },
            { label: 'Percent Body Fat / PBF (Kg)', value: '32 Kg' },
          ].map((item, index) => (
            <View key={index} style={styles.itemRow}>
              <Text style={styles.itemLabel}>{item.label}</Text>
              <Text style={styles.itemValue}>{item.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

export default InBodyMeasurement

const styles = StyleSheet.create({
  overviewContainer: {
    paddingHorizontal: 24,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#EAF2FF',
    fontFamily: theme.font,
    backgroundColor: theme.primary,
    lineHeight: 17.5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    borderTopWidth: 0.5,
    borderTopColor: '#E6E6E6',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E6E6E6',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E6E6E6',
    alignItems: 'center',
  },
  itemLabel: {
    color: '#000',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: theme.font,
    lineHeight: 17,
  },
  itemValue: {
    color: '#000',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Roboto',
  },
});