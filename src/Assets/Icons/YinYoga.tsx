import * as React from "react"
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg"

function YinYoga(props) {
  return (
    <Svg
      width={45}
      height={31}
      viewBox="0 0 45 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0_539_35088)" d="M0 0H45V31H0z" />
      <Defs>
        <Pattern
          id="pattern0_539_35088"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_539_35088"
            transform="matrix(.00347 0 0 .00504 0 -.002)"
          />
        </Pattern>
        <Image
          id="image0_539_35088"
          width={288}
          height={199}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default YinYoga;