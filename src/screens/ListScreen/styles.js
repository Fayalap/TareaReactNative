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
  corazonContainer: {
    position: "absolute",
    top: 12,
    right: 8,
    zIndex: 4,
  },
  corazon: {
    width: 20,
    height: 20,
  },
  corazonBlanco: {
    width: 20,
    height: 20,
  },
  poster: {
    marginTop:10,
    width: itemWidth - 10,
    height: 150,
    marginHorizontal: 5,
  },
  text: {
    marginTop:40,
    fontSize:14,
    width:80,
    marginHorizontal:10,
    fontWeight:"400",
    color:"black",
    textAlign:"center",
  },
  
});
export default styles;
