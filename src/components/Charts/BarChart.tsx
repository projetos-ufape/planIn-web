import { BarChart as BarChartMui } from "@mui/x-charts";
import { FONT } from "../../utils/theme";
import { BarChartDataProps } from "../../types/ChartProps";

type BarChartProps = {
  data: BarChartDataProps;
};

export function BarChart({ data }: BarChartProps) {
  return (
    <BarChartMui
      xAxis={[
        {
          scaleType: "band",
          data: data.xAxis,
        },
      ]}
      series={data.series.map((info) => {
        return {
          ...info,
          data: info.values,
          highlightScope: { highlighted: "series", faded: "global" },
        };
      })}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "middle" },
          padding: -4,
          itemGap: 16,
          labelStyle: {
            fontSize: FONT.body.sm.size,
            letterSpacing: FONT.body.sm.letter,
          },
          itemMarkWidth: 12,
          itemMarkHeight: 12,
          classes: {
            mark: "rounded-rect",
            root: "",
            series: "",
          },
        },
      }}
    />
  );
}
