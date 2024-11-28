import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Path, Svg } from 'react-native-svg'

export class MicrosoftIcon extends Component {
  render() {
    return (
        <Svg width="23" height="21" viewBox="0 0 23 21" fill="none">
            <Path d="M10.8426 1H1.68457V10H10.8426V1Z" fill="#F25022"/>
            <Path d="M10.8426 11H1.68457V20H10.8426V11Z" fill="#00A4EF"/>
            <Path d="M21.0181 1H11.8601V10H21.0181V1Z" fill="#7FBA00"/>
            <Path d="M21.0181 11H11.8601V20H21.0181V11Z" fill="#FFB900"/>
        </Svg>
    )
  }
}

export default MicrosoftIcon