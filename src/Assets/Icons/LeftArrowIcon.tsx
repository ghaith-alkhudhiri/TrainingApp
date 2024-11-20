import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '../../Constants/theme';

const LeftArrowIcon = () => (
    <Svg width="17" height="14" viewBox="0 0 17 14" fill="none">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.12141 1.70711C8.51194 1.31658 8.51194 0.683417 8.12141 0.292893C7.73089 -0.0976315 7.09772 -0.0976315 6.7072 0.292893L0.707199 6.29289L9.15527e-05 7L0.706671 7.70658L0.707199 7.70711L0.707813 7.70772L6.7072 13.7071C7.09772 14.0976 7.73089 14.0976 8.12141 13.7071C8.51194 13.3166 8.51194 12.6834 8.12141 12.2929L3.82852 8L15.4143 8C15.9666 8 16.4143 7.55229 16.4143 7C16.4143 6.44772 15.9666 6 15.4143 6L3.82852 6L8.12141 1.70711Z"
            fill={theme.primary}
        />
    </Svg>
);

export default LeftArrowIcon;