import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import AlbumHeader from '../components/AlbumHeader/AlbumHeader';
import Songs from '../components/SongList/Songs';
import songData from '../constants/songData';

function AlbumScreen() {

   const route = useRoute();

   // useEffect(() => {
   //    // console.log(route);
   // }, [])

   return (
      <View>
         <FlatList
            data={songData.songs}
            renderItem={ ({ item }) => (
               <Songs song={item} />
            )}
            keyExtractor={ (item) => item.id}
            ListHeaderComponent={ () => <AlbumHeader album={songData} />}
         />
      </View>
   )
}

export default AlbumScreen
