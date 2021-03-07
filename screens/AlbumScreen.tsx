import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';

import AlbumHeader from '../components/AlbumHeader/AlbumHeader';
import Songs from '../components/SongList/Songs';
import songData from '../constants/songData';


import { API, graphqlOperation } from 'aws-amplify';
import { getAlbum } from '../src/graphql/queries'

function AlbumScreen() {

   const route = useRoute();
   const albumId = route?.params?.id;

   const [album, setAlbum] = useState();

   useEffect(() => {
      const fetchAlbumDetails = async () => {
         try {
            const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }));
            console.log(data);
            setAlbum(data.data.getAlbum)
         } catch (e) {
            console.log(e);
         }
      }

      fetchAlbumDetails();
   }, [])


   if (!album) {
      return <Text>Loading...</Text>
   }

   return (
      <View>
         <FlatList
            data={album?.songs?.items}
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
