import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RatingIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <Path
        d="M12.234 1.439l1.76 3.545c.24.483.88.967 1.414 1.047l3.188.538c2.04.349 2.52 1.826 1.053 3.303l-2.48 2.511c-.414.417-.654 1.236-.52 1.827l.706 3.102c.56 2.444-.733 3.397-2.88 2.122l-2.988-1.786c-.547-.323-1.427-.323-1.974 0l-3 1.772c-2.148 1.276-3.442.323-2.881-2.122l.706-3.102c.134-.577-.106-1.396-.52-1.826L1.351 9.886C-.116 8.408.364 6.918 2.405 6.582l3.187-.537c.534-.094 1.174-.564 1.414-1.048l1.76-3.545c.947-1.934 2.52-1.934 3.468-.013z"
        fill="#0165FC"
      />
    </Svg>
  )
}

export default RatingIcon;
