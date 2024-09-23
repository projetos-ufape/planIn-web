import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import {
  ColumnType,
  GoalProps,
  GoalsSummaryProps,
  NewGoalProps,
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
  updateGoal: (goal: GoalProps) => Promise<void>;
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
    open: [],
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
      (item) => item.id !== goal.id
    );

    const updatedColumn = [...newGoals[columnId]];
    updatedColumn.splice(pos, 0, { ...goal, columnId: columnId });
    newGoals[columnId] = updatedColumn;

    setGoals(newGoals);

    const body: Record<ColumnType, number[]> = {} as Record<
      ColumnType,
      number[]
    >;

    if (goal.columnId !== columnId) {
      body[goal.columnId] = newGoals[goal.columnId].map((i) => i.id);
      body[columnId] = newGoals[columnId].map((i) => i.id);
    } else {
      body[columnId] = newGoals[columnId].map((i) => i.id);
    }

    // await api.patch("goals/order", body).then(() => {}).catch(() => {});
  }

  async function getGoals() {
    setIsGoalsLoading(true);
    await api
      .get("goals")
      .then((res) => {
        // TODO TRATAMENTO
        console.log(res);
        setGoals({
          open: [
            {
              id: 0,
              title: "Criar exemplo de banco de dados usando SQL",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "open",
            },
            {
              id: 1,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Teste",
                color: "RED",
              },
              columnId: "open",
            },
            {
              id: 2,
              title: "Criar exemplo de banco de dados usando SQL",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "open",
            },
            {
              id: 3,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "test",
                color: "PURPLE",
              },
              endDate: new Date(),
              columnId: "open",
            },
          ],
          notReached: [
            {
              id: 4,
              title: "Criar exemplo de banco de dados usando SQL",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "notReached",
            },
            {
              id: 7,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Trabalho",
                color: "GREEN",
              },
              columnId: "notReached",
            },
          ],
          partiallyReached: [
            {
              id: 8,
              title: "Criar exemplo de banco de dados usando SQL",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "partiallyReached",
            },
            {
              id: 9,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Teste",
                color: "RED",
              },
              endDate: new Date(),
              columnId: "partiallyReached",
            },
            {
              id: 10,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "partiallyReached",
            },
            {
              id: 5,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "partiallyReached",
            },
          ],
          reached: [
            {
              id: 11,
              title: "Criar exemplo de banco de dados usando SQL",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "reached",
            },
            {
              id: 12,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "reached",
            },
            {
              id: 13,
              title: "Configurar API",
              category: {
                _id: "dsfds43",
                title: "Faculdade",
                color: "ORANGE",
              },
              columnId: "reached",
            },
          ],
        });
      })
      .catch((err) => {
        handleError(err);
        setGoals({
          open: [],
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

  async function updateGoal(goal: GoalProps) {
    setIsGoalsLoading(true);
    await api
      .put(`goals/${goal.id}`, goal)
      .then(() => {})
      .catch((err) => {
        handleError(err);
      })
      .finally(() => {
        getGoals();
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
