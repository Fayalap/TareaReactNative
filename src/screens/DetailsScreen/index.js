import { Text, View , Image, ScrollView, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import TopBar from '../../navigation/TopBar';
import styles from './styles';
import images from '../../assets/images';

export default function DetailsScreen() {
  const route = useRoute();
  const { film } = route.params.props;

  // Función para abrir el cliente de correo electrónico con la información de la película
  const shareFilmByEmail = async () => {
    const description = `${film.Plot}\n${film.Actors}`;
    const emailSubject = film.Title;
    const emailBody = description;
    const emailAddress = 'fayalapps@gmail.com';
    const emailUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

    try {
      await Linking.openURL(emailUrl);
    } catch (error) {
      console.error('Error al abrir el cliente de correo electrónico:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Barra de navegación superior */}
        <TopBar />

        {/* Poster de la película y botón para enviar por correo */}
        {film && (
          <View style={styles.posterContainer}>
            {!(film.Poster == 'N/A' || film.Poster == null) ? (
              <Image style={styles.poster} source={{ uri: film.Poster }} />
            ) : (
              <View style={styles.coverNotFilmContainer}>
                <Text style={styles.textNotFilm}>No disponible</Text>
              </View>
            )}
            <TouchableOpacity style={styles.sendEmailContainer} onPress={shareFilmByEmail}>
              <Image style={styles.sendEmail} source={images.enviarCorreo} />
            </TouchableOpacity>
          </View>
        )}

        {/* Detalles de la película */}
        <Text style={styles.textTitle}>{film.Title}</Text>
        <Text style={styles.text}>{film.Released}</Text>
        <Text style={styles.text}>{film.Genre}</Text>
        <Text style={styles.text}>Rating {film.imdbRating}</Text>
        <Text style={styles.textTitle}>Historia</Text>
        <Text style={styles.text}>{film.Plot}</Text>
        <Text style={styles.textTitle}>Director</Text>
        <Text style={styles.text}>{film.Director}</Text>
        <Text style={styles.textTitle}>Actores</Text>
        <Text style={styles.text}>{film.Actors}</Text>
        <Text style={styles.textTitle}>Lenguajes</Text>
        <Text style={styles.text}>{film.Language}</Text>
      </View>
    </ScrollView>
  );
}