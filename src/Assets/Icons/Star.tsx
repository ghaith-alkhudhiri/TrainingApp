import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'

type IconProps = {
    width?: number;
    height?: number;
    color?: string;
    filled?: boolean;
};

export class Star extends Component<IconProps> {
    static defaultProps = {
        width: 15,
        height: 13,
        color: "#D9D9D9",
        filled: false,
      };
  render() {
    const { width, height, color, filled } = this.props;
    return (
        <Svg width={width} height={height} viewBox="0 0 15 13" fill="none">
            <Path d="M7.05778 0.338169C7.24538 -0.0174046 7.75462 -0.0174037 7.94222 0.33817L9.67764 3.62739C9.74998 3.76451 9.88185 3.86032 10.0346 3.88675L13.6991 4.5208C14.0953 4.58934 14.2526 5.07366 13.9724 5.36196L11.3805 8.02886C11.2724 8.14004 11.222 8.29506 11.2441 8.44851L11.7735 12.1296C11.8307 12.5275 11.4187 12.8269 11.058 12.6495L7.72062 11.0085C7.5815 10.9401 7.4185 10.9401 7.27938 11.0085L3.94204 12.6495C3.58126 12.8269 3.16928 12.5275 3.22651 12.1296L3.75588 8.44851C3.77795 8.29506 3.72759 8.14004 3.61953 8.02886L1.02757 5.36196C0.747369 5.07366 0.904734 4.58934 1.30088 4.5208L4.96538 3.88675C5.11815 3.86032 5.25002 3.76451 5.32236 3.62739L7.05778 0.338169Z" 
            fill={filled ? '#FCAF23' : color}/>
        </Svg>
    )
  }
}

export default Star