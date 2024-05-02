import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "../storageConfig";

type Task = {
  id: number;
  task: string;
  iscompleted: boolean;
};

export async function tasksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks: Task[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
}
