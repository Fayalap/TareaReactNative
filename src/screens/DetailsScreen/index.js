import { Text, View , Image, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import TopBar from '../../navigation/TopBar';
import styles from './styles';

export default function DetailsScreen() {
  const route = useRoute();
  const { film } = route.params.props;

  return (
    <ScrollView>
      <View style={styles.container}>
      <TopBar/>
      {film&&<View style={styles.posterContainer}>
        <Image style={styles.poster} source={{uri:film.Poster}}/>
        </View>}
      <Text style={styles.textTitle}>{film.Title}</Text>
      <Text style={styles.text}>{film.Released}</Text>
      <Text style={styles.text}>{film.Genre}</Text>
      <Text style={styles.text}>Rating {film.imdbRating}</Text>
      <Text style={styles.textTitle}>Historia</Text>
      <Text style={styles.text}>Rating {film.Plot}</Text>
      <Text style={styles.textTitle}>Actores</Text>
      <Text style={styles.text}>{film.Actors}</Text>

      </View>

    </ScrollView>
  )
}

