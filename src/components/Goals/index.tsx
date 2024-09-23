import { Grid } from "@mui/material";
import { Column } from "./Column";
import useGoals from "../../hooks/useGoals";

export function Goals() {
  const { goals } = useGoals();

  return (
    <Grid container minHeight={500} spacing={3}>
      <Grid item xs={4}>
        <Column label="Não atingidas" data={goals.notReached} columnId="notReached" />
      </Grid>
      <Grid item xs={4}>
        <Column label="Parcialmente atingidas" data={goals.partiallyReached} columnId="partiallyReached" />
      </Grid>
      <Grid item xs={4}>
        <Column label="Atingidas" data={goals.reached} columnId="reached" />
      </Grid>
    </Grid>
  );
}
