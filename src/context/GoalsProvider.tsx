import { useEffect, useState } from "react";
import { createContext, ReactNode } from "react";
import { ColumnType, GoalProps, GoalsSummaryProps } from "../types/GoalsProps";
import { api } from "../service/api";

export interface GoalsContextProps {
  moveGoal: (goal: GoalProps, position: number, columnId: ColumnType) => Promise<void>;
  isGoalsLoading: boolean;
  goals: GoalsSummaryProps;
}

export const GoalsContext = createContext<GoalsContextProps>(
  {} as GoalsContextProps
);

export const GoalsProvider = ({ children }: { children: ReactNode }) => {
  const [goals, setGoals] = useState<GoalsSummaryProps>({
    open: [],
    notReached: [],
    partiallyReached: [],
    reached: [],
  });
  const [isGoalsLoading, setIsGoalsLoading] = useState(false);
  
  async function moveGoal(goal: GoalProps, position: number, columnId: ColumnType) {
    const pos = position === -1 ? 0 : position;
    const newGoals = { ...goals };
  
    newGoals[goal.columnId] = newGoals[goal.columnId].filter(item => item.id !== goal.id);

    const updatedColumn = [...newGoals[columnId]];
    updatedColumn.splice(pos, 0, { ...goal, columnId: columnId });
    newGoals[columnId] = updatedColumn;
  
    setGoals(newGoals);
  
    const body: Record<ColumnType, number[]> = {} as Record<ColumnType, number[]>;

    if (goal.columnId !== columnId) {
      body[goal.columnId] = newGoals[goal.columnId].map(i => i.id);
      body[columnId] = newGoals[columnId].map(i => i.id);
  } else {
      body[columnId] = newGoals[columnId].map(i => i.id);
  }

    // await api.patch("goals/order", body).then(() => {}).catch(() => {});

  }
  
  useEffect(() => {
    setIsGoalsLoading(true);

    // await api.get("goals").then(() => {}).catch(() => {}).finally(() => {});

    setGoals({
      open: [
        {
          id: 0,
          title: "Criar exemplo de banco de dados usando SQL",
          category: {
            label: "Faculdade",
            color: "#895F1F",
          },
          columnId: "open",
        },
        {
          id: 1,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "open",
        },
        {
          id: 2,
          title: "Criar exemplo de banco de dados usando SQL",
          category: {
            label: "Faculdade",
            color: "#895F1F",
          },
          columnId: "open",
        },
        {
          id: 3,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "open",
        },
      ],
      notReached: [
        {
          id: 4,
          title: "Criar exemplo de banco de dados usando SQL",
          category: {
            label: "Faculdade",
            color: "#895F1F",
          },
          columnId: "notReached",
        },
        {
          id: 7,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "notReached",
        },
      ],
      partiallyReached: [
        {
          id: 8,
          title: "Criar exemplo de banco de dados usando SQL",
          category: {
            label: "Faculdade",
            color: "#895F1F",
          },
          columnId: "partiallyReached",
        },
        {
          id: 9,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "partiallyReached",
        },
        {
          id: 10,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "partiallyReached",
        },
        {
          id: 5,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "partiallyReached",
        },
      ],
      reached: [
        {
          id: 11,
          title: "Criar exemplo de banco de dados usando SQL",
          category: {
            label: "Faculdade",
            color: "#895F1F",
          },
          columnId: "reached",
        },
        {
          id: 12,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "reached",
        },
        {
          id: 13,
          title: "Configurar API",
          category: {
            label: "Trabalho",
            color: "#89251F",
          },
          columnId: "reached",
        },
      ],
    });

    setTimeout(() => {
      setIsGoalsLoading(false);
    }, 1500);
  }, []);

  return (
    <GoalsContext.Provider
      value={{ moveGoal, goals, isGoalsLoading }}
    >
      {children}
    </GoalsContext.Provider>
  );
};
