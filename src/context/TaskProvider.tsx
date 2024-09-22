import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { NewTaskProps, TaskProps } from "../types/TaskPorps";

export interface TaskContextProps {
  isLoadingTask: boolean;
  tasks: TaskProps[];
  createTask(body: NewTaskProps): Promise<void>;
  getTasks(): Promise<void>;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [isLoadingTask, setIsLoadingTask] = useState(false);

  async function createTask(body: NewTaskProps) {
    setIsLoadingTask(true);
    await api.post("tasks", body).then(() => {
      toast.success("Task criada com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      getTasks();
    });
  }

  async function getTasks() {
    setIsLoadingTask(true);
    await api
      .get(`tasks`)
      .then((response) => {
        const { data }: { data: TaskProps[] } = response.data;
        setTasks(data);
      })
      .catch((err) => {
        handleError(err);
        setTasks([]);
      })
      .finally(() => {
        setIsLoadingTask(false);
      });
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        isLoadingTask,
        getTasks
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
