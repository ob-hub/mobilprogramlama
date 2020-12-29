import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ImageBackground, Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import _ from 'lodash';
import faker from 'faker';

faker.locale = 'tr';

const { width, height } = Dimensions.get('window');

const firstRender = true
const ChatView = (props) => {
   const [data, setData] = useState([]);
   const [message, setMessage] = useState('');

   useEffect(() => {
      if (firstRender) {
         const name = props.route.params?.name ?? 'Veri gelmedi';

         props.navigation.setOptions({
            headerTitle: name
         });

         const fakerData = _.times(_.sample([5, 10, 15]), () => {
            return {
               message: faker.lorem.words(20),
               sender: _.sample([true, false])
            };
         });

         /* setTimeout(() => {
            setData((prev) => [...prev, { message: 'Merhaba Herkese', sender: true }]);
         }, 1000);*/

         setData(fakerData);
      }
   }, []);

   useEffect(() => {
      console.log(message.length)
      if (message.length > 0) {
         setMessage("")
      }
   }, [data])

   const _renderItem = ({ item }) => {
      return (
         <View style={{ width: '100%', marginBottom: 5 }}>
            <Text>{item.message}</Text>
         </View>
      );
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <ImageBackground
            style={{
               flex: 1,
               width: width,
               height: height
            }}
            source={require('../../../assets/img/whatsapp_background.png')}>
            <FlatList
               style={{ flex: 1 }}
               inverted={true}
               keyExtractor={(item, index) => index}
               data={data.reverse()}
               renderItem={_renderItem}
            />
            <View style={{ flexDirection: 'row' }}>
               <TextInput
                  style={{
                     flex: 1,
                     backgroundColor: 'white',
                     height: 40,
                     marginHorizontal: '2%',
                     marginTop: 10,
                     borderRadius: 20,
                     paddingLeft: 14,
                     fontSize: 18
                  }}
                  placeholder={'Bir mesaj yazın'}
                  value={message}
                  onChangeText={(val) => setMessage(val)}
               />
               <Pressable
                  style={{
                     flex: 0,
                     width: 80,
                     borderRadius: 4,
                     marginRight: '2%',
                     backgroundColor: 'orange',
                     justifyContent: 'center',
                     alignItems: 'center'
                  }}
                  onPress={() => setData((prev) => [{ message: message, sender: true }, ...prev])}>
                  <Text>Gönder</Text>
               </Pressable>
            </View>
         </ImageBackground>
      </SafeAreaView>
   );
};

export default ChatView;
