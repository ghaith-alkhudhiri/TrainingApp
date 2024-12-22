import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};

export class Clock extends Component<IconProps> {
    static defaultProps = {
        width: 16,
        height: 16,
        color: "#0750BF",
      };
  render() {
    const { width, height, color } = this.props;
    return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
        <Path d="M14.6666 8.00065C14.6666 11.6807 11.68 14.6673 7.99998 14.6673C4.31998 14.6673 1.33331 11.6807 1.33331 8.00065C1.33331 4.32065 4.31998 1.33398 7.99998 1.33398C11.68 1.33398 14.6666 4.32065 14.6666 8.00065Z" 
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <Path d="M10.4734 10.1192L8.40669 8.88586C8.04669 8.67253 7.75336 8.15919 7.75336 7.73919V5.00586" 
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
    )
  }
}

export default Clock