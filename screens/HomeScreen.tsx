import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';


// components
import AlbumCategory from '../components/AlbumCategory';

// data
import albumInfo from '../constants/data';



export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <FlatList
        data= { albumInfo }
        renderItem= {
          ({ item }) => <AlbumCategory title={ item.title } albums={ item.albums } /> 
        }
        keyExtractor={ (item) => item.id }
      />
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
