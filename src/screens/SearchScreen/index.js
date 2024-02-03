import { View, Text,ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { useState } from 'react'
import images from '../../assets/images'
import fetchDataSearch from '../../services/fetchDataSearch'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm } from '../../redux/actions'
import MoviePosters from '../../components/MoviePosters/MoviePosters'
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const dispatch=useDispatch()
  const navigation=useNavigation();

  // - Estado del texto de input.
  const [searchText,setSearchText]=useState();
  // Obtenemos todas las películas buscadas anteriormente utilizando el estado global de Redux.
  const films=useSelector(state=>state.films)
  // - Estado de la ultima pelicula buscada.
  const [filmSearch,setFilmSearch]=useState(films[films.length-1]);

// Realizamos una llamada a la API utilizando el servicio fetchDataSearch.
// Después de obtener la respuesta, actualizamos el estado local y global con los datos de la película.
  async function getFilm() {
    try {
      const data = await fetchDataSearch(searchText);
      if(data.Response=="True"){
        setFilmSearch(data);
        dispatch(addFilm(data));
        return data;
      }
    
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
      }
    })
  }

  
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.page}>
                
        {/* Input superior para buscar las peliculas. */}
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

        {/* Poster de la película buscada, con texto en caso de no estar disponible. */}
        {filmSearch&&<TouchableOpacity style={styles.coverFilmContainer} onPress={navigateDetail}>
          {!(filmSearch.Poster == "N/A" || filmSearch.Poster == null )?<Image source={{uri:filmSearch.Poster}} style={styles.coverFilm}/>:(
          <TouchableOpacity style={styles.coverNotFilmContainer} onPress={navigateDetail}>           
            <Text style={styles.textNotFilm}>No disponible</Text>
          </TouchableOpacity>
            )}
        </TouchableOpacity>}

        {/* Carrousel de busquedas recientes con boton ver todo. */}
        <View style={styles.containerTitleCarousel}>
          <Text style={styles.textCarousel}>Busquedas Recientes</Text>
          <TouchableOpacity onPress={()=>{navigateList(false)}} style={styles.button}>
            <Text style={styles.buttonText}>Ver todo</Text>
          </TouchableOpacity>        
        </View>
        <MoviePosters isCarousel={true} isFavoriteScreen={false}/>

        {/* Carrousel de favoritos con boton ver todo. */}
        <View style={styles.containerTitleCarousel}>
          <Text style={styles.textCarousel}>Favoritos</Text>
          <TouchableOpacity onPress={()=>{navigateList(true)}} style={styles.button}>
            <Text style={styles.buttonText}>Ver todo</Text>
          </TouchableOpacity>        
        </View>
        <MoviePosters isCarousel={true} isFavoriteScreen={true}/>
        
      </View>
    </ScrollView>
  )
}