import { View, Text,ScrollView,TextInput, Image, TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'
import images from '../../assets/images'
import fetchDataSearch from '../../services/fetchDataSearch'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, reset } from '../../redux/actions'
import MoviePosterCarousel from '../../components/MoviePosterCarousel/MoviePosterCarousel'

export default function SearchScreen() {
  const dispatch=useDispatch()
  const [searchText,setSearchText]=useState();
  const [filmSearch,setFilmSearch]=useState(null);
  const films=useSelector(state=>state.films)
  async function getFilm() {
    try {
      const response = await fetchDataSearch(searchText);
      console.log(response);
      setFilmSearch(response);
      dispatch(addFilm(response));
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }
  useEffect(()=>{
    console.log(filmSearch);
    console.log(films.length)
  },[filmSearch])

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
        {filmSearch&&<TouchableOpacity style={styles.coverFilmContainer}>
        <Image source={{uri:filmSearch.Poster}} style={styles.coverFilm} />
        </TouchableOpacity>}
        <Text style={styles.textCarousel}>Busquedas Recientes</Text>
        <MoviePosterCarousel movies={films}/>
        <Text style={styles.textCarousel}>Favoritos</Text>

        <MoviePosterCarousel movies={films}/>

      </View>
    </ScrollView>
  )
}