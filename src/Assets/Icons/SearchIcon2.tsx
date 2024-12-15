import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon2(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M9.583 17.5a7.917 7.917 0 100-15.834 7.917 7.917 0 000 15.833zM18.333 18.333l-1.666-1.667"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchIcon2;
