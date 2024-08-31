import { useEffect, useRef, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { COLORS, FONT } from "../../utils/theme";
import useColorTheme from "../../hooks/useColorTheme";
import { Tag } from "../Tag";
import { GoalProps } from "../../types/GoalsProps";

type CardProps = {
  data: GoalProps;
};

export function Card({ data }: CardProps) {
  const { palette } = useTheme();
  const { mode } = useColorTheme();

  const ref = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return draggable({
      element,
      getInitialData() {
        return data;
      },
      onDragStart({source}) {
        source.element.classList.add("dragging");
        setIsDragging(true);
      },
      onDrop() {
        setIsDragging(false);
      },
    });
  }, [data]);

  return (
    <Box
      ref={ref}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
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
        opacity: isDragging ? 0.5 : 1,
        cursor: isPressed ? "grabbing" : "grab"
      }}
    >
      <Typography
        fontSize={FONT.body.sm.size}
        letterSpacing={FONT.body.sm.letter}
        color={palette.text.primary}
      >
        {data.title}
      </Typography>

      <Box display="flex" justifyContent="space-between" alignItems="center"  >
        <Tag label={data.category.label} color={data.category.color} />
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
  );
}
