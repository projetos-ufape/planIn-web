import { useState } from "react";
import { createContext, ReactNode } from "react";
import toast from "react-hot-toast";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { NewTaskProps } from "../types/TaskPorps";

export interface TaskContextProps {
  isLoadingTask: boolean;
  createTask(body: NewTaskProps): Promise<void>
}

export const TaskContext = createContext<TaskContextProps>(
  {} as TaskContextProps
);

export const TaskProvider = ({ children }: { children: ReactNode }) => {

  const [isLoadingTask, setIsLoadingTask] = useState(false);


  async function createTask(body: NewTaskProps) {
    setIsLoadingTask(true);
    await api.post("tasks", body).then(() => {
      toast.success("Task criada com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoadingTask(false);
    });
  }



  return (
    <TaskContext.Provider
      value={{
        createTask,
        isLoadingTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
