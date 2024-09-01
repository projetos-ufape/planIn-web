import { useContext } from "react";
import { GoalsContext, GoalsContextProps } from "../context/GoalsProvider";

export default function useGoals() {
  return useContext<GoalsContextProps>(GoalsContext);
}
