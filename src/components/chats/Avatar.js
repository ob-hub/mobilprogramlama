import { Image, View } from 'react-native';
import React from 'react';

const Avatar = ({avatar, ...props }) => {
   return (
      <View style={{ flex: 0, borderRadius: 100, overflow: 'hidden',marginRight: 8}}>
         <Image
            style={{
               width: 70,
               height: 70
            }}
            source={{ uri: 'https://picsum.photos/200/300' }}
         />
      </View>
   );
};

export default Avatar
