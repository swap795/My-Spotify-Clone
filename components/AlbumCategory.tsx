import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import AlbumInfo from '../components/AlbumInfo';
import { Album } from '../types';

export type AlbumCategoryProps = {
   title: string,
   albums: [Album],
}

const AlbumCategory = (props: AlbumCategoryProps) => (
   <View style={ styles.container }>
      <Text style={ styles.title }>{ props.title }</Text>
      <FlatList
         data= { props.albums }
         renderItem= {
            ({ item }) => <AlbumInfo album={ item } />
         }
         keyExtractor={ (item) => item.id }
         horizontal
      />
   </View>
)

const styles = StyleSheet.create({
   container: {
      width: 400,
   },
   title: {
      margin: 10,
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
   },
});

export default AlbumCategory
