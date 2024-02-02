import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  scrollView:{
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'lightgrey',
  },
  inputContainer:{
    marginTop:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
    width:"85%",
    height: 38,
    borderRadius: 4,
    borderWidth:2,
    borderColor:"gray",
  },
  input:{
    height: "120%",
    width:"84%",
    fontSize:14,
    color:"black",
  
  },
  imageInputContainer:{
    width:27,
    height:27,
  },
  imageInput:{
    width:27,
    height:27,
  },
  coverFilmContainer:{
    width:"80%",
    height:500,

  },
  coverFilm:{
    width:"100%",
    height:"100%",
  },
  headerFooterContainer: {
    marginVertical: 10,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
});

export default styles;
