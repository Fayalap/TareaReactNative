import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width:"100%",
    height:45,
    backgroundColor:"white",
    alignItems:"center",
  },
  text: {
    fontSize:18,
    fontWeight:"800",
    color:"black",
    width:"100%",
    textAlign:"center",
  },
  textBack: {
    fontSize:17,
    fontWeight:"800",
    color:"black",
    textAlign:"center",
  },
  backImageContainer:{
    width:60,
    height:40,
    flexDirection:"row",
    alignItems:"center",

  },
  backImage:{
    width:"70%",
    height:"70%",
  }
});
export default styles;
