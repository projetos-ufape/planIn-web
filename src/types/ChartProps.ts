export type ChartDataProps = {
  label: string;
  value: number;
  color: string;
};

export type BarChartValuesProps = {
  label: string;
  values: number[];
  color: string;
};

export type BarChartDataProps = {
  series: BarChartValuesProps[];
  xAxis: string[];
};

export type LineChartValuesProps = {
  label: string;
  values: number[];
};

export type LineChartDataProps = {
  series: LineChartValuesProps;
  xAxis: number[];
};
