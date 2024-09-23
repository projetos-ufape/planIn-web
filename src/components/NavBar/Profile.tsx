import { AccountCircle, KeyboardArrowDown } from "@mui/icons-material";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export function Profile() {
  const { logout } = useAuth();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
          display="flex"
          alignItems="center"
          justifyItems="center"
          
        >
            <AccountCircle color="secondary" />
          <IconButton size="small" onClick={handleClick}>
            <KeyboardArrowDown />
          </IconButton>
        </Box>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  )
}