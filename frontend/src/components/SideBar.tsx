import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";

import ViewSidebarOutlinedIcon from "@mui/icons-material/ViewSidebarOutlined";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

interface HeaderBarProps {
  updateResizeableList: (currentNumber: number) => void; // Assuming the function takes no arguments and returns nothing
}

export default function HeaderBar({ updateResizeableList }: HeaderBarProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 0,
        // justifyContent: "space-between",
        gap: 1.5,
        padding: "5px",
        maxHeight: "100%",
      }}
      flexDirection={"column"}
    >
      <IconButton
        onClick={() => updateResizeableList(0)}
        sx={{ mr: 2, flexGrow: 0, marginRight: 0 }}
      >
        <ViewSidebarOutlinedIcon />
      </IconButton>
      <IconButton
        // onClick={}
        onClick={() => updateResizeableList(1)}
        sx={{ mr: 2, flexGrow: 0, marginRight: 0 }}
      >
        <DescriptionIcon />
      </IconButton>
      <IconButton
        // onClick={}
        onClick={() => updateResizeableList(2)}
        sx={{ mr: 2, flexGrow: 0, marginRight: 0 }}
      >
        <AccountTreeIcon />
      </IconButton>

      <IconButton
        // onClick={}
        onClick={() => updateResizeableList(3)}
        sx={{ mr: 2, flexGrow: 0, marginRight: 0 }}
      >
        <TextsmsIcon />
      </IconButton>
    </Box>
  );
}
