import { View, Text ,FlatList, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import TopBar from '../../navigation/TopBar'
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import { useSelector } from 'react-redux';
import RenderItem from '../../components/RenderItem/RenderItem';

export default function ListScreen() {
  const route = useRoute();
  
  // Obtenemos todas las películas buscadas anteriormente utilizando el estado global de Redux.
  const favorites=useSelector(state=>state.favorites)

  // Recuperamos los props a través de useRoute
  const { isFavoriteScreen, films } = route.params.props;

  //const keyExtractor = item => item.imdbID;

  return (
    <View style={styles.container}>
      <TopBar isFavoriteScreen={isFavoriteScreen} />
      <FlatList
        data={isFavoriteScreen?favorites:films}
        renderItem={RenderItem}
        //keyExtractor={keyExtractor}
        numColumns={3}

      />    
    </View>
  )
}