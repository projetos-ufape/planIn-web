import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { CategoryColorType, CategoryProps } from "../types/CategoryProps";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

export interface CategoryContextProps {
  isLoadingCategory: boolean;
  categories: CategoryProps[];
  createCategory: (name: string, color: CategoryColorType) => Promise<void>;
  updateCategory: (category: CategoryProps) => Promise<void>;
  deleteCategory: (id: string) => Promise<void>;
}

export const CategoryContext = createContext<CategoryContextProps>(
  {} as CategoryContextProps
);

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  async function createCategory(title: string, color: CategoryColorType) {
    setIsLoadingCategory(true);
    await api.post("categories", { title, color }).then((response) => {
      const { data }: { data: string } = response.data;
      setCategories([...categories, { title, color, _id: data}]);
      toast.success("Categoria criada com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoadingCategory(false);
    })
  }

  async function updateCategory(category: CategoryProps) {
    setIsLoadingCategory(true);
    await api.put(`categories/${category._id}`, {
      title: category.title,
      color: category.color
    }).then(() => {
      const cats = [...categories];
      const i = cats.findIndex((c) => c._id === category._id);
      cats[i] = category;
      setCategories(cats);
      toast.success("Categoria atualizada com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoadingCategory(false);
    })
  }

  async function deleteCategory(id: string) {
    setIsLoadingCategory(true);
    await api.delete(`categories/${id}`).then(() => {
      let cats = [...categories];
      cats = cats.filter((c) => c._id !== id);
      setCategories(cats);
      toast.success("Categoria removida com sucesso!");
    }).catch((err) => {
      handleError(err);
    }).finally(() => {
      setIsLoadingCategory(false);
    })
  }

  async function getCategories() {
    setIsLoadingCategory(true);

    await api.get("categories").then((response) => {
      const { data }: { data: CategoryProps[] } = response.data;
      setCategories(data);
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
        deleteCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
