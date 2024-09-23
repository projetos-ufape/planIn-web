import {
  Box,
  Button,
  Chip,
  CircularProgress,
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
import {
  categoriesColors,
  CategoryColorType,
  CategoryProps,
} from "../../types/CategoryProps";
import toast from "react-hot-toast";
import { useCategory } from "../../hooks/useCategory";

type OptionProps = {
  category?: CategoryProps;
  create?: boolean;
  selectedId: string;
  setSelected: (value: string) => void;
};

export function Option({ create, category, selectedId, setSelected }: OptionProps) {
  const { palette } = useTheme();
  const { isLoadingCategory, updateCategory, createCategory, deleteCategory } = useCategory();
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [title, setTitle] = useState(category?.title || "");
  const [color, setColor] = useState<CategoryColorType>(
    category?.color || "ORANGE"
  );
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTitle(category?.title || "");
    setColor(category?.color || "ORANGE");
    setIsLoadingSave(false);
  };
  const open = Boolean(anchorEl);

  async function handleSave() {
    if (title.trim().length < 2) {
      toast.error("Nome precisa ter pelo menos 2 caracteres");
      return;
    }
    setIsLoadingSave(true);
    if (category) {
      await updateCategory({ _id: category._id, title, color });
      if (category._id === selectedId) {
        setSelected("");
        setTimeout(() => {
            setSelected(category._id);
          }, 0);
      }
    } else {
      await createCategory(title, color);
    }
    setIsLoadingSave(false);
  }

  async function handleDelete() {
    if (!category) return;

    setIsLoadingDelete(true);
    await deleteCategory(category._id).then(() => {
      if (category._id === selectedId) {
        setSelected("");
      }
    });
    setIsLoadingDelete(false);
  }

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
              label={title}
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
            value={title}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => e.stopPropagation()}
            size="small"
            sx={{ height: 28, fontSize: 12 }}
            disabled={isLoadingCategory}
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
              disabled={isLoadingCategory}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              {isLoadingDelete ? <CircularProgress size={"1rem"} /> : "Excluir"}
            </Button>
            <Button
              variant="text"
              size="small"
              startIcon={<SaveOutlined fontSize="small" />}
              sx={{ borderRadius: 1, textTransform: "none" }}
              color="secondary"
              onClick={(e) => {
                e.stopPropagation();
                handleSave();
              }}
              disabled={isLoadingCategory}
            >
              {isLoadingSave ? <CircularProgress size={"1rem"} /> : "Salvar"}
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
                const info =
                  categoriesColors[c as keyof typeof categoriesColors];
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
                      bgcolor: c === color ? palette.secondary.dark : "",
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      paddingRight: 1,
                      paddingLeft: 1,
                    }}
                    disabled={isLoadingCategory}
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
