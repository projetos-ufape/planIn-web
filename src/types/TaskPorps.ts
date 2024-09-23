import { CategoryColorType } from "./CategoryProps";

export type NewTaskProps = {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: StatusTaskType;
  category_id: string;
  notification_time_unit?: "MINUTE" | "HOUR" | null;
  notification_time_value?: number | null;
};

export type UpdateTaskProps = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status?: StatusTaskType;
  category_id: string;
  notification_time_unit?: "MINUTE" | "HOUR" | null;
  notification_time_value?: number | null;
};

export type StatusTaskType = "EXECUTADA" | "PARCIALMENTE_EXECUTADA" | "ADIADA";

export const statusTask = {
  EXECUTADA: "Finalizada",
  PARCIALMENTE_EXECUTADA: "Criada",
  ADIADA: "Adiada"
}

export type TaskProps = {
  _id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status: StatusTaskType;
  category: {
    _id: string;
    title: string;
    color: CategoryColorType;
  };
  notification_time_unit?: "MINUTE" | "HOUR" | null;
  notification_time_value?: number | null;
};
