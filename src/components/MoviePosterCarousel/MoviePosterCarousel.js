import { View, Image , FlatList, TouchableOpacity ,Text} from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../assets/images';
import { addFavorite, removeFavorite } from '../../redux/actions';

export default function MoviePosterCarousel({ movies }) {

  const navigation=useNavigation()
  const dispatch=useDispatch()

  const favorites=useSelector(state=>state.favorites)

  function navigateDetail(film) {
    navigation.replace("DetailsScreen", { 
      props: {
        "film":film,
      }
    })
  }

  //Despachamos la accion de agregar o quitar la pelicula seleccionada de favoritos.
  function handleFavoriteAction(action) {
    return function(item) {
      dispatch(action(item));
    };
  }
  const addFavorites = handleFavoriteAction(addFavorite);
  const removeFavorites = handleFavoriteAction(removeFavorite);

    const renderItem = ({ item }) => {
      
      const exists = favorites.some(
        film => film.Title === item.Title,
      );
      return(
        <TouchableOpacity onPress={() => navigateDetail(item)}>
        <Image source={{ uri: item.Poster }} style={styles.poster} />
        {exists ? (
          <TouchableOpacity onPress={() => removeFavorites(item)} style={styles.corazonContainer}>
            <Image style={styles.corazon} source={images.corazon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => addFavorites(item)} style={styles.corazonContainer}>
            <Image style={styles.corazonBlanco} source={images.corazonBlanco} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      )};
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