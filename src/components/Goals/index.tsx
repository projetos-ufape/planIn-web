import { Grid } from "@mui/material";
import { Column } from "./Column";
import { useEffect, useState } from "react";
import { GoalsSummaryProps } from "../../types/GoalsProps";

export function Goals() {
  const [goals, setGoals] = useState<GoalsSummaryProps>({
    open: [
      {
        id: 0,
        title: "Criar exemplo de banco de dados usando SQL",
        category: {
          label: "Faculdade",
          color: "#895F1F",
        },
        position: 1,
        columnId: "open",
      },
      {
        id: 1,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 2,
        columnId: "open",
      },
      {
        id: 2,
        title: "Criar exemplo de banco de dados usando SQL",
        category: {
          label: "Faculdade",
          color: "#895F1F",
        },
        position: 3,
        columnId: "open",
      },
      {
        id: 3,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 4,
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
        position: 1,
        columnId: "notReached",
      },
      {
        id: 7,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 2,
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
        position: 1,
        columnId: "partiallyReached",
      },
      {
        id: 9,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 2,
        columnId: "partiallyReached",
      },
      {
        id: 10,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 3,
        columnId: "partiallyReached",
      },
      {
        id: 5,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 4,
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
        position: 1,
        columnId: "reached",
      },
      {
        id: 12,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 2,
        columnId: "reached",
      },
      {
        id: 13,
        title: "Configurar API",
        category: {
          label: "Trabalho",
          color: "#89251F",
        },
        position: 3,
        columnId: "reached",
      },
    ],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Grid container minHeight={500} spacing={3}>
      <Grid item xs={3}>
        <Column loading={loading} label="Em aberto" data={goals.open} />
      </Grid>
      <Grid item xs={3}>
        <Column
          loading={loading}
          label="Não atingidas"
          data={goals.notReached}
        />
      </Grid>
      <Grid item xs={3}>
        <Column
          loading={loading}
          label="Parcialmente atingidas"
          data={goals.partiallyReached}
        />
      </Grid>
      <Grid item xs={3}>
        <Column loading={loading} label="Atingidas" data={goals.reached} />
      </Grid>
    </Grid>
  );
}
