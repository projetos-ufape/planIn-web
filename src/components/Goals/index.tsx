import { Grid } from "@mui/material";
import { Column } from "./Column";
import { useState } from "react";
import { GoalsSummaryProps } from "../../types/GoalsProps";

export function Goals() {
  const [goals, setGoals] = useState<GoalsSummaryProps>({open:[
    {
      id: 0,
      title: "Criar exemplo de banco de dados usando SQL",
      category: {
        label: "Faculdade",
        color: "#895F1F"
      }
    },
    {
      id: 1,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
    {
      id: 2,
      title: "Criar exemplo de banco de dados usando SQL",
      category: {
        label: "Faculdade",
        color: "#895F1F"
      }
    },
    {
      id: 3,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
  ], 
  notReached: [
    {
      id: 4,
      title: "Criar exemplo de banco de dados usando SQL",
      category: {
        label: "Faculdade",
        color: "#895F1F"
      }
    },
    {
      id: 7,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
  ],
  partiallyReached: [
    {
      id: 8,
      title: "Criar exemplo de banco de dados usando SQL",
      category: {
        label: "Faculdade",
        color: "#895F1F"
      }
    },
    {
      id: 9,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
    {
      id: 10,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
    {
      id: 5,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
  ],
  reached: [
    {
      id: 11,
      title: "Criar exemplo de banco de dados usando SQL",
      category: {
        label: "Faculdade",
        color: "#895F1F"
      }
    },
    {
      id: 12,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
    {
      id: 13,
      title: "Configurar API",
      category: {
        label: "Trabalho",
        color: "#89251F"
      }
    },
  ],});
  

  return (
    <Grid container width="100%" spacing={3}>
      <Grid item xs={3}>
        <Column label="Em aberto" data={goals.open} />
      </Grid>
      <Grid item xs={3}>
        <Column label="Não atingidas" data={goals.notReached} />
      </Grid>
      <Grid item xs={3}>
        <Column label="Parcialmente atingidas" data={goals.partiallyReached} />
      </Grid>
      <Grid item xs={3}>
        <Column label="Atingidas" data={goals.reached} />
      </Grid>
    </Grid>
  )
}