import { useContext } from "react";
import { CategoryContext, CategoryContextProps } from "../context/CategoryProvider";

export function useCategory() {
  return useContext<CategoryContextProps>(CategoryContext);
}