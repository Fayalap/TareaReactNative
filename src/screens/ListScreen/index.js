import { View } from 'react-native'
import React from 'react'
import TopBar from '../../navigation/TopBar'
import styles from './styles';
import MoviePosters from '../../components/MoviePosters/MoviePosters';
import { useRoute } from '@react-navigation/native';

export default function ListScreen() {
  const route = useRoute();
  // Recuperamos el props a través de useRoute
  const { isFavoriteScreen } = route.params.props;

  return (
    <View style={styles.container}>
      <TopBar isFavoriteScreen={isFavoriteScreen} />
      <MoviePosters isCarousel={false} isFavoriteScreen={isFavoriteScreen}  />
    </View>
  )
}