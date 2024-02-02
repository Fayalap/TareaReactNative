import { View, Text,ScrollView,TextInput, Image, TouchableOpacity,FlatList, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'
import images from '../../assets/images'
import fetchDataSearch from '../../services/fetchDataSearch'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, reset } from '../../redux/actions'
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

  function navigateDetail() {
    navigation.replace("DetailsScreen", { 
      props: {
        film:filmSearch,
      }
    })
  }

  function navigateList(bolean) {
    navigation.replace("ListScreen", { 
      props: {
        isFavoriteScreen: bolean,
        films:films,
        favorites:favorites,
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
        {filmSearch&&<Text>{filmSearch.Title}+"hola"</Text>}
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