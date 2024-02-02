import { View, Text,ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'
import images from '../../assets/images'
import fetchDataSearch from '../../services/fetchDataSearch'
import { useEffect } from 'react'

export default function SearchScreen() {
  const [searchText,setSearchText]=useState();
  const [filmSearch,setFilmSearch]=useState(null);

  async function getFilm() {
    try {
      const response = await fetchDataSearch(searchText);
      console.log(response);
      setFilmSearch(response);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }
  
  useEffect(()=>{
    console.log(filmSearch);

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
      </View>
    </ScrollView>
  )
}