import { useEffect, useState } from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import { ContainerChart } from "./ContainerChart";
import { PieChart } from "./PieChart";
import {
  BarChartDataProps,
  ChartDataProps,
  LineChartDataProps,
} from "../../types/ChartProps";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";
import { Controls } from "../Controls";
import { PeriodType } from "../../types/PeriodProps";
import { ModeType } from "../../types/ModeProps";

export function Charts() {

  const [loading, setLoading] = useState<boolean>(false);
  const [period, setPeriod] = useState<Omit<PeriodType, 'daily'>>("weekly");
  const [mode, setMode] = useState<ModeType>("goals");
  const [date, setDate] = useState(new Date());

  const [pieData, setPieData] = useState<ChartDataProps[]>([]);
  const [shiftBarChartData, setShiftBarChartData] = useState<BarChartDataProps>(
    { series: [], xAxis: [] }
  );
  const [goalsBarChartData, setGoalsBarChartData] = useState<BarChartDataProps>(
    { series: [], xAxis: [] }
  );
  const [lineChartData, setLineChartData] = useState<LineChartDataProps>({
    series: {
      values: [],
      label: "",
    },
    xAxis: [],
  });

  useEffect(() => {
    //TODO: GET DASHBOARD DATA

    setLoading(true);
    setTimeout(() => {
      setLineChartData({
        series: {
          values: [2, 5.5, 2, 8.5, 1.5, 5],
          label: "Tarefas concluídas",
        },
        xAxis: [1, 2, 3, 4, 5, 6],
      });
      setShiftBarChartData({
        series: [
          {
            values: [4, 3, 5, 7, 2],
            label: "Matutino",
            color: "#A6CEE3",
          },
          {
            values: [1, 6, 3, 6, 5],
            label: "Vespertino",
            color: "#1F78B4",
          },
          {
            values: [2, 5, 6, 4, 8],
            label: "Noturno",
            color: "#B2DF8A",
          },
        ],
        xAxis: ["group A", "group B", "group C"],
      });
      setGoalsBarChartData({
        series: [
          {
            values: [4, 3, 5, 7, 2],
            label: "Trabalho",
            color: "#89251F",
          },
          {
            values: [1, 6, 3, 6, 5],
            label: "Faculdade",
            color: "#895F1F",
          },
          {
            values: [2, 5, 6, 4, 8],
            label: "Pessoal",
            color: "#68428E",
          },
          {
            values: [6, 4, 3, 5, 7],
            label: "Projeto individual",
            color: "#1F8970",
          },
        ],
        xAxis: ["group A", "group B", "group C", "group D", "group E"],
      });
      setPieData([
        { value: 10, label: "Atingidas", color: "#B2DF8A" },
        {
          value: 15,
          label: "Parc. Atingidas",
          color: "#C6B063",
        },
        {
          value: 20,
          label: "Não Atingidas",
          color: "#DE7871",
        },
      ]);

      setLoading(false);
    }, 1500);
  }, [date, period]);

  const getModeText = () => {
    return mode === "goals" ? "metas" : "tarefas"
  }

  return (
    <Box display="flex" flexDirection="column" gap={2} width="100%">
      <Controls period={period} setPeriod={setPeriod} date={date} setDate={setDate} mode={mode} setMode={setMode} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ContainerChart title={`Conclusão de ${getModeText()} por dia`} loading={loading}>
            <LineChart data={lineChartData} />
          </ContainerChart>
        </Grid>
        <Grid item xs={6}>
          <ContainerChart title={`Conclusão de ${getModeText()} por turno`} loading={loading}>
            <BarChart data={shiftBarChartData} />
          </ContainerChart>
        </Grid>
        <Grid item xs={4}>
          <ContainerChart title="Levantamento geral" loading={loading}>
            <PieChart data={pieData} />
          </ContainerChart>
        </Grid>
        <Grid item xs={8}>
          <ContainerChart title={`Conclusão de ${getModeText()} por categoria`} loading={loading}>
            <BarChart data={goalsBarChartData} />
          </ContainerChart>
        </Grid>
      </Grid>
    </Box>
  );
}
