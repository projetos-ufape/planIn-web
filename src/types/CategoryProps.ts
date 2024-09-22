import { COLORS } from "../utils/theme";

export type CategoryColorType = "ORANGE" | "RED" | "GREEN" | "PURPLE" | "YELLOW";

export type CategoryProps = {
  _id: string;
  title: string;
  color: CategoryColorType;
}


export const categoriesColors = {
  ORANGE: { color: COLORS.orange, name: "Laranja" },
  YELLOW: { color: COLORS.yellow, name: "Amarelo" },
  GREEN: { color: COLORS.green, name: "Verde" },
  PURPLE: { color: COLORS.purple, name: "Roxo" },
  RED: { color: COLORS.red, name: "Vermelho" },
};