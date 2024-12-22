import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import ClassSection from './ClassSection';

export class ClassSections extends Component {
  render() {
    const sections = [
        {
            title: "About",
            description: "this class teaches the yoga and powerlifting",
            details: [],
        },
        {
            title: "Class Details",
            description: null,
            details: [
                {
                    title: "Class Coach",
                    value: "Noor M. Ali"
                },
                {
                    title: "Class Date",
                    value: "8th Jun, 2024",
                },
                {
                    title: "Class Time",
                    value: "3:00 PM"
                },
                {
                    title: "Duration",
                    value: "1 Hour",
                },
                {
                    title: "Studio Number",
                    value: "Studio 01"
                }
            ]
        }
    ]
    return (
      <View style={styles.container}>
        {
            sections.map((section, index) => (
                <ClassSection title={section.title} description={section.description} details={section.details} />
            ))
        }
      </View>
    )
  }
}

export default ClassSections;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        gap: 16,
    }
})