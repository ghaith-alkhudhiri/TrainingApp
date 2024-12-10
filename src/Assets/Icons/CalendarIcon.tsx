import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}
class CalendarIcon extends Component<Props> {
  render() {
    const { width = 25, height = 24, color = '#9DB2CE' } = this.props;
    return (
      <View style={{ width: width, height: height }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
          <G id="vuesax/linear/calendar">
            <G id="calendar">
              <Path
                id="Vector"
                d="M8.5 2V5"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_2"
                d="M16.5 2V5"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_3"
                d="M4 9.08984H21"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_4"
                d="M21.5 8.5V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V8.5C3.5 5.5 5 3.5 8.5 3.5H16.5C20 3.5 21.5 5.5 21.5 8.5Z"
                stroke={color}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_5"
                d="M16.1947 13.7002H16.2037"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_6"
                d="M16.1947 16.7002H16.2037"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_7"
                d="M12.4955 13.7002H12.5045"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_8"
                d="M12.4955 16.7002H12.5045"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_9"
                d="M8.79431 13.7002H8.80329"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_10"
                d="M8.79431 16.7002H8.80329"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}

export default CalendarIcon;
