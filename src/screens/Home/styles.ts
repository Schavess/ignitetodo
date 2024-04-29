import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },
  textStyle: {
    color: "#f2f2f2",
    fontSize: 24,
    fontWeight: "500",
    maxWidth: "90%",
  },
  textContentMessage: {
    alignItems: "center",
  },
  textStyle2: {
    color: "#808080",
    fontSize: 14,
    maxWidth: "100%",
    fontWeight: "800",
    paddingBottom: 4,
  },
  textStyle3: {
    color: "#808080",
    fontWeight: "500",
    fontSize: 14,
    maxWidth: "100%",
  },

  input: {
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 5,
    height: 54,
  },
  textInput: {
    flex: 1,
    color: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-around",
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
  },
  content: {
    flex: 1,
    marginTop: 54,
    width: "83%",
    alignItems: "center",
  },
  taskContent: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#262626",
    marginBottom: 4,
  },
  taskText: {
    padding: 5,
    flex: 1,
    height: 54,
    fontSize: 14,
    textAlignVertical: "center",
    color: "#f2f2f2",
  },
  tachado: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#808080",
  },
});
