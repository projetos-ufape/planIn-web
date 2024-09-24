import { CategoryColorType } from "./CategoryProps";

export type ColumnType = "notReached" | "partiallyReached" | "reached";
export type StatusGoalType =  "NOT_REACHED" | "PARTIALLY_REACHED" | "REACHED";

export type GoalProps = {
  _id: string;
  title: string;
  description: string;
  status: StatusGoalType;
  end_date?: string;
  priority: "HIGH";
  category: {
    _id: string;
    title: string;
    color: CategoryColorType;
  };
  columnId: ColumnType;
};

export type NewGoalProps = {
  title: string;
  description: string;
  priority: "HIGH";
  end_date?: string;
  category_id: string;
  notification_time_unit?: "MINUTE" | "HOUR" | null;
  notification_time_value?: number | null;
};

export type GoalsSummaryProps = {
  notReached: GoalProps[];
  partiallyReached: GoalProps[];
  reached: GoalProps[];
};
