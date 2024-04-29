import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import { AntDesign } from "@expo/vector-icons";

type InputProps = {
  onAddTask: (task: string) => void;
};

export function Input({ onAddTask }: InputProps) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <>
      <View style={styles.input}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          style={styles.textInput}
          placeholderTextColor="#808080"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}
