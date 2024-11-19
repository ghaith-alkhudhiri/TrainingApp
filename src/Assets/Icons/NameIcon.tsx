import React, { Component } from 'react';
import Svg, { G, Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

class NameIcon extends Component<IconProps> {
  static defaultProps = {
    width: 14,
    height: 13,
    fill: "#0165FC",
  };

  render() {
    const { width, height, fill } = this.props;
    
    return (
      <Svg width={width} height={height} viewBox="0 0 14 13" fill="none">
        <G id="vuesax/bold/frame">
          <G id="frame">
            <Path 
              id="Vector" 
              d="M7.00004 1.0835C5.58087 1.0835 4.42712 2.23725 4.42712 3.65641C4.42712 5.0485 5.51587 6.17516 6.93504 6.22391C6.97837 6.2185 7.02171 6.2185 7.05421 6.22391C7.06504 6.22391 7.07046 6.22391 7.08129 6.22391C7.08671 6.22391 7.08671 6.22391 7.09212 6.22391C8.47879 6.17516 9.56754 5.0485 9.57296 3.65641C9.57296 2.23725 8.41921 1.0835 7.00004 1.0835Z" 
              fill={fill} 
            />
            <Path 
              id="Vector_2" 
              d="M9.75165 7.6648C8.2404 6.6573 5.77581 6.6573 4.25373 7.6648C3.56581 8.12522 3.18665 8.74814 3.18665 9.41439C3.18665 10.0806 3.56581 10.6981 4.24831 11.1531C5.00665 11.6623 6.00331 11.9169 6.99998 11.9169C7.99665 11.9169 8.99331 11.6623 9.75165 11.1531C10.4341 10.6927 10.8133 10.0752 10.8133 9.40356C10.8079 8.73731 10.4341 8.1198 9.75165 7.6648Z" 
              fill={fill} 
            />
          </G>
        </G>
      </Svg>
    );
  }
}

export default NameIcon;
