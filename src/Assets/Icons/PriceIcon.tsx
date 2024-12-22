import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PriceIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none        "
      {...props}
    >
      <Path
        d="M17.5 2h-10c-2.76 0-5 2.23-5 4.98v6.98c0 2.75 2.24 4.98 5 4.98H9c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5c2.76 0 5-2.23 5-4.98V6.98c0-2.75-2.24-4.98-5-4.98zm-9 10c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1z"
        fill="#0165FC"
      />
    </Svg>
  )
}

export default PriceIcon;
