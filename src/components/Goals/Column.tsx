import { Box, Typography, useTheme } from "@mui/material";
import { Card } from "./Card";
import { FONT } from "../../utils/theme";
import { GoalProps } from "../../types/GoalsProps";
import { Loading } from "../Loading";
import { DropZone } from "./DropZone";

type ColumnProps = {
  label: string;
  data: GoalProps[];
  loading: boolean;
};

export function Column({ label, data, loading }: ColumnProps) {
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
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            {data.map((g, index) => {
              return (
                <Box key={g.id} display="flex" flexDirection="column">
                  {index === 0 && (
                    <DropZone fatherId={g.id} position={g.position - 1} />
                  )}
                  <Card data={g} />
                  {index !== data.length - 1 && (
                    <DropZone fatherId={g.id} position={g.position - 1} />
                  )}
                </Box>
              );
            })}
          </>
        )}
        <DropZone
          position={data.at(data.length - 1)?.position || 0}
          flexGrow={1}
        />
      </Box>
    </Box>
  );
}
