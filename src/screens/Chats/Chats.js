import React from 'react';
import ChatContainer from '../../components/chats/ChatContainer';
import { FlatList } from 'react-native';

const Chats = (props) => {
   const _renderItem = ({ item, index }) => {
      return (
         <ChatContainer
            navigator={props.navigator}
            avatar={item.avatar}
            name={item.name}
            description={item.description}
         />
      );
   };

   return <FlatList keyExtractor={(item, index) => item.id} data={mockData} renderItem={_renderItem} />;
};

export default Chats;

const mockData = [
   {
      id: 1,
      avatar: 'http://dummyimage.com/104x120.bmp/dddddd/000000',
      name: 'Dion Somerville',
      description: 'Sybila Tomasik'
   },
   {
      id: 2,
      avatar: 'http://dummyimage.com/168x112.bmp/dddddd/000000',
      name: 'Valencia Ruddock',
      description: 'Sergeant McTerry'
   },
   {
      id: 3,
      avatar: 'http://dummyimage.com/148x243.png/cc0000/ffffff',
      name: 'Terrance Boner',
      description: 'Katusha Garwill'
   },
   {
      id: 4,
      avatar: 'http://dummyimage.com/241x201.jpg/5fa2dd/ffffff',
      name: 'Mamie Bennellick',
      description: 'Briano Pepon'
   },
   {
      id: 5,
      avatar: 'http://dummyimage.com/203x213.png/ff4444/ffffff',
      name: 'Hartley Kyngdon',
      description: 'Martie Matfin'
   },
   {
      id: 6,
      avatar: 'http://dummyimage.com/157x238.png/5fa2dd/ffffff',
      name: 'Winnah Vergo',
      description: 'Moses Comettoi'
   },
   {
      id: 7,
      avatar: 'http://dummyimage.com/155x143.bmp/dddddd/000000',
      name: 'Hannah Witty',
      description: 'Athene Bedham'
   },
   {
      id: 8,
      avatar: 'http://dummyimage.com/240x245.jpg/ff4444/ffffff',
      name: 'Tally Vail',
      description: 'Dieter Earley'
   },
   {
      id: 9,
      avatar: 'http://dummyimage.com/100x125.jpg/cc0000/ffffff',
      name: 'Kayle Feavyour',
      description: 'Doloritas Stolli'
   },
   {
      id: 10,
      avatar: 'http://dummyimage.com/100x216.png/dddddd/000000',
      name: 'Ferguson Whorall',
      description: 'Emmett Sappson'
   },
   {
      id: 11,
      avatar: 'http://dummyimage.com/245x181.png/cc0000/ffffff',
      name: 'Clement Redier',
      description: 'Jackie Whate'
   },
   {
      id: 12,
      avatar: 'http://dummyimage.com/141x246.png/5fa2dd/ffffff',
      name: 'Northrup De Andisie',
      description: 'Genia Speedin'
   },
   {
      id: 13,
      avatar: 'http://dummyimage.com/196x137.png/dddddd/000000',
      name: 'Bayard Eusden',
      description: 'Shepard Damper'
   },
   {
      id: 14,
      avatar: 'http://dummyimage.com/218x205.bmp/dddddd/000000',
      name: 'Gladys Galiero',
      description: 'Elga Surguine'
   },
   {
      id: 15,
      avatar: 'http://dummyimage.com/163x248.bmp/5fa2dd/ffffff',
      name: 'Tonnie Eastbury',
      description: 'Booth Lavalle'
   },
   {
      id: 16,
      avatar: 'http://dummyimage.com/187x209.jpg/5fa2dd/ffffff',
      name: 'Tiffie Crew',
      description: 'Sapphire Self'
   },
   {
      id: 17,
      avatar: 'http://dummyimage.com/155x127.bmp/cc0000/ffffff',
      name: 'Corey Gibson',
      description: 'Cara Flasby'
   },
   {
      id: 18,
      avatar: 'http://dummyimage.com/106x229.jpg/ff4444/ffffff',
      name: 'Prue Cotilard',
      description: 'Lanny Bezley'
   },
   {
      id: 19,
      avatar: 'http://dummyimage.com/245x247.png/dddddd/000000',
      name: 'Violante Selland',
      description: 'Philippe Cory'
   },
   {
      id: 20,
      avatar: 'http://dummyimage.com/215x188.jpg/dddddd/000000',
      name: 'Nevil Bristo',
      description: 'Alvan Matterdace'
   }
];
