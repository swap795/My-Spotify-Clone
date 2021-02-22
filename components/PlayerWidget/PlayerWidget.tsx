import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import { Song } from "../../types";
import Colors from '../../constants/Colors';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';


// const song = {
//    id: '1',
//    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
//    title: 'Song title',
//    artist: 'Taylor Swift'
// }

const song = {
   id: '1',
   uri: "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
   imageUri: "https://prosearch.tribeofnoise.com/dist/images/artist-banner.jpg",
   title: 'Good Friends',
   artist: 'Aprilann',
}



function PlayerWidget() {
   const [isPlaying, setIsPlaying] = useState(true);
   const [sound, setSound] = useState<Sound|null>(null);
   const [progressPosition, setProgressPosition] = useState(0);
   const [duration, setDuration] = useState(0);

   const onPlaybackStatusUpdate = (status) => {
      console.log(status);
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setProgressPosition(status.positionMillis);
   }

   const playCurrentSong = async () => {
      if (sound) {
         await sound.unloadAsync();
      }

      const { sound: newSound } = await Sound.createAsync(
         { uri: song.uri },
         { shouldPlay: true },
         onPlaybackStatusUpdate
      )

      setSound(newSound);
   }

   useEffect(() => {
      playCurrentSong();
   }, [])

   const playPauseHandler = async () => {
      if (!sound) {
         return;
      } 

      if (isPlaying) {
         await sound.stopAsync();
      } else {
         await sound.playAsync();
      }
   }

   const getProgress = () => {
      if (sound === null || duration === null || progressPosition === null) {
         return 0;
      }
      return (progressPosition / duration) * 100;
   }

   return (
      <View style={styles.container}>
         <View style={[styles.progressBar, { width: `${getProgress()}%` }]} />
         <View style={styles.row}>
            <Image 
               source={{ uri: song.imageUri }} 
               style={ styles.pic }
            />
            <View style={styles.rightContainer}>
               <View style={styles.nameContainer}>
                  <Text style={ styles.title }>{song.title}</Text>
                  <Text style={ styles.artist }>{song.artist}</Text>
               </View>
               <View style={ styles.iconsContainer }>
                  <AntDesign name="hearto" size={30} color={"white"} />
                  <TouchableOpacity onPress={playPauseHandler}>
                     <FontAwesome name={ isPlaying ? "pause" : "play" } size={24} color={"white"} />
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      position: 'absolute',
      bottom: 78,
      width: '100%',
      backgroundColor: '#131313',
      borderWidth: 3,
      borderColor: 'black',
   },
   progressBar: {
      height: 5,
      backgroundColor: '#d0cccc',
   },
   row: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   pic: {
      width: 75,
      height: 75,
      margin: 2,
   },
   rightContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
   },
   nameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      margin: 15,
   },
   artist: {
      color: 'lightgray',
      fontSize: 14,
   },
   iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 100,
      justifyContent: 'space-around',
      marginRight: 12,
   },
})

export default PlayerWidget
