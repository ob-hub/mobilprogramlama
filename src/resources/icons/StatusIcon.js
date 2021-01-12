import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent({ color = 'black', width = 18, height = 18, ...props }) {
   return (
      <Svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" width={width} height={height} {...props}>
         <G fill="none">
            <Path d="M0 0h24v24H0z" />
            <Path d="M0 0h24v24H0z" />
         </G>
         <Path d="M10.75 8c-.41 0-.75.34-.75.75v4.69c0 .35.18.67.47.85l3.64 2.24a.713.713 0 10.74-1.22L11.5 13.3V8.75c0-.41-.34-.75-.75-.75z" />
         <Path d="M17.92 12A6.957 6.957 0 0111 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 008.94-10h-2.02z" />
         <Path d="M22 5h-2V3c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1z" />
      </Svg>
   );
}

export default SvgComponent;
