import { MenuItem, TextField, Typography } from "@mui/material";
import { Option } from "./Option";
import { FONT } from "../../utils/theme";
import { useState } from "react";
import { useCategory } from "../../hooks/useCategory";


export function SelectCategory() {
  const { categories } = useCategory();
  const [category, setCategory] = useState<string>("");

  return (
    <TextField
      select
      label="Categoria"
      variant="outlined"
      value={category}
      onChange={(e) => {
        if (e.target.value !== "create") {
          setCategory(e.target.value);
        }
      }}
      size="medium"
    >
      <MenuItem disabled value={undefined}>
        <Typography fontSize={FONT.body.sm.size} letterSpacing={FONT.body.sm.letter} >Selecione ou crie uma categoria</Typography>
      </MenuItem>
      {
        categories.map((category) => {
          return (
            <MenuItem key={category._id} value={category._id}>
              <Option category={category} />
            </MenuItem>
          )
        })
      }
      
      <MenuItem value="create">
        <Option create />
      </MenuItem>
    </TextField>
  );
}