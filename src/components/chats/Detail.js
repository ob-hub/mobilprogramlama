import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const Detail = ({ name, description, isMark, props }) => {
   return (
      <View style={styles.container}>
         <View style={styles.firstContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={[styles.date, { color: isMark ? 'black' : 'green' }]}>20:18</Text>
         </View>

         <View style={styles.secondContainer}>
            <Text style={styles.description}>{description}</Text>
            {isMark === false && (
               <View style={[styles.radiusView]}>
                  <Text style={styles.okunmamisMesajSayisi}>2</Text>
               </View>
            )}
         </View>
      </View>
   );
};

export default Detail;

const styles = StyleSheet.create({
   container: { flex: 1, justifyContent: 'center' },
   firstContainer: { flexDirection: 'row', marginBottom: 5 },
   secondContainer: { flexDirection: 'row' },
   name: { flex: 1, fontWeight: 'bold' },
   date: { flex: 0, color: 'green' },
   description: { flex: 1, fontWeight: '300' },
   radiusView: {
      width: 20,
      height: 20,
      borderRadius: 100,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center'
   },
   okunmamisMesajSayisi: { flex: 0, color: 'white' }
});
