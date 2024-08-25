import { PieChart as PieChartMui } from "@mui/x-charts";
import { FONT } from "../../utils/theme";
import { ChartDataProps } from "../../types/ChartProps";

type PieChartProps = {
  data: ChartDataProps[];
};

export function PieChart({ data }: PieChartProps) {
  return (
    <PieChartMui
      series={[
        {
          data: data.map((info, index) => {
            return { id: index, ...info };
          }),
          highlightScope: { faded: "global", highlighted: "item" },
          faded: {
            innerRadius: 16,
            additionalRadius: -16,
            color: "gray",
          },
        },
      ]}
      margin={{ right: 140 }}
      slotProps={{
        pieArc: {
          overflow: "hidden",
        },
        legend: {
          direction: "column",
          position: { vertical: "middle", horizontal: "right" },
          labelStyle: {
            fontSize: FONT.body.sm.size,
            letterSpacing: FONT.body.sm.letter,
          },
          markGap: 4,
          itemGap: 10,
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
