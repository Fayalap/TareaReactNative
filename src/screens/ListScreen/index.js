import { View, Text ,FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import TopBar from '../../navigation/TopBar'
import { useRoute } from '@react-navigation/native';
import styles from './styles';


export default function ListScreen() {
  const route = useRoute();
  const { isFavoriteScreen, films, favorites } = route.params.props;
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigateDetail(item)}>
      {!(item.Poster=="N/A"||item.Poster==null)?<Image source={{uri:item.Poster}} style={styles.poster} />:<Text style={styles.text}>No disponible</Text>}
    </TouchableOpacity>
  );
  const keyExtractor = item => item.imdbID;

  return (
    <View style={styles.container}>
      <TopBar isFavoriteScreen={isFavoriteScreen} />
      <FlatList
        data={isFavoriteScreen?favorites:films}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={3}

      />    
    </View>
  )
}