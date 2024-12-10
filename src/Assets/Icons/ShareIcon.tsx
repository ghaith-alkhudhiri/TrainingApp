import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ShareIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10.278 13.181c0-.395.105-.783.306-1.123l-5.047-2.94a2.217 2.217 0 01-3.487.452 2.221 2.221 0 113.488-2.688l5.043-2.943a2.21 2.21 0 01-.133-1.969 2.223 2.223 0 013.622-.72 2.22 2.22 0 11-3.49 2.689L5.539 6.882a2.214 2.214 0 010 2.236l5.046 2.94a2.216 2.216 0 012.766-.93 2.218 2.218 0 011.37 2.052 2.219 2.219 0 01-3.79 1.57 2.221 2.221 0 01-.652-1.569z"
        fill="#262626"
        stroke="#262626"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default ShareIcon
