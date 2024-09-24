import { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { Tag } from "../Tag";
import { COLORS, FONT } from "../../utils/theme";
import useColorTheme from "../../hooks/useColorTheme";
import { ColumnType, GoalProps } from "../../types/GoalsProps";
import useGoals from "../../hooks/useGoals";
import { categoriesColors, CategoryColorType } from "../../types/CategoryProps";

export function DropZone({
  position,
  fatherId,
  columnId,
  height = 8,
  flexGrow,
}: {
  fatherId?: string;
  columnId: ColumnType;
  position: number;
  height?: number | string;
  flexGrow?: number;
}) {
  const { palette } = useTheme();
  const { mode } = useColorTheme();
  const { moveGoal } = useGoals();
  const ref = useRef(null);

  const [isOver, setIsOver] = useState(false);
  const [data, setData] = useState<GoalProps | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return dropTargetForElements({
      element,
      onDrag({ source }) {
        if (source.data.id != fatherId) {
          setIsOver(true);
          setData(source.data as GoalProps);
        }
      },
      onDragEnter({ source }) {
        if (source.data.id != fatherId) {
          setIsOver(true);
          setData(source.data as GoalProps);
        }
      },
      onDragLeave() {
        setIsOver(false);
      },
      async onDrop({ source }) {
        setIsOver(false);
        await moveGoal(source.data as GoalProps, position, columnId);
      },
    });
  }, [data, fatherId, position]);

  return (
    <Box ref={ref} flexGrow={flexGrow} display="flex" flexDirection="column">
      {isOver ? (
        <Box
          bgcolor={COLORS[mode].background.secondary}
          display="flex"
          flexDirection="column"
          gap={2}
          padding={2}
          border={1}
          borderColor={COLORS[mode].background.border}
          borderRadius={2}
          marginTop={0.5}
          marginBottom={0.5}
          sx={{
            opacity: 0.4,
          }}
        >
          <Typography
            fontSize={FONT.body.sm.size}
            letterSpacing={FONT.body.sm.letter}
            color={palette.text.primary}
          >
            {data?.title || ""}
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Tag
              label={data?.category.title || ""}
              color={categoriesColors[data?.category?.color as CategoryColorType].color || ""}
            />
            <Typography
              fontSize={10}
              letterSpacing={FONT.body.sm.letter}
              fontWeight={500}
              color={palette.text.secondary}
            >
              01 Set
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box minHeight={height} flexGrow={flexGrow}></Box>
      )}
    </Box>
  );
}
