export type ColumnType = "open" | "notReached" | "partiallyReached" | "reached";

export type GoalProps = {
  id: number;
  title: string;
  endDate?: Date;
  category: {
    label: string;
    color: string;
  };
  columnId: ColumnType;
};

export type GoalsSummaryProps = {
  open: GoalProps[];
  notReached: GoalProps[];
  partiallyReached: GoalProps[];
  reached: GoalProps[];
};
