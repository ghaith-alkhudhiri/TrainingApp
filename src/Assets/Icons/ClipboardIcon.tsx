import React, { Component } from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  fill?: string;
}

class ClipboardIcon extends Component<Props> {
  static defaultProps = {
    fill: '#0165FC'
  }
  render(){
    const {fill} = this.props;
    return (
      <Svg width="135" height="135" viewBox="0 0 135 135" fill="none">
        <Path d="M71.0295 11.67L15.0076 31.7508C13.0151 32.465 11.9789 34.6592 12.6931 36.6517L36.3326 102.602C37.0468 104.594 39.241 105.631 41.2335 104.916L97.2553 84.8356C99.2478 84.1214 100.284 81.9272 99.5699 79.9347L75.9303 13.9845C75.2161 11.992 73.0219 10.9558 71.0295 11.67Z" fill="white" stroke="#999999" stroke-miterlimit="10"/>
        <Path d="M70.2021 16.593L18.7746 35.0269C18.3496 35.1793 18.1286 35.6472 18.2809 36.0722L40.1989 97.2195C40.3513 97.6445 40.8192 97.8655 41.2442 97.7132L92.6717 79.2792C93.0966 79.1269 93.3177 78.6589 93.1653 78.2339L71.2473 17.0866C71.095 16.6616 70.627 16.4406 70.2021 16.593Z" fill="#F2F2F2"/>
        <Path d="M56.0078 14.409L43.9158 18.7437C44.3654 18.0121 44.4893 17.0892 44.1769 16.2164C43.6284 14.6858 41.9423 13.8895 40.413 14.438C38.8823 14.9864 38.0874 16.6726 38.6358 18.2019C38.9483 19.0746 39.6312 19.7075 40.4433 19.9883L28.3513 24.323C27.5642 24.6052 27.1555 25.4713 27.4377 26.2584L29.8621 33.0229C30.1443 33.81 31.0104 34.2186 31.7975 33.9365L59.454 24.0225C60.2411 23.7403 60.6485 22.8742 60.3663 22.0871L57.9419 15.3226C57.6597 14.5355 56.7949 14.1255 56.0078 14.4077V14.409ZM41.875 18.517C41.1526 18.7754 40.3576 18.3996 40.0979 17.6772C39.8382 16.9547 40.2152 16.1598 40.9377 15.9C41.6601 15.6403 42.4551 16.0174 42.7148 16.7398C42.9745 17.4623 42.5975 18.2573 41.875 18.517Z" fill={fill}/>
        <Path d="M106.14 39.9746H46.6279C44.5113 39.9746 42.7954 41.6905 42.7954 43.8071V113.866C42.7954 115.983 44.5113 117.698 46.6279 117.698H106.14C108.257 117.698 109.972 115.983 109.972 113.866V43.8071C109.972 41.6905 108.257 39.9746 106.14 39.9746Z" fill="white" stroke="#999999" stroke-miterlimit="10"/>
        <Path d="M103.7 44.3291H49.0681C48.6167 44.3291 48.2507 44.6951 48.2507 45.1465V110.103C48.2507 110.555 48.6167 110.921 49.0681 110.921H103.7C104.151 110.921 104.517 110.555 104.517 110.103V45.1465C104.517 44.6951 104.151 44.3291 103.7 44.3291Z" fill="#F2F2F2"/>
        <Path d="M91.075 37.4852H78.2289C78.8986 36.9473 79.3271 36.1207 79.3271 35.1939C79.3271 33.5684 78.0087 32.25 76.3845 32.25C74.7603 32.25 73.4419 33.5684 73.4419 35.1939C73.4419 36.1207 73.8704 36.9473 74.5401 37.4852H61.6954C60.8595 37.4852 60.1819 38.1628 60.1819 38.9987V46.1851C60.1819 47.0209 60.8595 47.6985 61.6954 47.6985H91.075C91.9108 47.6985 92.5872 47.0209 92.5872 46.1851V38.9987C92.5872 38.1628 91.9108 37.4852 91.075 37.4852ZM76.3845 36.5834C75.6172 36.5834 74.995 35.9612 74.995 35.1939C74.995 34.4266 75.6172 33.8043 76.3845 33.8043C77.1518 33.8043 77.7741 34.4266 77.7741 35.1939C77.7741 35.9612 77.1518 36.5834 76.3845 36.5834Z" fill={fill}/>
      </Svg>
    )
  }
};

export default ClipboardIcon;