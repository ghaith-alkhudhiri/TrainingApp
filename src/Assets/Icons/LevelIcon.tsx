import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LevelIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M17.68 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75zM7.32 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75zM13.93 11.25h-2.86v1.5h2.86v-1.5zM23 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75zM2 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75z"
        fill="#0165FC"
      />
    </Svg>
  )
}

export default LevelIcon
