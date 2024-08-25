import { LineChart as LineChartMui } from "@mui/x-charts";
import { FONT } from "../../utils/theme";
import { useTheme } from "@mui/material";
import { LineChartDataProps } from "../../types/ChartProps";

type LineChartProps = {
  data: LineChartDataProps;
};

export function LineChart({ data }: LineChartProps) {
  const { palette } = useTheme();

  return (
    <LineChartMui
      xAxis={[{ data: data.xAxis }]}
      series={[
        {
          data: data.series.values,
          label: data.series.label,
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
          labelStyle: {
            fontSize: FONT.body.sm.size,
            letterSpacing: FONT.body.sm.letter,
          },
        },
      }}
    />
  );
}
