import { View, Image , FlatList, TouchableOpacity ,Text} from 'react-native'
import React from 'react'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import images from '../../assets/images';
import { addFavorite, removeFavorite } from '../../redux/actions';
import RenderItem from '../RenderItem/RenderItem.js';

export default function MoviePosterCarousel({ movies }) {

  // //Despachamos la accion de agregar o quitar la pelicula seleccionada de favoritos.
  // function handleFavoriteAction(action) {
  //   return function(item) {
  //     dispatch(action(item));
  //   };
  // }
  // const addFavorites = handleFavoriteAction(addFavorite);
  // const removeFavorites = handleFavoriteAction(removeFavorite);



      //const keyExtractor = item => item.imdbID;

  return (
    <View style={styles.container}>
        <FlatList
        data={movies}
        renderItem={RenderItem}
        //keyExtractor={keyExtractor}
        horizontal
    />
    </View>
  )
}