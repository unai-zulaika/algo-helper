import * as React from "react";
import Box from "@mui/joy/Box";

export default function HeaderBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 0,
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      HEHE
    </Box>
  );
}
