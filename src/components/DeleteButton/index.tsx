import React from "react";
import { TouchableOpacity } from "react-native";
import { AppText as Text } from "../../components/AppText";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

interface DeleteButtonProps {
  label?: string;
  index: number;
  onDelete: (index: number) => void; // Aceita um número como argumento
}

export const DeleteButton = ({ onDelete, label, index }: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onDelete(index)}>
      <Feather name="trash-2" size={24} color="#808080" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
