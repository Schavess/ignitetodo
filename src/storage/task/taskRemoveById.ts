import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { tasksGetAll } from "./tasksGetAll";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export async function taskRemoveById(taskId: number) {
  try {
    const storedTasks = await tasksGetAll(); // Obtém todas as tarefas.

    // Filtra as tarefas para remover a tarefa com o ID especificado.
    const updatedTasks = storedTasks.filter((task) => task.id !== taskId);

    // Atualiza o AsyncStorage com o novo array de tarefas.
    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(updatedTasks));
  } catch (error) {
    console.error("Failed to remove the task", error);
    // Aqui você poderia lançar um erro personalizado ou outro tratamento conforme necessário.
    throw error;
  }
}
