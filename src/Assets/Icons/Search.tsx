import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

interface props {
    width?: number;
    height?: number;
    color?: string;
}

export class Search extends Component<props> {
  render() {
    const {width = 20, height = 20, color = '#292D32'} = this.props;
    return (
        <Svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
      >
        <Path
          d="M9.583 17.5a7.917 7.917 0 100-15.834 7.917 7.917 0 000 15.833zM18.333 18.333l-1.666-1.667"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
}

export default Search