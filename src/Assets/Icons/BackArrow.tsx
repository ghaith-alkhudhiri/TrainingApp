import React, { Component } from 'react';
import { Svg, Path } from 'react-native-svg';

interface BackArrowIconProps {
  width?: number;
  height?: number;
  color?: string;
}

class BackArrowIcon extends Component<BackArrowIconProps> {
  render() {
    const { width = 20, height = 20, color = '#1E232C' } = this.props;
    return (
      <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Path
          d="M13.1576 2.36708C13.0656 2.27493 12.9564 2.20181 12.8362 2.15192C12.716 2.10203 12.5871 2.07635 12.4569 2.07635C12.3268 2.07635 12.1979 2.10203 12.0777 2.15192C11.9574 2.20181 11.8482 2.27493 11.7563 2.36708L5.17756 8.94583C5.10417 9.01907 5.04595 9.10607 5.00622 9.20184C4.96649 9.29761 4.94604 9.40027 4.94604 9.50396C4.94604 9.60764 4.96649 9.71031 5.00622 9.80608C5.04595 9.90185 5.10417 9.98884 5.17756 10.0621L11.7563 16.6408C12.1442 17.0287 12.7696 17.0287 13.1576 16.6408C13.5455 16.2529 13.5455 15.6275 13.1576 15.2396L7.4259 9.5L13.1655 3.76042C13.5455 3.38042 13.5455 2.74708 13.1576 2.36708Z"
          fill={color}
          stroke={color}
          strokeWidth="0.2"
        />
      </Svg>
    );
  }
}

export default BackArrowIcon;
