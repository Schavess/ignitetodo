import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "../storageConfig";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export async function updateTasksInStorage(updatedTasks: Task[]) {
  try {
    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(updatedTasks));
  } catch (error) {
    console.error("Failed to update tasks in storage", error);
  }
}
