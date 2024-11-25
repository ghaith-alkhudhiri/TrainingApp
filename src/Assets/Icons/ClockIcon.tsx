import React, { Component } from 'react';
import Svg, { G, Path } from 'react-native-svg';

type IconProps = {
  width?: number;
  height?: number;
  fill?: string;
};

class ClockIcon extends Component<IconProps> {
  static defaultProps = {
    width: 14,
    height: 13,
    fill: "#0165FC",
  };

  render() {
    const { width, height, fill } = this.props;
    
    return (
      <Svg width={width} height={height} viewBox="0 0 14 13" fill="none">
        <G id="vuesax/bold/clock">
          <G id="clock">
            <Path 
              id="Vector" 
              d="M6.99995 1.9502C4.4929 1.9502 2.44995 3.99315 2.44995 6.5002C2.44995 9.00725 4.4929 11.0502 6.99995 11.0502C9.507 11.0502 11.55 9.00725 11.55 6.5002C11.55 3.99315 9.507 1.9502 6.99995 1.9502ZM8.9792 8.12455C8.9155 8.23375 8.80175 8.2929 8.68345 8.2929C8.6243 8.2929 8.56515 8.27925 8.51055 8.24285L7.10005 7.4011C6.7497 7.1918 6.49035 6.73225 6.49035 6.3273V4.4618C6.49035 4.27525 6.64505 4.12055 6.8316 4.12055C7.01815 4.12055 7.17285 4.27525 7.17285 4.4618V6.3273C7.17285 6.4911 7.30935 6.73225 7.4504 6.81415L8.8609 7.6559C9.0247 7.75145 9.0793 7.96075 8.9792 8.12455Z" 
              fill={fill} 
            />
          </G>
        </G>
      </Svg>
    );
  }
}

export default ClockIcon;
