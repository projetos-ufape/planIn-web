import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { CategoryProps } from "../types/CategoryProps";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { useAuth } from "../hooks/useAuth";

export interface CategoryContextProps {
  isLoadingCategory: boolean;
  categories: CategoryProps[];
  createCategory: (name: string, color: string) => void;
  updateCategory: (category: CategoryProps) => void;
}

export const CategoryContext = createContext<CategoryContextProps>(
  {} as CategoryContextProps
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  function createCategory(name: string, color: string) {
    // TODO
  }

  function updateCategory(category: CategoryProps) {
    // TODO
  }

  async function getCategories() {
    setIsLoadingCategory(true);

    await api.get("categories").then((response) => {
      const { data }: { data: CategoryProps[] } = response.data;
      setCategories(data);
      console.log(data)
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoadingCategory(false);
    })
  }

  useEffect(() => {
    if (user.id) {
      getCategories();
    }
  }, [user]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        createCategory,
        isLoadingCategory,
        updateCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
