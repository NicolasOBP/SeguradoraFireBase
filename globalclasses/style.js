import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  titulo: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  textotitu: {
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
  },
  form: {
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "70%",
    gap: 5,
  },
  forminput: {
    color: "white",
    backgroundColor: "blue",
    paddingHorizontal: 10,
    width: 300,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
  buton: {
    backgroundColor: "rgba(16, 16, 168, 0.4)",
    padding: 10,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 2,
  },
  btnbox: {
    backgroundColor: "purple",
    padding: 5,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});

export const cards = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    height: "40%",
    marginBottom: 10,
    backgroundColor: "#099ff6",
    alignContent: "space-around",
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 3,

    shadowColor: "purple",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 200,
    shadowOpacity: 1,
    elevation: 10,
  },
  img: {
    height: "100%",
    width: 100,
    borderRadius: 6,
  },
  texto: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    width: "65%",
  },
});

export const item = StyleSheet.create({
  box: {
    borderColor: "red",
    borderWidth: 3,
    marginBottom: 7,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    height: 90,
  },
  text: {
    fontSize: 20,
    maxWidth: "75%",
    paddingLeft: 4,
  },
});
export const detalhess = StyleSheet.create({
  container: {
    paddingTop: 5,
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
  },
  titulo: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  textotitu: {
    color: "white",
    fontSize: 24,
    fontFamily: "Roboto_700Bold",
  },
  containerInfo: {
    flexDirection: "column",
    width: "92%",
    marginBottom: 10,
    backgroundColor: "#099ff6",
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 3,

    shadowColor: "red",
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 200,
    shadowOpacity: 1,
    elevation: 10,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 2,
    marginBottom: 2,
  },
  subtitu: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontFamily: "Roboto_700Bold",
    backgroundColor: "blue",
  },
});
