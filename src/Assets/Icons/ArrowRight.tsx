import React, { Component } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
    width?: number,
    height?: number,
    color?: string,
}

class ArrowRight extends Component<Props> {
  render() {
    const { width = 7, height = 12, color = "#F4F6F9" } = this.props;
    return (
      <Svg
        width={width}
        height={height}
        viewBox="0 0 7 12"
        fill='none'
      >
        <Path
          d="M1 11.117L6.058 6.06 1 1"
          stroke={color}
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  }
}

export default ArrowRight;
