import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Song } from "../../types";

export type SongsProps = {
   song: Song;
}

function Songs(props: SongsProps) {
   return (
      <View style={styles.container}>
         <Image 
            source={{ uri: props.song.imageUri }} 
            style={ styles.pic }
         />
         <View style={styles.rightContainer}>
            <Text style={ styles.title }>{'Song Title'}</Text>
            <Text style={ styles.artist }>{props.song.artist}</Text>
         </View>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      margin: 15,
   },
   rightContainer: {
      justifyContent: 'space-around',
      marginLeft: 20,
   },
   pic: {
      width: 75,
      height: 75,
   },
   title: {
      fontSize: 22,
      // fontWeight: 'bold',
      color: 'white',
   },
   artist: {
      color: 'lightgray',
      fontSize: 16,
   }
})

export default Songs
