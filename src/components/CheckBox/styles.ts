import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderColor: "#4EA8DE",
    borderRadius: 50,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  checkedCheckbox: {
    backgroundColor: "#5E60CE",
    borderColor: "#5E60CE",
  },
  label: {
    marginLeft: 8,
  },
  checkboxLabel: {
    color: "white",
    fontWeight: "bold",
  },
});
