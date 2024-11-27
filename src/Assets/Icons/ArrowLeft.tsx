import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

interface CustomIconProps {
  width?: number;
  height?: number;
  color?: string;
}

class ArrowLeft extends Component<CustomIconProps>{ 
    render(){
        const { width = 20, height = 20, color = '#1E232C' } = this.props;
        return (
            <Svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            >
            <Path
                d="M7.97508 4.94189L2.91675 10.0002L7.97508 15.0586"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.0833 10H3.05835"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </Svg>
        );
    }
}

export default ArrowLeft;
