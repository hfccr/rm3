import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Account } from "./../components";
import Link from "next/link";
import { Nav } from "./../components/Nav";

// displays a page header

export default function Header({ web3 }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">RM3</Link>
          </Typography>
          <Nav web3={web3} />
          <Account {...web3} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
