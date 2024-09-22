import { MenuItem, TextField, Typography } from "@mui/material";
import { Option } from "./Option";
import { COLORS, FONT } from "../../utils/theme";
import { useState } from "react";


export function SelectCategory() {

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
      <MenuItem value="luan">
        <Option label="Uma categoria" color={COLORS.purple} />
      </MenuItem>
      <MenuItem value="create">
        <Option create />
      </MenuItem>
    </TextField>
  );
}