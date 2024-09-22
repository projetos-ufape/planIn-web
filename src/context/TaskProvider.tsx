import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { NewTaskProps, TaskProps } from "../types/TaskPorps";
import { useAuth } from "../hooks/useAuth";

export interface TaskContextProps {
  isLoadingTask: boolean;
  tasks: TaskProps[];
  createTask: (body: NewTaskProps) => Promise<void>;
  getTasks: () => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
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

  async function deleteTask(id: string) {
    setIsLoadingTask(true);
    await api.delete(`tasks/${id}`).then(() => {
      toast.success("Task removida com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      getTasks();
    });
  }

  useEffect(() => {
    if (user?.id){
      getTasks();
    }
  }, [user]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        isLoadingTask,
        getTasks,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
