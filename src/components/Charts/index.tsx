import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import { ReactNode } from "react";
import { FONT } from "../../utils/theme";

export function Charts() {
  const { palette } = useTheme();

  const ContainerChart = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => {
    return (
      <Paper>
        <Box padding={2} display="flex" flexDirection="column">
          <Typography
            fontSize={FONT.title.sm.size}
            fontWeight={FONT.title.sm.weight}
            letterSpacing={FONT.title.sm.letter}
            color={palette.text.secondary}
          >
            {title}
          </Typography>
          {children}
        </Box>
      </Paper>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <ContainerChart title="Conclusão de metas por dia">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                label: "Metas concluídas",
                color: palette.primary.main,
              },
            ]}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                itemMarkHeight: 2,
                itemMarkWidth: 20,
                padding: -2,
              },
            }}
            height={256}
          />
        </ContainerChart>
      </Grid>
      <Grid item xs={6}>
        <ContainerChart title="Conclusão de metas por turno">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["group A", "group B", "group C", "group D", "group E"],
              },
            ]}
            series={[
              {
                data: [4, 3, 5, 7, 2],
                label: "Matutino",
                color: "#A6CEE3",
                highlightScope: { highlighted: "series", faded: "global" },
              },
              {
                data: [1, 6, 3, 6, 5],
                label: "Vespertino",
                color: "#1F78B4",
                highlightScope: { highlighted: "series", faded: "global" },
              },
              {
                data: [2, 5, 6, 4, 8],
                label: "Noturno",
                color: "#B2DF8A",
                highlightScope: { highlighted: "series", faded: "global" },
              },
            ]}
            height={256}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                itemMarkHeight: 8,
                itemMarkWidth: 8,
                padding: -4,
                itemGap: 16,
                labelStyle: {
                  fontSize: FONT.body.sm.size,
                  letterSpacing: FONT.body.sm.letter,
                },
              },
            }}
          />
        </ContainerChart>
      </Grid>
      <Grid item xs={4}>
        <ContainerChart title="Levantamento geral">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "Atingidas", color: "#B2DF8A" },
                  {
                    id: 1,
                    value: 15,
                    label: "Parc. Atingidas",
                    color: "#C6B063",
                  },
                  {
                    id: 2,
                    value: 20,
                    label: "Não Atingidas",
                    color: "#DE7871",
                  },
                ],
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 16,
                  additionalRadius: -16,
                  color: "gray",
                },
              },
            ]}
            height={256}
            slotProps={{
              legend: {
                direction: "column",
                position: { vertical: "middle", horizontal: "right" },
                labelStyle: {
                  fontSize: FONT.body.sm.size,
                  letterSpacing: FONT.body.sm.letter,
                },
                markGap: 4,
                itemGap: 10,
                // padding: -36
              },
            }}
          />
        </ContainerChart>
      </Grid>
      <Grid item xs={8}>
        <ContainerChart title="Conclusão de metas por categoria">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: ["group A", "group B", "group C", "group D", "group E"],
              },
            ]}
            series={[
              {
                data: [4, 3, 5, 7, 2],
                label: "Trabalho",
                color: "#89251F",
                highlightScope: { highlighted: "series", faded: "global" },
              },
              {
                data: [1, 6, 3, 6, 5],
                label: "Faculdade",
                color: "#895F1F",
                highlightScope: { highlighted: "series", faded: "global" },
              },
              {
                data: [2, 5, 6, 4, 8],
                label: "Pessoal",
                color: "#68428E",
                highlightScope: { highlighted: "series", faded: "global" },
              },
              {
                data: [6, 4, 3, 5, 7],
                label: "Projeto individual",
                color: "#1F8970",
                highlightScope: { highlighted: "series", faded: "global" },
              },
            ]}
            height={256}
            slotProps={{
              legend: {
                direction: "row",
                position: { vertical: "bottom", horizontal: "middle" },
                itemMarkHeight: 8,
                itemMarkWidth: 8,
                padding: -4,
                itemGap: 16,
                labelStyle: {
                  fontSize: FONT.body.sm.size,
                  letterSpacing: FONT.body.sm.letter,
                },
              },
            }}
          />
        </ContainerChart>
      </Grid>
    </Grid>
  );
}
