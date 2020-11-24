import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';

// ikinci commit
const FlatlistView = (props) => {
   // Fonksiyonel componentte => useState
   // Class component state = { }

   // hooks
   const [flatData, setFlatData] = useState(data);
   const [text, setText] = useState('');


   useEffect(() => {
      // İlk olarak burası çalışır

      // render içerisindeki görünümler çizildikten (renderlandıktan) sonra çalışır

      () => {
         // Bu sınıf kaldılırıldığında
         return false
      }

   }, [flatData])


   const handleSearch = (value) => {
      const yeniListe = flatData.filter((item) =>
         item.first_name.toLowerCase().includes(value.toLowerCase())
      );

      console.log('yeniListe -> ', yeniListe);

      if (value.length > 0) {
         setFlatData(yeniListe);
      } else {
         setFlatData(data);
      }
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <Text>Fonksiyonel Component</Text>
         <View style={{ flex: 1, paddingTop: 50 }}>
            <View
               style={{
                  height: 50,
                  justifyContent: 'center',
                  borderWidth: 1,
                  marginBottom: 12
               }}>
               <TextInput onChangeText={(value) => handleSearch(value)} />
            </View>
            <FlatList
               data={flatData}
               keyExtractor={(item, index) => 'flatList' + index}
               ItemSeparatorComponent={() => <View style={{ height: 1, width: '100%', backgroundColor: 'gray' }} />}
               renderItem={({ item }, index) => {
                  return (
                     <Text
                        style={{
                           height: 50
                        }}
                        key={index}>
                        {item.first_name}
                     </Text>
                  );
               }}
            />
         </View>
      </SafeAreaView>
   );
};

export default FlatlistView;

const data = [
   {
      first_name: 'Fionna',
      last_name: 'Monteaux'
   },
   {
      first_name: 'Jesselyn',
      last_name: 'Barwis'
   },
   {
      first_name: 'Vinny',
      last_name: 'Arnaldo'
   },
   {
      first_name: 'Tandy',
      last_name: 'Geaves'
   },
   {
      first_name: 'Ramsey',
      last_name: 'Welband'
   },
   {
      first_name: 'Rachael',
      last_name: 'Flamank'
   },
   {
      first_name: 'Rodney',
      last_name: 'Jewell'
   },
   {
      first_name: 'Parry',
      last_name: 'Benoit'
   },
   {
      first_name: 'Tuck',
      last_name: 'Cannop'
   },
   {
      first_name: 'Olympia',
      last_name: 'McCrillis'
   },
   {
      first_name: 'Marietta',
      last_name: 'Pevsner'
   },
   {
      first_name: 'Craggy',
      last_name: 'Jirus'
   },
   {
      first_name: 'Tracy',
      last_name: 'Grogan'
   },
   {
      first_name: 'Roderigo',
      last_name: 'Leggan'
   },
   {
      first_name: 'Ashlin',
      last_name: 'Sellwood'
   },
   {
      first_name: 'Lezlie',
      last_name: 'Droogan'
   },
   {
      first_name: 'Etty',
      last_name: 'Shayler'
   },
   {
      first_name: 'Gib',
      last_name: 'Offell'
   },
   {
      first_name: 'Annalee',
      last_name: 'Fenty'
   },
   {
      first_name: 'Cookie',
      last_name: 'Tooker'
   },
   {
      first_name: 'Rodney',
      last_name: 'Jewell'
   },
   {
      first_name: 'Parry',
      last_name: 'Benoit'
   },
   {
      first_name: 'Tuck',
      last_name: 'Cannop'
   },
   {
      first_name: 'Olympia',
      last_name: 'McCrillis'
   },
   {
      first_name: 'Marietta',
      last_name: 'Pevsner'
   },
   {
      first_name: 'Craggy',
      last_name: 'Jirus'
   },
   {
      first_name: 'Tracy',
      last_name: 'Grogan'
   },
   {
      first_name: 'Roderigo',
      last_name: 'Leggan'
   },
   {
      first_name: 'Ashlin',
      last_name: 'Sellwood'
   },
   {
      first_name: 'Lezlie',
      last_name: 'Droogan'
   },
   {
      first_name: 'Etty',
      last_name: 'Shayler'
   },
   {
      first_name: 'Gib',
      last_name: 'Offell'
   },
   {
      first_name: 'Annalee',
      last_name: 'Fenty'
   },
   {
      first_name: 'Cookie',
      last_name: 'Tooker'
   }
];
