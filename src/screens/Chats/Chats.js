import React from 'react';
import { Image, Text, View } from 'react-native';

const Chats = (props) => {
   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingHorizontal:16, paddingVertical: 12 }}>
            {/*Avatar*/}
            <Avatar />
            {/*Detaylar*/}
            <Detail />
         </View>
      </View>
   );
};

export default Chats;

const Avatar = (props) => {
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

const Detail = (props) => {
   return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
         <View style={{ flexDirection: 'row',marginBottom: 5 }}>
            <Text style={{ flex: 1, fontWeight:'bold' }}>Mobil Proglama</Text>
            <Text style={{ flex: 0, color: 'green' }}>20:18</Text>
         </View>

         <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1, fontWeight: '300' }}>Merhaba herkese</Text>
            <View
               style={{
                  width: 20,
                  height: 20,
                  backgroundColor: 'green',
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center'
               }}>
               <Text style={{ flex: 0, color: 'white' }}>2</Text>
            </View>
         </View>
      </View>
   );
};
