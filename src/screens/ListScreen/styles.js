import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const itemWidth = width / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    paddingBottom:10,
  },
});
export default styles;
