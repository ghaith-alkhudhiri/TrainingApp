import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={14}
      viewBox="0 0 15 14"
      fill="none"
      {...props}
    >
      <Path
        d="M7.058.838a.5.5 0 01.884 0l1.736 3.29a.5.5 0 00.357.259l3.664.634a.5.5 0 01.273.841l-2.591 2.667a.5.5 0 00-.137.42l.53 3.68a.5.5 0 01-.716.52l-3.337-1.64a.5.5 0 00-.442 0l-3.337 1.64a.5.5 0 01-.715-.52l.529-3.68a.5.5 0 00-.136-.42L1.028 5.862a.5.5 0 01.273-.841l3.664-.634a.5.5 0 00.357-.26L7.058.838z"
        fill="#FCAF23"
      />
    </Svg>
  )
}

export default StarIcon;
