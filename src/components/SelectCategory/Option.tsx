import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  OutlinedInput,
  Popover,
  Typography,
  useTheme,
} from "@mui/material";
import { COLORS } from "../../utils/theme";
import {
  Add,
  DeleteOutline,
  MoreHoriz,
  SaveOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { categoriesColors, CategoryColorType, CategoryProps } from "../../types/CategoryProps";

type OptionProps = {
  category?: CategoryProps
  create?: boolean;
};

export function Option({ create, category }: OptionProps) {
  const { palette } = useTheme();
  const [name, setName] = useState(category?.title || "");
  const [color, setColor] = useState<CategoryColorType>(category?.color || "ORANGE");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setName(category?.title || "");
    setColor(category?.color || "ORANGE");
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", height: 24 }}
      >
        {create ? (
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleClick(e);
            }}
          >
            <Add fontSize="small" />
          </IconButton>
        ) : (
          <>
            <Chip
              size="small"
              label={name}
              sx={{
                borderRadius: 1,
                color: COLORS.white,
                backgroundColor: categoriesColors[color].color,
                fontSize: 12,
                letterSpacing: 0.5,
                fontWeight: 500,
              }}
            />
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleClick(e);
              }}
            >
              <MoreHoriz fontSize="small" />
            </IconButton>
          </>
        )}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: 20,
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          borderRadius={1}
          display="flex"
          flexDirection="column"
          gap={1}
          padding={1}
          maxWidth={174}
        >
          <OutlinedInput
            type="text"
            value={name}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              setName(e.target.value);
            }}
            size="small"
            sx={{ height: 28, fontSize: 12 }}
          />
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              variant="text"
              size="small"
              startIcon={<DeleteOutline fontSize="small" />}
              sx={{ borderRadius: 1, textTransform: "none" }}
              color="secondary"
            >
              Excluir
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={<SaveOutlined fontSize="small" />}
              sx={{ borderRadius: 1, textTransform: "none" }}
              color="secondary"
            >
              Salvar
            </Button>
          </Box>
          <Divider sx={{ marginLeft: -8, marginRight: -8 }} />
          <Box display="flex" flexDirection="column" gap={0.5}>
            <Typography
              fontSize={10}
              letterSpacing={0.5}
              fontWeight={500}
              color={palette.text.secondary}
            >
              Cores
            </Typography>
            <Box display="flex" flexDirection="column" gap={0.4}>
              {Object.keys(categoriesColors).map((c, index) => {
                const info = categoriesColors[c as keyof typeof categoriesColors];
                return (
                  <Button
                    variant={c === color ? "contained" : "text"}
                    color={info.color === color ? "primary" : undefined}
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setColor(c as keyof typeof categoriesColors);
                    }}
                    sx={{
                      bgcolor:
                        c === color ? palette.secondary.dark : "",
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingRight: 1,
                      paddingLeft: 1,
                    }}
                  >
                    <Box
                      bgcolor={info.color}
                      width={16}
                      height={16}
                      borderRadius={0.5}
                    />
                    <Typography
                      fontSize={12}
                      letterSpacing={0.5}
                      color={palette.text.primary}
                      textTransform="none"
                    >
                      {info.name}
                    </Typography>
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
