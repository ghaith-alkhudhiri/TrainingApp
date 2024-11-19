import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '../../Constants/theme';

const SearchIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2Z"
            fill={`${theme.primary}`}
        />
    </Svg>
);

export default SearchIcon;
