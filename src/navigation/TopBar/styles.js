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
    fontSize:16,
    fontWeight:"800",
    color:"black",
    width:"100%",
    textAlign:"center",
  },
  textBack: {
    fontSize:16,
    fontWeight:"800",
    color:"black",
    textAlign:"center",
  },
  backImageContainer:{
    flexDirection:"row",
    width:40,
    height:40,
    alignItems:"center",

  },
  backImage:{
    width:"90%",
    height:"90%",
  }
});
export default styles;
