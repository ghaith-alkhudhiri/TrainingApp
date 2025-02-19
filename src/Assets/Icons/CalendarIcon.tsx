import React, { Component } from 'react';
import Svg, { Path, G } from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  color?: string;
  filled?: boolean;
}
class CalendarIcon extends Component<Props> {
  render() {
    if(this.props.filled) {
      const { width = 13, height = 13, color = '#0165FC' } = this.props;
      return (
        <Svg width={width} height={height} viewBox="0 0 13 13" fill="none">
          <Path d="M9.07288 1.92898V1.08398C9.07288 0.861901 8.88871 0.677734 8.66663 0.677734C8.44454 0.677734 8.26038 0.861901 8.26038 1.08398V1.89648H4.73954V1.08398C4.73954 0.861901 4.55538 0.677734 4.33329 0.677734C4.11121 0.677734 3.92704 0.861901 3.92704 1.08398V1.92898C2.46454 2.0644 1.75496 2.93648 1.64663 4.23107C1.63579 4.38815 1.76579 4.51815 1.91746 4.51815H11.0825C11.2395 4.51815 11.3695 4.38273 11.3533 4.23107C11.245 2.93648 10.5354 2.0644 9.07288 1.92898Z" 
          fill={color}/>
          <Path d="M10.8333 5.33008H2.16667C1.86875 5.33008 1.625 5.57383 1.625 5.87174V9.20841C1.625 10.8334 2.4375 11.9167 4.33333 11.9167H8.66667C10.5625 11.9167 11.375 10.8334 11.375 9.20841V5.87174C11.375 5.57383 11.1313 5.33008 10.8333 5.33008ZM4.98875 9.86383C4.96167 9.88549 4.93458 9.91258 4.9075 9.92883C4.875 9.95049 4.8425 9.96674 4.81 9.97758C4.7775 9.99383 4.745 10.0047 4.7125 10.0101C4.67458 10.0155 4.64208 10.0209 4.60417 10.0209C4.53375 10.0209 4.46333 10.0047 4.39833 9.97758C4.32792 9.95049 4.27375 9.91258 4.21958 9.86383C4.12208 9.76091 4.0625 9.62008 4.0625 9.47924C4.0625 9.33841 4.12208 9.19758 4.21958 9.09466C4.27375 9.04591 4.32792 9.00799 4.39833 8.98091C4.49583 8.93758 4.60417 8.92674 4.7125 8.94841C4.745 8.95383 4.7775 8.96466 4.81 8.98091C4.8425 8.99174 4.875 9.00799 4.9075 9.02966C4.93458 9.05133 4.96167 9.07299 4.98875 9.09466C5.08625 9.19758 5.14583 9.33841 5.14583 9.47924C5.14583 9.62008 5.08625 9.76091 4.98875 9.86383ZM4.98875 7.96799C4.88583 8.06549 4.745 8.12508 4.60417 8.12508C4.46333 8.12508 4.3225 8.06549 4.21958 7.96799C4.12208 7.86508 4.0625 7.72424 4.0625 7.58341C4.0625 7.44258 4.12208 7.30174 4.21958 7.19883C4.37125 7.04716 4.60958 6.99841 4.81 7.08508C4.88042 7.11216 4.94 7.15008 4.98875 7.19883C5.08625 7.30174 5.14583 7.44258 5.14583 7.58341C5.14583 7.72424 5.08625 7.86508 4.98875 7.96799ZM6.88458 9.86383C6.78167 9.96133 6.64083 10.0209 6.5 10.0209C6.35917 10.0209 6.21833 9.96133 6.11542 9.86383C6.01792 9.76091 5.95833 9.62008 5.95833 9.47924C5.95833 9.33841 6.01792 9.19758 6.11542 9.09466C6.31583 8.89424 6.68417 8.89424 6.88458 9.09466C6.98208 9.19758 7.04167 9.33841 7.04167 9.47924C7.04167 9.62008 6.98208 9.76091 6.88458 9.86383ZM6.88458 7.96799C6.8575 7.98966 6.83042 8.01133 6.80333 8.03299C6.77083 8.05466 6.73833 8.07091 6.70583 8.08174C6.67333 8.09799 6.64083 8.10883 6.60833 8.11424C6.57042 8.11966 6.53792 8.12508 6.5 8.12508C6.35917 8.12508 6.21833 8.06549 6.11542 7.96799C6.01792 7.86508 5.95833 7.72424 5.95833 7.58341C5.95833 7.44258 6.01792 7.30174 6.11542 7.19883C6.16417 7.15008 6.22375 7.11216 6.29417 7.08508C6.49458 6.99841 6.73292 7.04716 6.88458 7.19883C6.98208 7.30174 7.04167 7.44258 7.04167 7.58341C7.04167 7.72424 6.98208 7.86508 6.88458 7.96799ZM8.78042 9.86383C8.6775 9.96133 8.53667 10.0209 8.39583 10.0209C8.255 10.0209 8.11417 9.96133 8.01125 9.86383C7.91375 9.76091 7.85417 9.62008 7.85417 9.47924C7.85417 9.33841 7.91375 9.19758 8.01125 9.09466C8.21167 8.89424 8.58 8.89424 8.78042 9.09466C8.87792 9.19758 8.9375 9.33841 8.9375 9.47924C8.9375 9.62008 8.87792 9.76091 8.78042 9.86383ZM8.78042 7.96799C8.75333 7.98966 8.72625 8.01133 8.69917 8.03299C8.66667 8.05466 8.63417 8.07091 8.60167 8.08174C8.56917 8.09799 8.53667 8.10883 8.50417 8.11424C8.46625 8.11966 8.42833 8.12508 8.39583 8.12508C8.255 8.12508 8.11417 8.06549 8.01125 7.96799C7.91375 7.86508 7.85417 7.72424 7.85417 7.58341C7.85417 7.44258 7.91375 7.30174 8.01125 7.19883C8.06542 7.15008 8.11958 7.11216 8.19 7.08508C8.2875 7.04174 8.39583 7.03091 8.50417 7.05258C8.53667 7.05799 8.56917 7.06883 8.60167 7.08508C8.63417 7.09591 8.66667 7.11216 8.69917 7.13383C8.72625 7.15549 8.75333 7.17716 8.78042 7.19883C8.87792 7.30174 8.9375 7.44258 8.9375 7.58341C8.9375 7.72424 8.87792 7.86508 8.78042 7.96799Z" 
          fill={color}/>
        </Svg>
      )
    }
    const { width = 25, height = 24, color = '#9DB2CE' } = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 25 24" fill="none">
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
    );
  }
}

export default CalendarIcon;
