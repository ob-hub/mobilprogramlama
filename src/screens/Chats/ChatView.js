import React, { useEffect, useState } from 'react';
import {
   Dimensions,
   FlatList,
   ImageBackground,
   KeyboardAvoidingView,
   Pressable,
   SafeAreaView,
   Text,
   TextInput,
   View
} from 'react-native';
import _ from 'lodash';
import faker from 'faker';
import SendIcon from '../../resources/icons/SendIcon';

faker.locale = 'tr';

const { width, height } = Dimensions.get('window');

const firstRender = true;
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
      console.log(message.length);
      if (message.length > 0) {
         setMessage('');
      }
   }, [data]);
   // 211 219 220
   const _renderItem = ({ item }) => {
      return (
         <View
            style={{
               width: '84%',
               marginBottom: 5,
               alignSelf: item.sender ? 'flex-end' : 'flex-start',
               backgroundColor: item.sender ? 'rgb(30,87,87)' : 'rgb(35,40,43)',
               padding: 8,
               borderRadius: 12,
               marginRight: item.sender ? 8 : null,
               marginLeft: item.sender ? null : 8
            }}>
            <Text style={{ color: 'rgb(211,219,220)' }}>{item.message}</Text>
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
            <KeyboardAvoidingView
               style={{ flex: 1 }}
               behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
               keyboardVerticalOffset={100}>
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
                        borderRadius: 4,
                        marginRight: '2%',
                        paddingHorizontal: '4%',
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}
                     onPress={() => setData((prev) => [{ message: message, sender: true }, ...prev])}>
                     <SendIcon height={28} width={28} />
                  </Pressable>
               </View>
            </KeyboardAvoidingView>
         </ImageBackground>
      </SafeAreaView>
   );
};

export default ChatView;
