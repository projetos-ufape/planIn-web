import { AccountCircle, KeyboardArrowDown, NotificationsNone, Search } from "@mui/icons-material";
import { Badge, Box, IconButton, InputBase, useTheme } from "@mui/material";
import { Menu } from "./Menu";

export function NavBar() {

  const { palette } = useTheme();

  return (
    <Box display="flex" bgcolor={palette.background.paper} height={56} gap={2} justifyContent="space-between" alignItems="center" paddingLeft={2} paddingRight={2}>
      <Menu />
      <Box bgcolor={palette.background.default} display="flex" alignItems="center" justifyItems="center" gap={1} borderRadius={28} height={40} width="100%" maxWidth={498} paddingLeft={3} paddingRight={1} >
        <InputBase
          placeholder="Buscar no seu workspace"
          size="small"
          inputProps={{style:{padding: 0}}}
          sx={{border: 0, bgcolor: palette.background.default, borderRadius: 28, width:"100%"}}
        />
        <IconButton size="small">
          <Search sx={{color: palette.text.secondary}} />
        </IconButton>
      </Box>
      <Box display="flex" alignItems="center" justifyItems="center" gap={1}>
      <IconButton aria-label="cart">
        <Badge color="secondary" variant="dot">
          <NotificationsNone /> 
        </Badge>
      </IconButton>
      <Box display="flex" alignItems="center" justifyItems="center" gap={0.25}>
        <AccountCircle color="secondary" />
        <IconButton size="small" >
          <KeyboardArrowDown />  
        </IconButton>        
      </Box>
      </Box>
    </Box>
  )
}