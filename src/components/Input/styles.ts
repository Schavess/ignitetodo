import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    display: "flex",
    width: "83%",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignContent: "center",
    marginTop: -27,
  },
  textInput: {
    flex: 1,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#262626",
    padding: 15,
    fontSize: 16,
    color: "#f2f2f2", // fontFamily: "Inter",
  },
  button: {
    alignItems: "center",
    justifyContent: "space-around",
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    marginLeft: 4,
  },
});
