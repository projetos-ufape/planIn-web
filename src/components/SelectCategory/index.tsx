import { MenuItem, TextField, Typography } from "@mui/material";
import { Option } from "./Option";
import { FONT } from "../../utils/theme";
import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";


export function SelectCategory() {
  const { categories } = useCategory();
  const [categorySelected, setCategorySelected] = useState<string>("");

  return (
    <TextField
      select
      label="Categoria"
      variant="outlined"
      value={categorySelected}
      onChange={(e) => {
        if (e.target.value !== "create") {
          setCategorySelected("");
          setTimeout(() => {
            setCategorySelected(e.target.value);
          }, 0);
        }
      }}
      size="medium"
    >
      <MenuItem disabled value="">
        <Typography fontSize={FONT.body.sm.size} letterSpacing={FONT.body.sm.letter} >Selecione ou crie uma categoria</Typography>
      </MenuItem>
      {
        categories.map((category) => {
          return (
            <MenuItem key={category._id} value={category._id}>
              <Option category={category} selectedId={categorySelected} setSelected={setCategorySelected} />
            </MenuItem>
          )
        })
      }
      
      <MenuItem value="create">
        <Option create selectedId={categorySelected} setSelected={setCategorySelected}  />
      </MenuItem>
    </TextField>
  );
}