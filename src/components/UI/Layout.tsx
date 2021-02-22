import React, { FC } from "react";
import { Box } from "theme-ui";

export const Layout: FC = ({ children }) => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);
