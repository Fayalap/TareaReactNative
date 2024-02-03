import { View, Image , FlatList, TouchableOpacity ,Text} from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../assets/images';
import { addFavorite, removeFavorite } from '../../redux/actions';

export default function MoviePosterCarousel({ isCarousel , isFavoriteScreen }) {
  const navigation=useNavigation()
  const dispatch=useDispatch()
  
  // Obtenemos todas las películas buscadas anteriormente utilizando el estado global de Redux.
  const films=useSelector(state=>state.films)
  
  // Obtenemos todas las películas favoritas utilizando el estado global de Redux.
  const favorites=useSelector(state=>state.favorites)

  //Navegamos a DetailsScreen con la película seleccionada pasada por props
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

  const renderItem = function({ item }) {
    const exists = favorites.some(
      film => film.Title === item.Title
    );
  
    // Si la imagen no existe, muestra un texto indicando que no está disponible
    return (
      <TouchableOpacity  key={item.imdbID} style={styles.posterContainer} onPress={() => navigateDetail(item)}>
        {!(item.Poster == "N/A" || item.Poster == null) ? (
          <Image source={{ uri: item.Poster }} style={styles.poster} />
        ) : (
            <Text style={styles.text}>Imagen no disponible. {item.Title}</Text>
        )}
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
    );
  };
  

      const keyExtractor = item => item.imdbID;

  return (
    <View style={styles.container}>
        <FlatList
        data={isFavoriteScreen?favorites:films}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={isCarousel?true:false}
        numColumns={isCarousel?0:3}
    />
    </View>
  )
}