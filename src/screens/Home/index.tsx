import React, { useState, useEffect, useCallback } from "react";

import { View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Foundation } from "@expo/vector-icons";

import { AppText as Text } from "../../components/AppText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Checkbox } from "../../components/CheckBox";
import { ContentMenu } from "../../components/ContentMenu";
import { DeleteButton } from "../../components/DeleteButton";

import { tasksGetAll } from "../../storage/task/tasksGetAll";
import { taskCreate } from "../../storage/task/taskCreate";
import { taskRemoveById } from "../../storage/task/taskRemoveById";
import { updateTasksInStorage } from "../../storage/task/taskUpdate";

import { styles } from "./styles";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  // { task: "Limpar a casa", iscompleted: false },
  // { task: "Lavar o carro", iscompleted: false },

  async function fetchTasks() {
    try {
      const data = await tasksGetAll();
      setTaskList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCheckboxChange = async (index: any) => {
    const updatedTasks = taskList.map((item, idx) => {
      if (idx === index) {
        return { ...item, iscompleted: !item.iscompleted };
      }
      return item;
    });
    setTaskList(updatedTasks);
    await updateTasksInStorage(updatedTasks);
  };

  const handleDelete = async (index: number) => {
    const taskToDelete = taskList[index];
    await taskRemoveById(taskToDelete.id);
    setTaskList((prev) => prev.filter((_, idx) => idx !== index));
  };

  const addTask = async (newTask: string) => {
    await taskCreate(newTask);
    fetchTasks(); // Recarrega as tarefas após adicionar uma nova
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
