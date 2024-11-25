import React from 'react';
import { Svg, Path, G } from 'react-native-svg';
import theme from '../../Constants/theme';

const DirectIcon = () => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
    <G id="vuesax/bold/direct">
      <G id="direct">
        <Path id="Vector" d="M21.3 12.73H17.82C16.84 12.73 15.97 13.27 15.53 14.15L14.69 15.81C14.49 16.21 14.09 16.46 13.65 16.46H10.37C10.06 16.46 9.62 16.39 9.33 15.81L8.49 14.16C8.05 13.29 7.17 12.74 6.2 12.74H2.7C2.31 12.74 2 13.05 2 13.44V16.7C2 20.33 4.18 22.5 7.82 22.5H16.2C19.63 22.5 21.74 20.62 22 17.28V13.43C22 13.05 21.69 12.73 21.3 12.73Z" fill={`${theme.primary}`}/>
        <Path id="Vector_2" d="M16.19 2.5H7.81C4.17 2.5 2 4.67 2 8.31V11.35C2.22 11.27 2.46 11.23 2.7 11.23H6.2C7.75 11.23 9.14 12.09 9.83 13.48L10.58 14.95H13.44L14.19 13.47C14.88 12.09 16.27 11.23 17.82 11.23H21.3C21.54 11.23 21.78 11.27 22 11.35V8.31C22 4.67 19.83 2.5 16.19 2.5ZM10.45 5.91H13.55C13.93 5.91 14.25 6.22 14.25 6.6C14.25 6.99 13.93 7.3 13.55 7.3H10.45C10.07 7.3 9.75 6.99 9.75 6.6C9.75 6.22 10.07 5.91 10.45 5.91ZM14.33 10.09H9.67C9.29 10.09 8.98 9.78 8.98 9.4C8.98 9.01 9.29 8.7 9.67 8.7H14.33C14.71 8.7 15.02 9.01 15.02 9.4C15.02 9.78 14.71 10.09 14.33 10.09Z" fill={`${theme.primary}`}/>
      </G>
    </G>
  </Svg>
);

export default DirectIcon;