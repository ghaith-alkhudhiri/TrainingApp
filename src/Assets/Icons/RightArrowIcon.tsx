import React from 'react';
import Svg, { Path } from 'react-native-svg';

const RightArrowIcon = ({fill}) => {
    return (
        <Svg width="17" height="14" viewBox="0 0 17 14" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.70696 12.2929C8.31643 12.6834 8.31643 13.3166 8.70696 13.7071C9.09748 14.0976 9.73065 14.0976 10.1212 13.7071L16.1212 7.70711L16.8283 7L16.1217 6.29342L16.1212 6.29289L16.1206 6.29228L10.1212 0.292894C9.73065 -0.0976312 9.09748 -0.0976313 8.70696 0.292894C8.31643 0.683417 8.31643 1.31658 8.70696 1.70711L12.9998 6L1.41406 6C0.861777 6 0.414062 6.44771 0.414062 7C0.414062 7.55228 0.861777 8 1.41406 8L12.9999 8L8.70696 12.2929Z"
                fill={fill}
            />
        </Svg>
    );
};

export default RightArrowIcon;