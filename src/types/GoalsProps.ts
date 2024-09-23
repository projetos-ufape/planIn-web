import { CategoryColorType } from "./CategoryProps";

export type ColumnType = "open" | "notReached" | "partiallyReached" | "reached";

export type GoalProps = {
  id: number;
  title: string;
  endDate?: Date;
  category: {
    _id: string;
    title: string;
    color: CategoryColorType;
  };
  columnId: ColumnType;
};

export type NewGoalProps = {
  title: string;
  endDate?: Date;
  category_id: string;
  columnId: ColumnType;
};

export type GoalsSummaryProps = {
  open: GoalProps[];
  notReached: GoalProps[];
  partiallyReached: GoalProps[];
  reached: GoalProps[];
};
