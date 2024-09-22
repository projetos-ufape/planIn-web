import { CategoryColorType } from "./CategoryProps"

export type NewTaskProps = {
  title: string
  description: string
  start_date: string
  end_date: string
  status: StatusTaskType
  category_id: string
}

export type StatusTaskType = "EXECUTADA" | "PARCIALMENTE_EXECUTADA" | "ADIADA"

export type TaskProps = {
  _id: string
  title: string
  description: string
  start_date: string
  end_date: string
  status: StatusTaskType
  category: {
    _id: string
    title: string
    color: CategoryColorType
  }
}