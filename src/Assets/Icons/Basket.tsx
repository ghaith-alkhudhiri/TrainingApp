import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
    width?: number;
    height?: number;
    color?: string;
}

export class Basket extends Component<Props> {
  render() {
    const { width = 20, height = 20, color = '#292D32' } = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
            <Path d="M7.34162 1.66797L4.32495 4.69297" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M12.6584 1.66797L15.6751 4.69297" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1.66675 6.54167C1.66675 5 2.49175 4.875 3.51675 4.875H16.4834C17.5084 4.875 18.3334 5 18.3334 6.54167C18.3334 8.33333 17.5084 8.20833 16.4834 8.20833H3.51675C2.49175 8.20833 1.66675 8.33333 1.66675 6.54167Z" stroke={color} strokeWidth="1.5"/>
            <Path d="M8.1333 11.668V14.6263" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M11.9666 11.668V14.6263" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M2.91675 8.33203L4.09175 15.532C4.35841 17.1487 5.00008 18.332 7.38341 18.332H12.4084C15.0001 18.332 15.3834 17.1987 15.6834 15.632L17.0834 8.33203" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </Svg>
    )
  }
}

export default Basket