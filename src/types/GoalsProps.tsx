export type GoalProps = {
  id: number,
  title: string,
  endDate?: Date,
  category: {
    label: string,
    color: string
  }
}

export type GoalsSummaryProps = {
  open: GoalProps[];
  notReached: GoalProps[];
  partiallyReached: GoalProps[];
  reached: GoalProps[];
}
