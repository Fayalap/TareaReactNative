import { View, Text ,FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import TopBar from '../../navigation/TopBar'
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import images from '../../assets/images';
import { addFavorite, removeFavorite } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function ListScreen() {
  const dispatch=useDispatch()
  const route = useRoute();
  const favorites=useSelector(state=>state.favorites)

  const { isFavoriteScreen, films } = route.params.props;

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