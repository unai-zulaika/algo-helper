import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";

interface HeaderBarProps {
  toggleListVisibility: () => void; // Assuming the function takes no arguments and returns nothing
}

export default function HeaderBar({ toggleListVisibility }: HeaderBarProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 0,
        justifyContent: "space-between",
        padding: "5px",
        maxHeight: "100%",
      }}
      flexDirection={"column"}
    >
      <IconButton
        onClick={toggleListVisibility}
        sx={{ mr: 2, flexGrow: 0, marginRight: 0 }}
      >
        <ViewSidebarOutlinedIcon />
      </IconButton>
    </Box>
  );
}
