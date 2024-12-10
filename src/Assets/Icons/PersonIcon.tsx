import React, { Component } from 'react'
import Svg, {Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export class PersonIcon extends Component<Props> {
  render() {
    const {width=35, height=51, color='#246BFD'} = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 35 51" fill="none">
            <Path d="M17.4871 22.7603C17.2305 22.7346 16.9226 22.7346 16.6403 22.7603C10.5333 22.555 5.68359 17.5513 5.68359 11.393C5.68359 5.10631 10.7642 0 17.0766 0C23.3632 0 28.4695 5.10631 28.4695 11.393C28.4439 17.5513 23.5942 22.555 17.4871 22.7603Z" fill={color}/>
            <Path d="M4.65726 32.2288C-1.55242 36.3856 -1.55242 43.1598 4.65726 47.2911C11.7137 52.0125 23.2863 52.0125 30.3427 47.2911C36.5524 43.1342 36.5524 36.36 30.3427 32.2288C23.312 27.533 11.7394 27.533 4.65726 32.2288Z" fill={color}/>
        </Svg>
    )
  }
}

export default PersonIcon