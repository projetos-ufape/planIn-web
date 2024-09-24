import { Box, Typography, useTheme } from "@mui/material";
import { Card } from "./Card";
import { FONT } from "../../utils/theme";
import { ColumnType, GoalProps } from "../../types/GoalsProps";
import { Loading } from "../Loading";
import { DropZone } from "./DropZone";
import useGoals from "../../hooks/useGoals";

type ColumnProps = {
  label: string;
  columnId: ColumnType;
  data: GoalProps[];
};

export function Column({ label, columnId, data }: ColumnProps) {
  const { isGoalsLoading } = useGoals();
  const { palette } = useTheme();

  const LoadingComponent = () => {
    return (
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        justifyContent="center"
        marginTop={8}
      >
        <Loading />
      </Box>
    );
  };

  return (
    <Box display="flex" flexDirection="column" gap={1} minHeight="100%">
      <Typography
        color={palette.text.primary}
        fontSize={FONT.title.sm.size}
        letterSpacing={FONT.title.sm.letter}
        fontWeight={FONT.title.sm.weight}
      >
        {label}
      </Typography>
      <Box display="flex" flexDirection="column" flex="auto" minHeight="100%">
        {isGoalsLoading ? (
          <LoadingComponent />
        ) : (
          <>
            {data.map((g, index) => {
              return (
                <Box key={g._id} display="flex" flexDirection="column">
                  {index === 0 && (
                    <DropZone fatherId={g._id} columnId={columnId} position={index - 1} />
                  )}
                  <Card data={g} />
                  {index !== data.length - 1 && (
                    <DropZone fatherId={g._id} columnId={columnId} position={index + 1} />
                  )}
                </Box>
              );
            })}
          </>
        )}
        <DropZone
          position={data?.length + 1 || 0}
          flexGrow={1}
          columnId={columnId}
        />
      </Box>
    </Box>
  );
}
