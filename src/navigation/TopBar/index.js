import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';
import images from '../../assets/images';
import { useNavigation } from '@react-navigation/native';
const TopBar = () => {
  const navigation=useNavigation();

  function navigateBack() {
    navigation.replace("SearchScreen")
  }
  

  return (
    <View style={styles.container}>
      <TouchableOpacity styles={styles.backImageContainer} onPress={navigateBack}>
      <Image styles={styles.backImage} source={images.back} />
      </TouchableOpacity>
      <Text style={styles.text}>TopBar</Text>
    </View>
  )
}

export default TopBar;