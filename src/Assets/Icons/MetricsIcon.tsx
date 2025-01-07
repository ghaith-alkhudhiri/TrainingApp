import React, { Component } from 'react'
import Svg, { G, Mask, Path } from 'react-native-svg'

export class MetricsIcon extends Component {
  render() {
    return (
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Mask id="mask0_512_20325" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
          <Path d="M20.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V3.5C22 3.10218 21.842 2.72064 21.5607 2.43934C21.2794 2.15804 20.8978 2 20.5 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          <Path d="M6 9.52734C7.66233 7.52734 9.66233 6.52734 12 6.52734C14.3373 6.52734 16.3373 7.52734 18 9.52734" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          <Path d="M12 15.5C12.3978 15.5 12.7794 15.342 13.0607 15.0607C13.342 14.7794 13.5 14.3978 13.5 14C13.5 13.6022 13.342 13.2206 13.0607 12.9393C12.7794 12.658 12.3978 12.5 12 12.5C11.6022 12.5 11.2206 12.658 10.9393 12.9393C10.658 13.2206 10.5 13.6022 10.5 14C10.5 14.3978 10.658 14.7794 10.9393 15.0607C11.2206 15.342 11.6022 15.5 12 15.5Z" fill="black"/>
          <Path d="M9.5 10.5L12.004 14" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Mask>
        <G mask="url(#mask0_512_20325)">
          <Path d="M0 6C0 2.68629 2.68629 0 6 0H18C21.3137 0 24 2.68629 24 6V18C24 21.3137 21.3137 24 18 24H6C2.68629 24 0 21.3137 0 18V6Z" fill="#0165FC"/>
        </G>
      </Svg>
    )
  }
}

export default MetricsIcon