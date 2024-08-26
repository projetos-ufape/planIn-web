import { Box, Typography, useTheme } from "@mui/material";
import { Card } from "./Card";
import { FONT } from "../../utils/theme";
import { GoalProps } from "../../types/GoalsProps";
import { Loading } from "../Loading";

type ColumnProps = {
  label: string;
  data: GoalProps[];
  loading: boolean;
}

export function Column({label, data, loading}: ColumnProps) {
  const { palette } = useTheme();


  const LoadingComponent = () => {
    return (
      <Box display="flex" height="100%" alignItems="center" justifyContent="center" marginTop={8}>
        <Loading />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography
        color={palette.text.primary}
        fontSize={FONT.title.sm.size}
        letterSpacing={FONT.title.sm.letter}
        fontWeight={FONT.title.sm.weight}
      >
        {label}
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        {!loading ? (
          <LoadingComponent />
        ) : (
          <>
            {data.map((g) => {
              return <Card data={g} />;
            })}
          </>
        )}
      </Box>
    </Box>
  );
}
