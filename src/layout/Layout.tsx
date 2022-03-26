import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={theme => ({
        maxWidth: theme.breakpoints.values.md,
        margin: "0 auto",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(2),
      })}
    >
      <NavBar />
      {/* Spacer */}
      <Box
        sx={theme => ({
          marginTop: theme.mixins.toolbar,
        })}
      />
      {/* Children */}
      {children}
    </Box>
  );
};

export default Layout;
