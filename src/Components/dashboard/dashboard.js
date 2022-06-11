import * as React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/Home" color="inherit">
            Home
          </Link>
          <br />
          <Link href="/ScreenShot" color="inherit">
            ScreenShot
          </Link>
          <Link href="/Filters" color="inherit">
            Filters
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
