import * as React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

import { API, graphqlOperation } from 'aws-amplify';
import { listAlbumCategorys } from '../src/graphql/queries'

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';


// components
import AlbumCategory from '../components/AlbumCategory/AlbumCategory';

// data
import albumCategory from '../constants/albumData';



export default function HomeScreen() {

  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {

    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        // console.log(data);
        setCategories(data.data.listAlbumCategorys.items)
      } catch (e) {
        console.log(e);
      }

    }

    fetchAlbumCategories();
  }, [])

  return (
    <View style={ styles.container }>
      <FlatList
        data= { categories }
        renderItem= {({ item }) => (
          <AlbumCategory 
            title={ item.title } 
            albums={ item.Albums.items } 
          /> 
        )}
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
