import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function TicketIcon(props: any) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        stroke="#64748B"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19.5 13a2.5 2.5 0 012.5-2.5v-1c0-4-1-5-5-5H7c-4 0-5 1-5 5v.5a2.5 2.5 0 010 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 01-2.5-2.5z" />
        <Path d="M10 4.5v16" strokeDasharray="5 5" />
      </G>
    </Svg>
  )
}

export default TicketIcon
