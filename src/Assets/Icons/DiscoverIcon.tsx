import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

class DiscoverIcon extends Component {
  render() {
    return (
      <View style={{ width: 25, height: 24 }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
          <G id="vuesax/linear/discover">
            <G id="discover">
              <Path
                id="Vector"
                d="M12.5 22C18 22 22.5 17.5 22.5 12C22.5 6.5 18 2 12.5 2C7 2 2.5 6.5 2.5 12C2.5 17.5 7 22 12.5 22Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <Path
                id="Vector_2"
                d="M14 8C10.97 8 8.5 10.48 8.5 13.5C8.5 14.87 9.62 16 11 16C14.02 16 16.5 13.52 16.5 10.5C16.5 9.13 15.37 8 14 8Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeMiterlimit="10"
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

export default DiscoverIcon;
