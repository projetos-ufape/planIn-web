import { Box, MenuItem, Select, TextField } from "@mui/material";
import { Option } from "./Option";
import { COLORS } from "../../utils/theme";
import { useState } from "react";


export function SelectCategory() {

  const [category, setCategory] = useState<string>("");

  return (
    <TextField
      select
      label="Categoria"
      variant='outlined'
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      size="medium"
    >
      <MenuItem disabled value="">
        Selecione ou crie uma categoria
      </MenuItem>
      <MenuItem value='luan'>
        <Option label="Uma categoria" color={COLORS.purple} />
      </MenuItem>
    </TextField>
  )
}