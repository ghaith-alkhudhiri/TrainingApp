import React, { Component } from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

class CheckMarkIcon extends Component<IconProps>{ 
    render(){
        const { width = 20, height = 20, color = '#FFFFFF' } = this.props;
        return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <G>
        <G>
          <path
            id="Path"
            d="M11.6666 3.79166L5.24992 10.2083L2.33325 7.29166"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
        );
    }
}


export default CheckMarkIcon;
