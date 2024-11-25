import React, { Component } from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

class ShopIcon extends Component {
  render() {
    return (
      <View style={{ width: 25, height: 24 }}>
        <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
          <G id="vuesax/linear/shop">
            <G id="shop">
              <Path
                id="Vector"
                d="M3.50977 11.2202V15.7102C3.50977 20.2002 5.30977 22.0002 9.79977 22.0002H15.1898C19.6798 22.0002 21.4798 20.2002 21.4798 15.7102V11.2202"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_2"
                d="M12.5 12C14.33 12 15.68 10.51 15.5 8.68L14.84 2H10.17L9.49999 8.68C9.31999 10.51 10.67 12 12.5 12Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_3"
                d="M18.8098 12C20.8298 12 22.3098 10.36 22.1098 8.35L21.8298 5.6C21.4698 3 20.4698 2 17.8498 2H14.7998L15.4998 9.01C15.6698 10.66 17.1598 12 18.8098 12Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_4"
                d="M6.13988 12C7.78988 12 9.27988 10.66 9.43988 9.01L9.65988 6.8L10.1399 2H7.08988C4.46988 2 3.46988 3 3.10988 5.6L2.83988 8.35C2.63988 10.36 4.11988 12 6.13988 12Z"
                stroke="#9DB2CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                id="Vector_5"
                d="M12.5 17C10.83 17 10 17.83 10 19.5V22H15V19.5C15 17.83 14.17 17 12.5 17Z"
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

export default ShopIcon;
