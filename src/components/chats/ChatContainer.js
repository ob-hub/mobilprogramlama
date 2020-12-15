import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Avatar from './Avatar';
import Detail from './Detail';
import _ from 'lodash';

const ChatContainer = ({ avatar, name, description, ...props }) => {
   const isMark = _.sample([false, true]);

   return (
      <Pressable onPress={() => alert(name)} style={styles.container}>
         <View style={styles.chatView}>
            {/*Avatar*/}
            <Avatar avatar={avatar} />
            {/*Detaylar*/}
            <Detail name={name} description={description} isMark={isMark} />
         </View>
      </Pressable>
   );
};

export default ChatContainer;

const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
   chatView: { flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 12 }
});
