import React, { useState } from "react";

import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Foundation } from "@expo/vector-icons";

import { AppText as Text } from "../../components/AppText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/CheckBox";
import { ContentMenu } from "../../components/ContentMenu";
import { DeleteButton } from "../../components/DeleteButton";

import { styles } from "./styles";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  // { task: "Limpar a casa", fullfiled: false },
  // { task: "Lavar o carro", fullfiled: false },

  const handleCheckboxChange = (index: any) => {
    const updatedTasks = taskList.map((item, idx) => {
      if (idx === index) {
        return { ...item, fullfiled: !item.iscompleted };
      }
      return item;
    });
    setTaskList(updatedTasks);
  };

  function handleDelete(index: any) {
    setTaskList((prev) => prev.filter((_, idx) => idx !== index));
  }

  const addTask = (newTask: string) => {
    const newId = taskList.length + 1;
    setTaskList([
      ...taskList,
      { id: newId, task: newTask, iscompleted: false },
    ]);
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="light" />

        <Header />

        <Input onAddTask={addTask} />

        <View style={styles.content}>
          <ContentMenu
            totalTasks={taskList.length}
            totalTaskCompleted={taskList.filter((t) => t.iscompleted).length}
          />
          {taskList.length > 0 ? (
            taskList.map((task, index) => (
              <View key={index} style={styles.taskContent}>
                <Checkbox
                  isChecked={task.iscompleted}
                  onCheck={() => handleCheckboxChange(index)}
                />
                <Text
                  style={[
                    styles.taskText,
                    task.iscompleted ? styles.tachado : null,
                  ]}
                >
                  {task.task}
                </Text>
                <DeleteButton onDelete={handleDelete} index={index} />
              </View>
            ))
          ) : (
            <>
              <View style={styles.textContentMessage}>
                <Foundation
                  name="clipboard-notes"
                  size={64}
                  style={{ borderWidth: 3 }}
                  color="#808080"
                />
                <Text style={styles.textStyle2}>
                  Você ainda não têm tarefas cadastradas.
                </Text>
                <Text style={styles.textStyle3}>
                  Crie tarefas e organize seus itens a fazer.
                </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
}
