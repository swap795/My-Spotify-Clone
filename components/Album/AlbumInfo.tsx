import React from 'react'
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Album } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
   album: Album;
}

function AlbumInfo(props: AlbumProps) {

   const navigation = useNavigation();
   
   const onPress = () => {
      navigation.navigate('AlbumScreen', { id: props.album.id })
   }

   return (
      <TouchableWithoutFeedback onPress={onPress}>
         <View style={ styles.container }>
            <Image style={ styles.pic } source={{ uri: props.album.imageUri }} />
            <Text style={ styles.title } >{ props.album.artistsHeadline }</Text>
         </View>
      </TouchableWithoutFeedback>
   )
}


const styles = StyleSheet.create({
   container: {
      width: 130,
      marginLeft: 10,
      marginRight: 10,
   },
   pic: {
      marginTop: 20,
      width: '100%',
      height: 130,
   },
   title: {
      marginTop: 10,
      fontSize: 13,
      fontWeight: 'bold',
      color: 'grey',
   },
});

export default AlbumInfo
