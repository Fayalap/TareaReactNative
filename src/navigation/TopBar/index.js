import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';

const TopBar = ({isFavoriteScreen}) => {
  const navigation=useNavigation();

  function navigateBack() {
    navigation.replace("SearchScreen")
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backImageContainer} onPress={navigateBack}>
      <Image style={styles.backImage} source={images.back} />
      <Text style={styles.textBack}>Atrás</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{isFavoriteScreen?"Favoritos":"Busquedas recientes"}</Text>
    </View>
  )
}

export default TopBar;