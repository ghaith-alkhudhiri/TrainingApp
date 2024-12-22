import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};

export class StopWatch extends Component<IconProps> {
    static defaultProps = {
        width: 17,
        height: 16,
        color: "#0750BF",
      };
  render() {
    const { width, height, color } = this.props;
    return (
    <Svg width={width} height={height} viewBox="0 0 17 16" fill="none">
        <Path d="M14.3333 8.83333C14.3333 12.0533 11.72 14.6667 8.49999 14.6667C5.27999 14.6667 2.66666 12.0533 2.66666 8.83333C2.66666 5.61333 5.27999 3 8.49999 3C11.72 3 14.3333 5.61333 14.3333 8.83333Z" 
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M8.5 5.33398V8.66732" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M6.5 1.33398H10.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    )
  }
}

export default StopWatch