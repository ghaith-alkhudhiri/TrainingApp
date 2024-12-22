import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};
export class downArrow extends Component<IconProps> {
    static defaultProps = {
        width: 20,
        height: 20,
        color: "#EAF2FF",
      };
  render() {
    const { width, height, color } = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path d="M16.5999 7.45898L11.1666 12.8923C10.5249 13.534 9.4749 13.534 8.83324 12.8923L3.3999 7.45898" 
            stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    )
  }
}

export default downArrow