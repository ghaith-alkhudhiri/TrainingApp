import React, { Component } from 'react'
import { Path, Svg } from 'react-native-svg'

export class RightArrow extends Component {
  render() {
    return (
        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
            <Path d="M12.0249 15.5581L17.0833 10.4998L12.0249 5.44144" stroke="#0165FC" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M2.91665 10.5L16.9417 10.5" stroke="#0165FC" strokeWidth="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
  }
}

export default RightArrow