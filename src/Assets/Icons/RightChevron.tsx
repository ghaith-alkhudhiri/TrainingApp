import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightChevron = ({fill}) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path 
            d="M8.90991 19.9181L15.4299 13.3981C16.1999 12.6281 16.1999 11.3681 15.4299 10.5981L8.90991 4.07812" 
            stroke="#0165FC" 
            strokeWidth="1.5" 
            strokeMiterlimit="10" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
        />
    </Svg>
);

export default RightChevron;