import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface Props {
  color?: string;
  focused?: boolean;
}

class ProfileIcon extends Component<Props> {
  render() {
    const {color, focused} = this.props;
    return (
      <View style={{ width: 25, height: 24 }}>
        {focused ?
          <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
            <Path d="M12.5 2C9.88 2 7.75 4.13 7.75 6.75C7.75 9.32 9.76 11.4 12.38 11.49C12.46 11.48 12.54 11.48 12.6 11.49C12.62 11.49 12.63 11.49 12.65 11.49C12.66 11.49 12.66 11.49 12.67 11.49C15.23 11.4 17.24 9.32 17.25 6.75C17.25 4.13 15.12 2 12.5 2Z" fill="#0165FC"/>
            <Path d="M17.58 14.1489C14.79 12.2889 10.24 12.2889 7.42996 14.1489C6.15996 14.9989 5.45996 16.1489 5.45996 17.3789C5.45996 18.6089 6.15996 19.7489 7.41996 20.5889C8.81996 21.5289 10.66 21.9989 12.5 21.9989C14.34 21.9989 16.18 21.5289 17.58 20.5889C18.84 19.7389 19.54 18.5989 19.54 17.3589C19.53 16.1289 18.84 14.9889 17.58 14.1489Z" fill="#0165FC"/>
          </Svg>
          :
          <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
            <G id="vuesax/linear/profile">
              <G id="profile">
                <Path
                  id="Vector"
                  d="M12.6601 10.87C12.5601 10.86 12.4401 10.86 12.3301 10.87C9.95006 10.79 8.06006 8.84 8.06006 6.44C8.06006 3.99 10.0401 2 12.5001 2C14.9501 2 16.9401 3.99 16.9401 6.44C16.9301 8.84 15.0401 10.79 12.6601 10.87Z"
                  stroke={color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  id="Vector_2"
                  d="M7.66021 14.56C5.24021 16.18 5.24021 18.82 7.66021 20.43C10.4102 22.27 14.9202 22.27 17.6702 20.43C20.0902 18.81 20.0902 16.17 17.6702 14.56C14.9302 12.73 10.4202 12.73 7.66021 14.56Z"
                  stroke={color}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
            </G>
          </Svg>
        }
      </View>
    );
  }
}

export default ProfileIcon;
