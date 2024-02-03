import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const itemWidth = width / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginRight: 10,
    paddingLeft: 14,
  },
  corazonContainer: {
    position: "absolute",
    top: 2,
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
  posterContainer:{
    marginTop:10,

  },
  poster: {
    width: itemWidth - 14,
    height: 180,
    marginHorizontal: 4,
  },
  text: {
    marginTop: 40,
    fontSize: 12,
    width: 80,
    marginHorizontal: 6,
    fontWeight: "400",
    color: "black",
    textAlign: "center",
  },
});

export default styles;
