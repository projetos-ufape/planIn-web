import { useContext } from "react";
import { TaskContext, TaskContextProps } from "../context/TaskProvider";

export function useTask() {
  return useContext<TaskContextProps>(TaskContext);
}