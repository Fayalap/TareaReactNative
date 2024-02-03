import { View, Text,ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'
import images from '../../assets/images'
import fetchDataSearch from '../../services/fetchDataSearch'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm } from '../../redux/actions'
import MoviePosterCarousel from '../../components/MoviePosterCarousel/MoviePosterCarousel'
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const dispatch=useDispatch()
  const navigation=useNavigation();

  // - Estado del texto de input.
  const [searchText,setSearchText]=useState();
  // - Estado de la ultima pelicula buscada.
  const [filmSearch,setFilmSearch]=useState(null);
  // Obtenemos todas las películas buscadas anteriormente utilizando el estado global de Redux.
  const films=useSelector(state=>state.films)
  // Obtenemos todas las películas favoritas utilizando el estado global de Redux.
  const favorites=useSelector(state=>state.favorites)

// Realizamos una llamada a la API utilizando el servicio fetchDataSearch.
// Después de obtener la respuesta, actualizamos el estado local y global con los datos de la película.
  async function getFilm() {
    try {
      const response = await fetchDataSearch(searchText);
      setFilmSearch(response);
      dispatch(addFilm(response));
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }

  // Al seleccionar la pelicula buscada nos redirigimos para ver sus detalles a DetailsScreen,
  // pasandole por props esta misma.
  function navigateDetail() {
    navigation.replace("DetailsScreen", { 
      props: {
        film:filmSearch,
      }
    })
  }

  
  // Al seleccionar el botón "Ver todo", nos redirigimos a ListScreen
  // donde veremos todas las películas del menú seleccionado.
  // Recibe un booleano que, cuando es verdadero, muestra la lista de películas favoritas,
  // y cuando es falso, muestra la lista de las películas buscadas recientemente. 
  function navigateList(bolean) {
    navigation.replace("ListScreen", { 
      props: {
        isFavoriteScreen: bolean,
        films:films,
      }
    })
  }

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.page}>
        <View style={styles.inputContainer}>
          <TextInput   
          selectionColor="black"
          placeholder="Buscar pelicula"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="gray"
          style={styles.input}/>
          <TouchableOpacity style={styles.imageInputContainer} onPress={getFilm}>
          <Image style={styles.imageInput} source={images.lupa}/>
          </TouchableOpacity>
        </View>
        {filmSearch&&<TouchableOpacity style={styles.coverFilmContainer} onPress={navigateDetail}>
        <Image source={{uri:filmSearch.Poster}} style={styles.coverFilm} />
        </TouchableOpacity>}
        <View style={styles.containerTitleCarousel}>
        <Text style={styles.textCarousel}>Busquedas Recientes</Text>
        <TouchableOpacity onPress={()=>{navigateList(false)}} style={styles.button}>
          <Text style={styles.buttonText}>Ver todo</Text>
        </TouchableOpacity>        
        </View>
        <MoviePosterCarousel movies={films}/>
        <View style={styles.containerTitleCarousel}>
        <Text style={styles.textCarousel}>Favoritos</Text>
        <TouchableOpacity onPress={()=>{navigateList(true)}} style={styles.button}>
          <Text style={styles.buttonText}>Ver todo</Text>
        </TouchableOpacity>        
        </View>
        <MoviePosterCarousel movies={favorites}/>

      </View>
    </ScrollView>
  )
}