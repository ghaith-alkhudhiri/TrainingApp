import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

class ProfileIcon extends Component {
  render() {
    return (
      <View style={{ width: 25, height: 24 }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
          <G id="vuesax/linear/profile">
            <G id="profile">
              <Path
                id="Vector"
                d="M12.6601 10.87C12.5601 10.86 12.4401 10.86 12.3301 10.87C9.95006 10.79 8.06006 8.84 8.06006 6.44C8.06006 3.99 10.0401 2 12.5001 2C14.9501 2 16.9401 3.99 16.9401 6.44C16.9301 8.84 15.0401 10.79 12.6601 10.87Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_2"
                d="M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
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

export default ProfileIcon;
