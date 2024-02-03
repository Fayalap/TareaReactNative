import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
    paddingBottom:10,
  },
  textTitle: {
    fontSize:20,
    fontWeight:"700",
    color:"black",
    textAlign:"left",
    marginHorizontal:14,
  },
  text: {
    fontSize:16,
    fontWeight:"400",
    color:"black",
    textAlign:"left",
    marginHorizontal:14,
  },
  posterContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  poster:{
    marginBottom:5,
    width:255,
    height:380,
  },
  sendEmailContainer:{
    backgroundColor:"white",
    position:"absolute",
    top:6,
    right:44,
    width:40,
    height:37,
    borderRadius:8,

  },
  sendEmail:{
    width:36,
    height:36,
  },
  coverNotFilmContainer:{
    marginTop:10,
    width:180,
    height:280,
    borderWidth:2,
    borderColor:"gray",
    borderRadius:6,
  },
  textNotFilm:{
    marginTop:"50%",
    fontSize:18,
    fontWeight:"800",
    color:"black",
    textAlign:"center",
  },
});
export default styles;
