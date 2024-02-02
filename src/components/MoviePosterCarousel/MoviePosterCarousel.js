import { View, Image , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function MoviePosterCarousel({ movies }) {
  const navigation=useNavigation()

  function navigateDetail(film) {
    navigation.replace("DetailsScreen", { 
      props: {
        "film":film,
      }
    })
  }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>navigateDetail(item)}>
          <Image source={{uri:item.Poster}} style={styles.poster} />
        </TouchableOpacity>
      );
      const keyExtractor = item => item.imdbID;

  return (
    <View style={styles.container}>
        <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
    />
    </View>
  )
}