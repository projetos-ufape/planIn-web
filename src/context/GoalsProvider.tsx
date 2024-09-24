import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import {
  ColumnType,
  GoalProps,
  GoalsSummaryProps,
  NewGoalProps,
  StatusGoalType,
} from "../types/GoalsProps";
import { api } from "../service/api";
import { handleError } from "../utils/handleError";
import { useAuth } from "../hooks/useAuth";

export interface GoalsContextProps {
  moveGoal: (
    goal: GoalProps,
    position: number,
    columnId: ColumnType
  ) => Promise<void>;
  createGoal: (goal: NewGoalProps) => Promise<void>;
  updateGoal: (id: string, status: StatusGoalType) => Promise<void>
  deleteGoal: (id: string) => Promise<void>;
  isGoalsLoading: boolean;
  goals: GoalsSummaryProps;
}

export const GoalsContext = createContext<GoalsContextProps>(
  {} as GoalsContextProps
);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [goals, setGoals] = useState<GoalsSummaryProps>({
    notReached: [],
    partiallyReached: [],
    reached: [],
  });
  const [isGoalsLoading, setIsGoalsLoading] = useState(false);

  async function moveGoal(
    goal: GoalProps,
    position: number,
    columnId: ColumnType
  ) {
    const pos = position === -1 ? 0 : position;
    const newGoals = { ...goals };

    newGoals[goal.columnId] = newGoals[goal.columnId].filter(
      (item) => item._id !== goal._id
    );

    const updatedColumn = [...newGoals[columnId]];
    updatedColumn.splice(pos, 0, { ...goal, columnId: columnId });
    newGoals[columnId] = updatedColumn;

    setGoals(newGoals);

    // const body: Record<ColumnType, number[]> = {} as Record<
    //   ColumnType,
    //   number[]
    // >;

    // if (goal.columnId !== columnId) {
    //   body[goal.columnId] = newGoals[goal.columnId].map((i) => i._id);
    //   body[columnId] = newGoals[columnId].map((i) => i._id);
    // } else {
    //   body[columnId] = newGoals[columnId].map((i) => i._id);
    // }

    const status: StatusGoalType = columnId === "notReached" ? "NOT_REACHED" : columnId === "partiallyReached" ? "PARTIALLY_REACHED" : "REACHED";
    await updateGoal(goal._id, status).then(() => {
      
    });

    // await api.patch("goals/order", body).then(() => {}).catch(() => {});
  }

  async function getGoals(loading: boolean = true) {
    setIsGoalsLoading(loading);
    await api
      .get("goals")
      .then((res) => {
        const {data}:{ data: GoalProps[]} = res.data;
        console.log(data);
        const notReached: GoalProps[] = [];
        const partiallyReached: GoalProps[] = [];
        const reached: GoalProps[] = [];

        data.forEach((g) => {
          if (g.status === "NOT_REACHED") notReached.push({...g, columnId: "notReached"});
          else if (g.status === "PARTIALLY_REACHED") partiallyReached.push({...g, columnId: "partiallyReached"});
          else reached.push({...g, columnId: "reached"});
        })

        setGoals({
          notReached,
          partiallyReached,
          reached,
        });
      })
      .catch((err) => {
        handleError(err);
        setGoals({
          notReached: [],
          partiallyReached: [],
          reached: [],
        });
      })
      .then(() => setIsGoalsLoading(false));
  }

  async function createGoal(goal: NewGoalProps) {
    setIsGoalsLoading(true);
    await api
      .post(`goals`, goal)
      .then(() => {})
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        getGoals();
      });
  }

  async function updateGoal(id: string, status: StatusGoalType) {
    setIsGoalsLoading(true);
    await api
      .put(`goals/${id}`, {
        status
      })
      .then(() => {getGoals()})
      .catch((err) => {
        handleError(err);
      });
  }

  async function deleteGoal(id: string) {
    setIsGoalsLoading(true);
    await api
      .delete(`goals/${id}`)
      .then(() => {})
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        getGoals();
        setIsGoalsLoading(false);
      });
  }

  useEffect(() => {
    if (user) {
      getGoals();
    }
  }, [user]);

  return (
    <GoalsContext.Provider
      value={{
        moveGoal,
        goals,
        isGoalsLoading,
        createGoal,
        updateGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
