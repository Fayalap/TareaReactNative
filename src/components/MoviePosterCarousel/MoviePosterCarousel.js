import { View, Image , FlatList} from 'react-native'
import React from 'react'
import styles from './styles';

export default function MoviePosterCarousel({ movies }) {
    const renderItem = ({ item }) => (
        <Image source={{uri:item.Poster}} style={styles.poster} />
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