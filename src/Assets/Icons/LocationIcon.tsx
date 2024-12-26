import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
};
export class LocationIcon extends Component<IconProps> {
    static defaultProps = {
        width: 24,
        height: 24,
        color: "#0165FC",
      };
      render() {
      const { width, height, color } = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
            <Path d="M20.6269 8.45C19.5769 3.83 15.5469 1.75 12.0069 1.75C12.0069 1.75 12.0069 1.75 11.9969 1.75C8.46693 1.75 4.42693 3.82 3.37693 8.44C2.20693 13.6 5.36693 17.97 8.22693 20.72C9.28693 21.74 10.6469 22.25 12.0069 22.25C13.3669 22.25 14.7269 21.74 15.7769 20.72C18.6369 17.97 21.7969 13.61 20.6269 8.45ZM12.0069 13.46C10.2669 13.46 8.85693 12.05 8.85693 10.31C8.85693 8.57 10.2669 7.16 12.0069 7.16C13.7469 7.16 15.1569 8.57 15.1569 10.31C15.1569 12.05 13.7469 13.46 12.0069 13.46Z" 
            fill={color}/>
        </Svg>
    )
  }
}

export default LocationIcon