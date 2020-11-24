import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';

class FlatlistViewClass extends Component {
   constructor(props) {
      super(props);

      this.state = {
         flatData: data
      };
   }

   handleSearch = (value) => {
      const { flatData } = this.state;

      const yeniListe = flatData.filter((item) => item.first_name.toLowerCase().includes(value.toLowerCase()));

      console.log('yeniListe -> ', yeniListe);

      if (value.length > 0) {
         this.setState({ flatData: yeniListe }); // Class componentte state değiştirme
         // setFlatData(yeniListe); Fonksiyonel componentte state değiştirme metodu
      } else {
         this.setState({ flatData: data });
      }
   };

   render() {
      //herhangibir işlem yapabilirim.

      const { flatData } = this.state;

      return (
         <SafeAreaView style={{ flex: 1 }}>
            <Text>Class Component</Text>
            <View style={{ flex: 1, paddingTop: 50 }}>
               <View
                  style={{
                     height: 50,
                     justifyContent: 'center',
                     borderWidth: 1,
                     marginBottom: 12
                  }}>
                  <TextInput onChangeText={(value) => this.handleSearch(value)} />
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
   }
}

export default FlatlistViewClass;

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
