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
          values: [1, 2, 5, 2, 5, 6, 5],
          label: "Tarefas concluídas",
        },
        xAxis: [22, 23, 24, 25, 26, 27, 28],
      });
      setShiftBarChartData({
        series: [
          {
            values: [1, 0, 2, 0, 1, 2, 1],
            label: "Matutino",
            color: "#A6CEE3",
          },
          {
            values: [0, 1, 1, 1, 3, 2, 2],
            label: "Vespertino",
            color: "#1F78B4",
          },
          {
            values: [0, 1, 2, 1, 1, 2, 2],
            label: "Noturno",
            color: "#B2DF8A",
          },
        ],
        xAxis: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      });
      setGoalsBarChartData({
        series: [
          {
            values: [0, 1, 2, 1, 0, 2, 0],
            label: "Trabalho",
            color: "#89251F",
          },
          {
            values: [0, 0, 1, 0, 2, 1, 2],
            label: "Faculdade",
            color: "#895F1F",
          },// [1, 2, 5, 2, 5, 6, 5],
          {
            values: [0, 1, 0, 1, 1, 0, 2],
            label: "Pessoal",
            color: "#68428E",
          },
          {
            values: [1, 0, 1, 0, 2, 3, 1],
            label: "Projeto individual",
            color: "#1F8970",
          },
        ],
        xAxis: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
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
  }, [date, period, mode]);

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
