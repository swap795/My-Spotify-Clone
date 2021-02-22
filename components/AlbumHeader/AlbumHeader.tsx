import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import albumCategory from '../../constants/albumData';
import { Album } from '../../types';

export type AlbumHeaderProps = {
   album: Album;
}


function AlbumHeader(props: AlbumHeaderProps) {

   const toggleButtonText = 'Play';

   return (
      <View style={styles.container}>
         <Image style={styles.coverImage} source={{ uri: props.album.imageUri }} />
         <Text style={styles.name}>{props.album.name}</Text>
         <View style={styles.creatorContainer}>
            <Text style={styles.creator}>By {props.album.by}</Text>
            <Text style={styles.likes}>{props.album.likes} likes</Text>
         </View>
         <TouchableOpacity>
            <View style={styles.button}>
               <Text style={styles.buttonText}>{toggleButtonText}</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      padding: 20,
   },
   coverImage: {
      width: 200,
      height: 200,
      margin: 15,
   },
   name: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
   },
   creatorContainer: {
      flexDirection: 'row',
      margin: 10,
   },
   creator: {
      color: 'lightgray',
      margin: 5,
      fontSize: 16,
   },
   likes: {
      color: 'lightgray',
      margin: 5,
      fontSize: 18,
   },
   button: {
      backgroundColor: '#1CD05D',
      height: 55,
      width: 175,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
   },
})

export default AlbumHeader
