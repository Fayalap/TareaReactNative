import {StyleSheet} from 'react-native';
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
  poster: {
    width: 100,
    height: 150,
    marginHorizontal: 5,
  },
  text: {
    marginTop: 40,
    fontSize: 14,
    width: 80,
    marginHorizontal: 6,
    fontWeight: "400",
    color: "black",
    textAlign: "center",
  },
});

export default styles;
