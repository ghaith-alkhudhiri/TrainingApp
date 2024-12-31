import React from 'react';
import Svg, { G, Mask, Path, Defs, ClipPath, Rect } from 'react-native-svg';

const TwitterIcon = () => (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <G clipPath="url(#clip0_512_24102)">
            <Mask id="mask0_512_24102" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                <Path d="M0 0H18V18H0V0Z" fill="white" />
            </Mask>
            <G mask="url(#mask0_512_24102)">
                <Path d="M14.175 0.84375H16.9354L10.9054 7.75318L18 17.1569H12.4457L8.09229 11.4548L3.11657 17.1569H0.353571L6.80271 9.76404L0 0.845036H5.69571L9.62486 6.05604L14.175 0.84375ZM13.2043 15.5009H14.7343L4.86 2.41361H3.21943L13.2043 15.5009Z" fill="#0165FC" />
            </G>
        </G>
        <Defs>
            <ClipPath id="clip0_512_24102">
                <Rect width="18" height="18" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);

export default TwitterIcon;