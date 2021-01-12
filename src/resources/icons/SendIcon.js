import React from 'react';
import Svg, { Path } from 'react-native-svg';

function SendIcon({ color = 'black', width = 18, height = 18, ...props }) {
   return (
      <Svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" width={width} height={height} {...props}>
         <Path d="M0 0h24v24H0V0z" fill="none" />
         <Path d="M3.4 20.4l17.45-7.48a1 1 0 000-1.84L3.4 3.6a.993.993 0 00-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
      </Svg>
   );
}

export default SendIcon;