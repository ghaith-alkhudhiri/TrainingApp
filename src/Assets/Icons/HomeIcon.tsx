import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';
import theme from '../../Constants/theme';

class HomeIcon extends Component {
  render() {
    return (
      <View style={{ width: 25, height: 24 }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
          <G id="vuesax/bold/home">
            <G id="home">
              <Path id="Vector" d="M21.33 8.01002L14.78 2.77002C13.5 1.75002 11.5 1.74002 10.23 2.76002L3.67996 8.01002C2.73996 8.76002 2.16996 10.26 2.36996 11.44L3.62996 18.98C3.91996 20.67 5.48996 22 7.19996 22H17.8C19.49 22 21.09 20.64 21.38 18.97L22.64 11.43C22.82 10.26 22.25 8.76002 21.33 8.01002ZM13.25 18C13.25 18.41 12.91 18.75 12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18Z" fill={`${theme.primary}`}/>
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}

export default HomeIcon;