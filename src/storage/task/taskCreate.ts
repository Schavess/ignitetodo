import AsyncStorage from "@react-native-async-storage/async-storage";
import { tasksGetAll } from "./tasksGetAll";
import { TASK_COLLECTION } from "../storageConfig";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export async function taskCreate(newTaskString: string) {
  try {
    const storedTasks = await tasksGetAll(); // Busca tarefas existentes.

    // Determina o próximo ID com base no maior ID existente.
    const nextId =
      storedTasks.reduce((maxId, task) => Math.max(task.id, maxId), 0) + 1;

    // Cria a nova tarefa como um objeto Task.
    const newTask: Task = {
      id: nextId,
      task: newTaskString,
      iscompleted: false, // Assume que a nova tarefa não está completa.
    };

    // Adiciona a nova tarefa ao array existente de tarefas.
    const updatedTasks = [...storedTasks, newTask];
    const updatedStorage = JSON.stringify(updatedTasks);

    // Atualiza o AsyncStorage com o novo array de tarefas.
    await AsyncStorage.setItem(TASK_COLLECTION, updatedStorage);
  } catch (error) {
    console.error("Failed to create a new task", error);
  }
}
