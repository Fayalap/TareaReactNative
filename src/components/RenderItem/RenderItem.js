import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import images from '../../assets/images';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function RenderItem({ item , index}) {
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

    const exists = favorites.some(
        film => film.Title === item.Title,
      );
  
      //Si la imagen no existe mostrara un texto indicando que no esta disponible
      return(
        <TouchableOpacity key={index}  onPress={() => navigateDetail(item)}>
      {!(item.Poster=="N/A"||item.Poster==null)?<Image source={{uri:item.Poster}} style={styles.poster} />:<Text style={styles.text}>No disponible</Text>}
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

